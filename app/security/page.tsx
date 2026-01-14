import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  ShieldCheck,
  Lock,
  Eye,
  Globe,
  FileCheck,
  Users,
  Server,
  Key,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security & Compliance | CLERINT',
  description: 'Learn about CLERINT\'s security architecture, compliance certifications, and data protection practices.',
};

type SecuritySection = {
  title: string;
  icon: any;
  description: string;
  items: string[];
};

type ComplianceFramework = {
  name: string;
  description: string;
  status: 'certified' | 'in-progress' | 'planned';
};

const securityAreas: SecuritySection[] = [
  {
    title: 'Data Protection',
    icon: Shield,
    description: 'Comprehensive data protection measures to safeguard your intelligence operations.',
    items: [
      'End-to-end encryption for data in transit and at rest',
      'Customer-managed encryption keys (optional)',
      'Zero-knowledge architecture for sensitive data',
      'Regional data residency options (US, EU, APAC)',
      'Automated data retention and deletion policies',
      'Secure data backup and disaster recovery',
    ],
  },
  {
    title: 'Access Control',
    icon: Lock,
    description: 'Granular access controls and identity management for enterprise security.',
    items: [
      'Multi-factor authentication (MFA) enforcement',
      'Single Sign-On (SSO) with SAML 2.0 and OIDC',
      'Role-based access control (RBAC)',
      'API key management and rotation',
      'Session management and timeout controls',
      'Audit logging for all access events',
    ],
  },
  {
    title: 'Infrastructure Security',
    icon: Server,
    description: 'Enterprise-grade infrastructure with comprehensive security controls.',
    items: [
      'SOC 2 Type II certified infrastructure',
      'ISO 27001 aligned security management',
      'Regular penetration testing and vulnerability assessments',
      'Network segmentation and micro-segmentation',
      'DDoS protection and traffic filtering',
      '24/7 security monitoring and incident response',
    ],
  },
  {
    title: 'Privacy & Compliance',
    icon: Eye,
    description: 'Privacy-first design with comprehensive compliance frameworks.',
    items: [
      'GDPR compliance with data subject rights',
      'CCPA compliance for California residents',
      'CJIS alignment for law enforcement use',
      'FedRAMP authorization (in progress)',
      'Data Processing Agreements (DPAs) available',
      'Privacy Impact Assessments (PIAs) conducted',
    ],
  },
  {
    title: 'Operational Security',
    icon: Users,
    description: 'Secure development and operational practices throughout our organization.',
    items: [
      'Secure Software Development Lifecycle (SSDLC)',
      'Regular security training for all staff',
      'Background checks for all personnel',
      'Incident response procedures and playbooks',
      'Regular security awareness training',
      'Vendor security assessments and monitoring',
    ],
  },
  {
    title: 'API Security',
    icon: Key,
    description: 'Secure API design and implementation for all integrations.',
    items: [
      'OAuth 2.0 and OpenID Connect authentication',
      'Rate limiting and API abuse prevention',
      'Request/response encryption and signing',
      'API versioning and deprecation management',
      'Comprehensive API documentation and testing',
      'Real-time API monitoring and alerting',
    ],
  },
];

const complianceFrameworks: ComplianceFramework[] = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls audit',
    status: 'certified',
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system certification',
    status: 'in-progress',
  },
  {
    name: 'FedRAMP',
    description: 'Federal Risk and Authorization Management Program',
    status: 'in-progress',
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance',
    status: 'certified',
  },
  {
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliance',
    status: 'certified',
  },
  {
    name: 'CJIS',
    description: 'Criminal Justice Information Services alignment',
    status: 'certified',
  },
];

const securityFeatures = [
  {
    title: 'Zero-Trust Architecture',
    description: 'Never trust, always verify - every request is authenticated and authorized',
  },
  {
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit and at rest with industry-standard algorithms',
  },
  {
    title: 'Immutable Audit Logs',
    description: 'Tamper-proof audit trails for all system activities and data access',
  },
  {
    title: 'Multi-Region Deployment',
    description: 'Data redundancy and disaster recovery across multiple geographic regions',
  },
  {
    title: 'Automated Security Scanning',
    description: 'Continuous vulnerability scanning and security testing of all components',
  },
  {
    title: 'Incident Response',
    description: '24/7 security operations center with rapid incident response procedures',
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container max-w-6xl space-y-16 px-4">
        {/* Header */}
        <header className="text-center space-y-6">
          <Badge className="border-primary/30 bg-primary/10 text-primary">Security & Compliance</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Enterprise-Grade Security for Intelligence Operations
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            CLERINT is built with security-first principles, designed to meet the highest standards
            for intelligence and security organizations worldwide. Our platform protects your data
            with military-grade encryption and compliance frameworks.
          </p>
        </header>

        {/* Security Overview */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => (
            <Card key={feature.title} className="border-primary/20">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        {/* Security Areas */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Comprehensive Security Framework</h2>
            <p className="text-muted-foreground">
              Six core security areas protecting every aspect of your intelligence operations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {securityAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.title} className="border-primary/20">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Compliance & Certifications</h2>
            <p className="text-muted-foreground">
              Meeting the highest standards for government and enterprise security requirements
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.map((framework) => (
              <Card key={framework.name} className="border-primary/20">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{framework.name}</CardTitle>
                    <Badge
                      variant={
                        framework.status === 'certified' ? 'default' :
                        framework.status === 'in-progress' ? 'secondary' : 'outline'
                      }
                    >
                      {framework.status === 'certified' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                      {framework.status === 'in-progress' && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {framework.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <CardDescription>{framework.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Resources */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Security Resources</h2>
            <p className="text-muted-foreground">
              Download security documentation and learn about our security practices
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  Security Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Access comprehensive security documentation including architecture diagrams,
                  penetration test reports, and compliance certifications.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Download SOC 2 Report
                  </Button>
                  <Button variant="outline" size="sm">
                    Security Architecture
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Responsible Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Report security vulnerabilities through our responsible disclosure program.
                  We acknowledge submissions within 24 hours.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Link href="mailto:security@clerint.org">
                      Report Vulnerability
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    Security Policy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="rounded-3xl border border-primary/20 bg-muted/40 p-10 text-center">
          <div className="space-y-4">
            <Badge className="border-primary/30 bg-primary/10 text-primary">Security Team</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Questions About Security?
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Our security team is available to answer questions about our security practices,
              compliance certifications, and data protection measures.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="mailto:security@clerint.org">
                  Contact Security Team
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/contact">
                  Schedule Security Review
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
