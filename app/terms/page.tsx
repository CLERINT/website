import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Terms of Service | CLERINT',
  description: 'Terms of Service for using the CLERINT intelligence enablement platform.',
};

type TermsSection = {
  title: string;
  content: string[];
};

const sections: TermsSection[] = [
  {
    title: 'Agreement to Terms',
    content: [
      'By accessing and using CLERINT ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.',
      'These Terms apply to all visitors, users, and others who access or use the Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.',
    ],
  },
  {
    title: 'Description of Service',
    content: [
      'CLERINT is an intelligence enablement platform that provides tools for open-source intelligence (OSINT) collection, analysis, and reporting. The Service includes but is not limited to:',
      '- Data collection and aggregation from various open sources',
      '- Analysis tools and AI-assisted intelligence processing',
      '- Report generation and collaboration features',
      '- User management and organization administration',
      '- API access and integration capabilities',
      'The Service is provided on a subscription basis with different tiers offering varying levels of functionality and usage limits.',
    ],
  },
  {
    title: 'User Accounts and Organizations',
    content: [
      'To access certain features of the Service, you must create an account and provide accurate, complete, and current information.',
      'You are responsible for safeguarding your account credentials and for all activities that occur under your account.',
      'Organizations may be created and managed by authorized users. Organization administrators are responsible for managing user access, roles, and compliance with these Terms.',
      'You may not use the Service for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.',
    ],
  },
  {
    title: 'Acceptable Use Policy',
    content: [
      'You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:',
      '- Violate any applicable laws, regulations, or third-party rights',
      '- Use the Service to collect, store, or process data in violation of privacy laws or terms of service of data sources',
      '- Attempt to gain unauthorized access to any portion of the Service',
      '- Interfere with or disrupt the Service or servers connected to the Service',
      '- Use automated systems or software to extract data from the Service without permission',
      '- Share your account credentials with unauthorized parties',
      '- Use the Service to create, store, or distribute malicious software or content',
    ],
  },
  {
    title: 'Data and Privacy',
    content: [
      'Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
      'You retain ownership of any data you input into the Service. We do not claim ownership of your data.',
      'You are responsible for ensuring that any data you input into the Service is legally obtained and used in compliance with applicable laws.',
      'We may collect, process, and store data as described in our Privacy Policy to provide and improve the Service.',
      'You acknowledge that data transmitted over the internet may not be completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'The Service and its original content, features, and functionality are and will remain the exclusive property of CLERINT and its licensors.',
      'The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written consent.',
      'You may not modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Service.',
    ],
  },
  {
    title: 'Subscription and Payment',
    content: [
      'The Service is provided on a subscription basis. Subscription fees are billed in advance on an annual basis unless otherwise specified.',
      'You are responsible for all charges incurred under your account, including applicable taxes and fees.',
      'Subscription fees are non-refundable except as required by law or as otherwise specified in your subscription agreement.',
      'We reserve the right to change our pricing with 30 days notice to existing subscribers.',
      'Failure to pay subscription fees may result in suspension or termination of your access to the Service.',
    ],
  },
  {
    title: 'Service Availability',
    content: [
      'We strive to maintain high service availability but do not guarantee uninterrupted access to the Service.',
      'We may modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice.',
      'We are not liable for any downtime, service interruptions, or data loss that may occur.',
      'Enterprise customers may be entitled to service level agreements (SLAs) as specified in their subscription agreement.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, CLERINT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.',
      'Our total liability to you for any damages arising from or related to these Terms or the Service shall not exceed the amount you paid us for the Service in the twelve (12) months preceding the claim.',
      'Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages, so the above limitations may not apply to you.',
    ],
  },
  {
    title: 'Termination',
    content: [
      'You may terminate your account at any time by contacting our support team.',
      'We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.',
      'Upon termination, your right to use the Service will cease immediately.',
      'We may retain your data for a reasonable period after termination as required by law or as specified in our Privacy Policy.',
    ],
  },
  {
    title: 'Governing Law and Disputes',
    content: [
      'These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to conflict of law principles.',
      'Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization].',
      'You waive any right to participate in a class-action lawsuit or class-wide arbitration against us.',
    ],
  },
  {
    title: 'Changes to Terms',
    content: [
      'We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service.',
      'Your continued use of the Service after any modifications constitutes acceptance of the updated Terms.',
      'If you do not agree to the modified Terms, you must stop using the Service.',
    ],
  },
];

export default function TermsOfServicePage() {
  const lastUpdated = 'January 15, 2025';

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container max-w-4xl space-y-10 px-4">
        <header className="space-y-4">
          <Badge className="border-primary/30 bg-primary/10 text-primary">Terms of Service</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            CLERINT Terms of Service
          </h1>
          <p className="text-muted-foreground md:text-lg">
            These Terms of Service govern your use of the CLERINT intelligence enablement platform.
            By using our Service, you agree to be bound by these terms.
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
                  {section.content.map((paragraph, index) => (
                    <li key={index} className={paragraph.startsWith('-') ? 'list-none' : ''}>
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="space-y-3 rounded-2xl border border-primary/20 bg-muted/40 p-6 text-sm text-muted-foreground">
          <p>
            If you have questions about these Terms of Service, please contact our legal team.
          </p>
          <p>
            Email:{' '}
            <Link href="mailto:legal@clerint.org" className="font-medium text-primary underline-offset-4 hover:underline">
              legal@clerint.org
            </Link>
          </p>
          <p>
            You can also submit questions through our{' '}
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
