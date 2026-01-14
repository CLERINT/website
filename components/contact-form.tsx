'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  subject: string;
  message: string;
}

const inquiryTypes = [
  { value: 'sales', label: 'Product briefings & sales', description: 'Discovery sessions, procurement, demos' },
  { value: 'support', label: 'Customer success', description: 'Existing customer support' },
  { value: 'security', label: 'Security & responsible disclosure', description: 'Vulnerability reports, security docs' },
  { value: 'press', label: 'Media & partnerships', description: 'Press inquiries, partnerships' },
  { value: 'general', label: 'General inquiry', description: 'Other questions or feedback' },
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getEmailForInquiryType = (type: string) => {
    switch (type) {
      case 'sales': return 'sales@clerint.org';
      case 'support': return 'support@clerint.org';
      case 'security': return 'security@clerint.org';
      case 'press': return 'press@clerint.org';
      default: return 'contact@clerint.org';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Send us a message
        </CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you within one business day.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-400">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-medium">Message sent successfully!</span>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">
              We&apos;ve received your message and will respond within one business day.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
            <div className="flex items-center gap-2 text-red-800 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              <span className="font-medium">Failed to send message</span>
            </div>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
              {errorMessage}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              type="text"
              value={formData.organization}
              onChange={(e) => handleInputChange('organization', e.target.value)}
              placeholder="Your company or organization"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiryType">Type of inquiry *</Label>
            <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                {inquiryTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex flex-col">
                      <span className="font-medium">{type.label}</span>
                      <span className="text-xs text-muted-foreground">{type.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              required
              placeholder="Brief description of your inquiry"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              placeholder="Please provide details about your inquiry..."
              rows={6}
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-muted-foreground">
              * Required fields
            </div>

            <div className="flex gap-3">
              {formData.inquiryType && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`mailto:${getEmailForInquiryType(formData.inquiryType)}`)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email directly
                </Button>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.inquiryType || !formData.subject || !formData.message}
                className="gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Response time: Within 1 business day</span>
            <Badge variant="secondary" className="text-xs">
              <Shield className="h-3 w-3 mr-1" />
              Secure & Private
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
