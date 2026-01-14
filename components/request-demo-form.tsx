'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Shield, Send, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';

interface RequestDemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  teamSize: string;
  useCase: string;
  message: string;
}

const teamSizes = [
  { value: '1-5', label: '1-5 analysts' },
  { value: '6-20', label: '6-20 analysts' },
  { value: '21-50', label: '21-50 analysts' },
  { value: '51-100', label: '51-100 analysts' },
  { value: '100+', label: '100+ analysts' },
];

const useCases = [
  { value: 'threat-intelligence', label: 'Threat Intelligence' },
  { value: 'security-operations', label: 'Security Operations' },
  { value: 'fraud-investigation', label: 'Fraud Investigation' },
  { value: 'corporate-security', label: 'Corporate Security' },
  { value: 'government-intelligence', label: 'Government Intelligence' },
  { value: 'due-diligence', label: 'Due Diligence / Risk Assessment' },
  { value: 'other', label: 'Other' },
];

interface RequestDemoFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function RequestDemoForm({ onSuccess, compact = false }: RequestDemoFormProps) {
  const [formData, setFormData] = useState<RequestDemoFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    teamSize: '',
    useCase: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: keyof RequestDemoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        teamSize: '',
        useCase: '',
        message: '',
      });
      onSuccess?.();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.company && formData.teamSize && formData.useCase;

  if (submitStatus === 'success') {
    return (
      <Card className={compact ? 'border-0 shadow-none' : ''}>
        <CardContent className={compact ? 'p-0' : 'p-8'}>
          <div className="text-center space-y-4 py-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold">Demo Request Received!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Thank you for your interest in CLERINT. Our team will review your request and reach out within one business day to schedule your personalized demo.
            </p>
            <Badge variant="secondary" className="text-sm">
              <Calendar className="h-3 w-3 mr-1" />
              Expect a response within 24 hours
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={compact ? 'border-0 shadow-none' : ''}>
      {!compact && (
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Request a Demo
          </CardTitle>
          <CardDescription>
            Schedule a personalized walkthrough of CLERINT with our mission specialists.
          </CardDescription>
        </CardHeader>
      )}

      <CardContent className={compact ? 'p-0' : ''}>
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
            <div className="flex items-center gap-2 text-red-800 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              <span className="font-medium">Failed to submit request</span>
            </div>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
              {errorMessage}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                placeholder="John"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                placeholder="Smith"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              placeholder="john.smith@company.com"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
                placeholder="Your organization"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                placeholder="Director of Intelligence"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size *</Label>
              <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  {teamSizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="useCase">Primary Use Case *</Label>
              <Select value={formData.useCase} onValueChange={(value) => handleInputChange('useCase', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select use case" />
                </SelectTrigger>
                <SelectContent>
                  {useCases.map((uc) => (
                    <SelectItem key={uc.value} value={uc.value}>
                      {uc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your intelligence operations challenges and what you're hoping to achieve with CLERINT..."
              rows={4}
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-sm text-muted-foreground">
              * Required fields
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="gap-2"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Request Demo
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Response within 1 business day</span>
            <Badge variant="secondary" className="text-xs">
              <Shield className="h-3 w-3 mr-1" />
              Your data is secure
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
