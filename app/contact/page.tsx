import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

// App URL for cross-linking
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.clerint.org';

export const metadata: Metadata = {
  title: 'Contact CLERINT | Talk with our team',
  description:
    'Reach the CLERINT team for product briefings, customer success, security inquiries, and general questions.',
};

const contactChannels = [
  {
    title: 'Product briefings & sales',
    description:
      'Coordinate discovery sessions, procurement, or tailored demos with our mission deployment specialists.',
    email: 'sales@clerint.org',
  },
  {
    title: 'Customer success',
    description:
      'Existing customers can request workspace changes, onboarding support, and workflow reviews.',
    email: 'support@clerint.org',
  },
  {
    title: 'Security & responsible disclosure',
    description:
      'Report potential vulnerabilities or request security documentation. We acknowledge submissions within 1 business day.',
    email: 'security@clerint.org',
  },
  {
    title: 'Media & partnerships',
    description:
      'For analyst research, press inquiries, and ecosystem collaboration opportunities.',
    email: 'press@clerint.org',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container max-w-4xl space-y-12 px-4">
        <header className="space-y-4">
          <Badge className="border-primary/30 bg-primary/10 text-primary">Contact</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Talk with the CLERINT team
          </h1>
          <p className="text-muted-foreground md:text-lg">
            We collaborate closely with intelligence, security, and crisis operations teams worldwide. Choose the channel
            below that best fits your request and we will respond within one business day.
          </p>
        </header>

        {/* Contact Form */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
            <p className="text-muted-foreground">
              Use the form below for detailed inquiries, or choose a direct channel for specific needs.
            </p>
          </div>
          <ContactForm />
        </section>

        {/* Direct Contact Channels */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Direct contact channels</h2>
            <p className="text-muted-foreground">
              For immediate assistance or specific inquiries, reach out directly to our specialized teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
          {contactChannels.map((channel) => (
            <Card key={channel.title} className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">{channel.title}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`mailto:${channel.email}`}>Email {channel.email}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-primary/20 bg-muted/40 p-6 text-sm text-muted-foreground md:text-base">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Operational hours</h2>
            <p>
              Our distributed mission desk monitors inbound requests 24/5 (Monday-Friday) with emergency escalation
              coverage on weekends. Security disclosures receive priority handling.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Additional resources</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Review our{' '}
                <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  privacy policy
                </Link>{' '}
                for data stewardship commitments.
              </li>
              <li>
                Explore the{' '}
                <Link href="https://clerint.org" target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                  clerint.org
                </Link>{' '}
                mission briefing library.
              </li>
              <li>
                Existing customers can access the{' '}
                <a href={`${APP_URL}/dashboard`} className="text-primary underline-offset-4 hover:underline">
                  CLERINT console
                </a>{' '}
                using their secure credentials.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
