import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Code,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  ExternalLink,
  FileText,
  Settings,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation | CLERINT',
  description: 'Complete documentation for the CLERINT intelligence enablement platform.',
};

type DocSection = {
  title: string;
  description: string;
  icon: any;
  items: Array<{
    title: string;
    description: string;
    href: string;
    badge?: string;
  }>;
};

const documentationSections: DocSection[] = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and onboarding resources for new users',
    icon: BookOpen,
    items: [
      {
        title: 'Quick Start Guide',
        description: 'Get up and running with CLERINT in minutes',
        href: '/docs/quick-start',
      },
      {
        title: 'Account Setup',
        description: 'Create your organization and invite team members',
        href: '/docs/account-setup',
      },
      {
        title: 'First Investigation',
        description: 'Create your first intelligence investigation',
        href: '/docs/first-investigation',
      },
      {
        title: 'Dashboard Overview',
        description: 'Navigate the CLERINT workspace',
        href: '/docs/dashboard',
      },
    ],
  },
  {
    title: 'Core Features',
    description: 'Learn about CLERINT\'s intelligence capabilities',
    icon: Zap,
    items: [
      {
        title: 'News Sources',
        description: 'Connect and manage OSINT data sources',
        href: '/docs/news-sources',
      },
      {
        title: 'Target Monitoring',
        description: 'Set up automated monitoring for entities and keywords',
        href: '/docs/target-monitoring',
      },
      {
        title: 'Investigation Management',
        description: 'Organize and track intelligence investigations',
        href: '/docs/investigations',
      },
      {
        title: 'Report Generation',
        description: 'Create and share intelligence reports',
        href: '/docs/reports',
      },
      {
        title: 'Alert System',
        description: 'Configure automated alerts and notifications',
        href: '/docs/alerts',
      },
    ],
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation for developers and integrators',
    icon: Code,
    items: [
      {
        title: 'Authentication',
        description: 'API keys, OAuth, and authentication methods',
        href: '/docs/api/authentication',
      },
      {
        title: 'REST API',
        description: 'Complete REST API reference',
        href: '/docs/api/rest',
        badge: 'Updated',
      },
      {
        title: 'GraphQL API',
        description: 'GraphQL endpoint documentation',
        href: '/docs/api/graphql',
      },
      {
        title: 'Webhooks',
        description: 'Set up webhooks for real-time updates',
        href: '/docs/api/webhooks',
      },
      {
        title: 'Rate Limits',
        description: 'API rate limiting and best practices',
        href: '/docs/api/rate-limits',
      },
    ],
  },
  {
    title: 'Administration',
    description: 'Organization management and administrative tasks',
    icon: Settings,
    items: [
      {
        title: 'Organization Settings',
        description: 'Manage your organization configuration',
        href: '/docs/admin/organization',
      },
      {
        title: 'User Management',
        description: 'Invite users and manage roles and permissions',
        href: '/docs/admin/users',
      },
      {
        title: 'Plan Management',
        description: 'Understand plan limits and upgrade options',
        href: '/docs/admin/plans',
      },
      {
        title: 'Security Settings',
        description: 'Configure SSO, MFA, and security policies',
        href: '/docs/admin/security',
      },
      {
        title: 'Audit Logs',
        description: 'Monitor user activity and system events',
        href: '/docs/admin/audit',
      },
    ],
  },
  {
    title: 'Integrations',
    description: 'Connect CLERINT with your existing tools and workflows',
    icon: Globe,
    items: [
      {
        title: 'SIEM Integration',
        description: 'Connect with Splunk, QRadar, and other SIEMs',
        href: '/docs/integrations/siem',
      },
      {
        title: 'Slack Integration',
        description: 'Get alerts and updates in Slack',
        href: '/docs/integrations/slack',
      },
      {
        title: 'Microsoft Teams',
        description: 'Integrate with Microsoft Teams workspace',
        href: '/docs/integrations/teams',
      },
      {
        title: 'Custom Webhooks',
        description: 'Send data to your own systems',
        href: '/docs/integrations/webhooks',
      },
    ],
  },
  {
    title: 'Security & Compliance',
    description: 'Security best practices and compliance guidance',
    icon: Shield,
    items: [
      {
        title: 'Security Overview',
        description: 'CLERINT security architecture and controls',
        href: '/docs/security/overview',
      },
      {
        title: 'Data Privacy',
        description: 'How we protect your data and privacy',
        href: '/docs/security/privacy',
      },
      {
        title: 'Compliance Frameworks',
        description: 'GDPR, SOC 2, and other compliance standards',
        href: '/docs/security/compliance',
      },
      {
        title: 'Best Practices',
        description: 'Security recommendations for your team',
        href: '/docs/security/best-practices',
      },
    ],
  },
];

const quickLinks = [
  {
    title: 'API Documentation',
    description: 'Complete API reference',
    href: '/docs/api',
    icon: Code,
  },
  {
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    href: '/docs/troubleshooting',
    icon: Settings,
  },
  {
    title: 'Changelog',
    description: 'Latest updates and new features',
    href: '/docs/changelog',
    icon: FileText,
  },
  {
    title: 'Community Forum',
    description: 'Get help from the community',
    href: 'https://community.clerint.org',
    icon: Users,
    external: true,
  },
];

const popularGuides = [
  {
    title: 'Setting Up Your First OSINT Investigation',
    description: 'A step-by-step guide to creating and managing your first intelligence investigation in CLERINT.',
    href: '/docs/guides/first-investigation',
  },
  {
    title: 'Automating Intelligence Workflows',
    description: 'Learn how to set up automated alerts and workflows to streamline your intelligence operations.',
    href: '/docs/guides/automation',
  },
  {
    title: 'Integrating with Your Security Stack',
    description: 'Connect CLERINT with your existing SIEM, SOAR, and security tools.',
    href: '/docs/guides/security-integration',
  },
  {
    title: 'Best Practices for OSINT Operations',
    description: 'Industry best practices for conducting ethical and effective open-source intelligence operations.',
    href: '/docs/guides/osint-best-practices',
  },
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container max-w-6xl space-y-16 px-4">
        {/* Header */}
        <header className="text-center space-y-6">
          <Badge className="border-primary/30 bg-primary/10 text-primary">Documentation</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            CLERINT Documentation
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Everything you need to get started with CLERINT and master intelligence operations.
            From quick start guides to advanced API documentation.
          </p>
        </header>

        {/* Quick Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Quick Links</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Card key={link.title} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                      {link.external && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                    >
                      <Link href={link.href}>
                        View {link.external && 'External'}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Popular Guides */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Popular Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {popularGuides.map((guide) => (
              <Card key={guide.title} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href={guide.href}>
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">Browse Documentation</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {documentationSections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.title} className="border-primary/20">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {section.items.map((item) => (
                      <div key={item.title} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            {item.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={item.href}>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Support Section */}
        <section className="rounded-3xl border border-primary/20 bg-muted/40 p-10 text-center">
          <div className="space-y-4">
            <Badge className="border-primary/30 bg-primary/10 text-primary">Need Help?</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Our support team is here to help. Get in touch for personalized assistance
              or to request new documentation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="mailto:support@clerint.org">
                  Email Support
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
