import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy | CLERINT',
  description: 'Learn how CLERINT collects, uses, and protects intelligence data and personal information.',
};

type PolicySection = {
  title: string;
  points: string[];
};

const sections: PolicySection[] = [
  {
    title: 'Data stewardship',
    points: [
      'CLERINT operates as an intelligence enablement platform under the clerint.org umbrella. We collect only the data required to deliver the services selected by your organization, including account credentials, audit telemetry, and configuration settings.',
      'Operational data ingested through CLERINT is processed on behalf of your organization. We never sell or repurpose collected intelligence signals and maintain strict access controls aligned to contractual commitments.',
    ],
  },
  {
    title: 'How we use information',
    points: [
      'Authenticate users, maintain secure sessions, and deliver the product features provisioned in your subscription.',
      'Monitor platform health, detect abuse, and meet compliance reporting obligations through aggregated service telemetry.',
      'Provide customer success, technical support, and product communications consistent with your notification preferences.',
    ],
  },
  {
    title: 'International transfers & retention',
    points: [
      'CLERINT offers regional data residency options. When cross-border transfers are required, they are protected under appropriate contractual safeguards such as Standard Contractual Clauses or Data Processing Agreements.',
      'Customer data is retained for the duration of your agreement plus any legally mandated retention periods. You may request data export or deletion at any time by contacting our security team.',
    ],
  },
  {
    title: 'Security controls',
    points: [
      'We enforce zero-trust access, encryption in transit and at rest, customer-managed keys (optional), and continuous vulnerability management across the platform.',
      'Third-party subprocessors are vetted for security posture and bound by written agreements. A current list is available upon request.',
    ],
  },
  {
    title: 'Your choices & rights',
    points: [
      'Admins can manage user roles, retention policies, and data collection settings directly within the CLERINT console.',
      'If you are an individual user and believe your personal data is held within CLERINT, contact your organization\'s administrator or reach out to us for assistance.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2025';

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container max-w-4xl space-y-10 px-4">
        <header className="space-y-4">
          <Badge className="border-primary/30 bg-primary/10 text-primary">Privacy policy</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            CLERINT Privacy Policy
          </h1>
          <p className="text-muted-foreground md:text-lg">
            This policy describes how CLERINT, an intelligence enablement platform operated by{' '}
            <Link href="https://clerint.org" target="_blank" rel="noreferrer" className="underline decoration-primary/60">
              clerint.org
            </Link>
            , collects, uses, and protects information. It applies to the CLERINT marketing site, customer console, and
            supporting services.
          </p>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-6">
          {sections.map((section) => (
            <Card key={section.title} className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="space-y-3 rounded-2xl border border-primary/20 bg-muted/40 p-6 text-sm text-muted-foreground">
          <p>
            If you have questions about this policy, data processing, or your privacy rights, please contact our security
            and compliance team.
          </p>
          <p>
            Email:{' '}
            <Link href="mailto:privacy@clerint.org" className="font-medium text-primary underline-offset-4 hover:underline">
              privacy@clerint.org
            </Link>
          </p>
          <p>
            You can also submit requests through our{' '}
            <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
              contact form
            </Link>
            .
          </p>
        </footer>
      </div>
    </main>
  );
}
