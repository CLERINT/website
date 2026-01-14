'use client';

import { useEffect, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// ThemeToggle removed - keeping for future use
// import { ThemeToggle } from '@/components/theme-toggle';
import { RequestDemoModal } from '@/components/request-demo-modal';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Calendar,
  CheckCircle2,
  FileSearch,
  Globe2,
  LayoutDashboard,
  Radar,
  ServerCog,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

type HeroStat = {
  value: string;
  label: string;
  description: string;
};

type IconFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type WorkflowStage = {
  icon: LucideIcon;
  name: string;
  detail: string;
};

type Highlight = {
  title: string;
  copy: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const navLinks = [
  { href: '#platform', label: 'Platform' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#compliance', label: 'Compliance' },
  { href: '/business-case', label: 'Business Case' },
  { href: '/contact', label: 'Contact' },
];

const heroStats: HeroStat[] = [
  {
    value: '65+',
    label: 'Enterprise deployments',
    description: 'Across intelligence, corporate security, and crisis teams.',
  },
  {
    value: '27M+',
    label: 'Signals processed daily',
    description: 'Streaming from open-source and proprietary channels.',
  },
  {
    value: '<4hrs',
    label: 'From alert to decision',
    description: 'Automated enrichment and decision-ready reporting.',
  },
  {
    value: '99.99%',
    label: 'Platform uptime',
    description: 'Resilient, multi-region infrastructure with audit controls.',
  },
];

const trustedLogos: string[] = [
  'Fortis Financial Group',
  'Aegis Intelligence Bureau',
  'Helios Defense Labs',
  'CivicShield Operations',
  'Atlas Energy Security',
  'Nova Risk Partners',
];

const complianceBadges = [
  { name: 'SOC 2 Type II', description: 'Security & Availability' },
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'CJIS Compliant', description: 'Criminal Justice Information' },
  { name: 'GDPR Ready', description: 'Data Protection & Privacy' },
];

const differentiators: Highlight[] = [
  {
    title: 'Explainable AI guardrails',
    copy: 'Analyst-in-the-loop workflows with traceable prompts and red-team safeguards.',
  },
  {
    title: 'Governed intelligence pipelines',
    copy: 'Role-based access, approval chains, and immutable audit logging across teams.',
  },
  {
    title: 'Global, ethical OSINT posture',
    copy: 'Built for compliant collection with jurisdiction-aware policies and retention.',
  },
];

const platformPillars: Highlight[] = [
  {
    title: 'Unified Intelligence Console',
    copy: 'Fuse investigations, targets, findings, and reporting inside one operational workspace.',
  },
  {
    title: 'Automated Collection Pipelines',
    copy: 'Schedule, orchestrate, and monitor multi-source OSINT ingestion with deduplication.',
  },
  {
    title: 'AI-Assisted Analysis',
    copy: 'Vector search, entity extraction, and analyst co-pilots accelerate sense-making.',
  },
  {
    title: 'Enterprise Governance & Audit',
    copy: 'Granular permissions, RLS, and full-trace audit trails aligned to global standards.',
  },
];

const featureHighlights: IconFeature[] = [
  {
    icon: LayoutDashboard,
    title: 'Mission control workspace',
    description:
      'Investigation timelines, link analysis, and collaborative briefings in a single pane of glass.',
  },
  {
    icon: ServerCog,
    title: 'Collection orchestrator',
    description:
      'Health monitoring, cadence controls, and chain-of-custody for every data stream you operate.',
  },
  {
    icon: Sparkles,
    title: 'Analyst acceleration',
    description:
      'Summaries, translation, media analysis, and hypothesis testing powered by governed AI.',
  },
  {
    icon: ShieldCheck,
    title: 'Global compliance posture',
    description:
      'CJIS alignment, GDPR tooling, and configurable retention for multinational intelligence teams.',
  },
  {
    icon: Users,
    title: 'Multi-team collaboration',
    description:
      'Workspaces, approvals, and knowledge sharing designed for 24/7 security operations centers.',
  },
  {
    icon: Globe2,
    title: 'Signal mastery',
    description:
      'Broadcast, social, and partner feeds normalized with multilingual enrichment.',
  },
];

const workflowStages: WorkflowStage[] = [
  {
    icon: Radar,
    name: 'Collect',
    detail:
      'Connector library for RSS, social, and partner APIs with adaptive cadence controls.',
  },
  {
    icon: Bot,
    name: 'Enrich',
    detail:
      'Normalization, translation, media inspection, and sentiment scoring land in your knowledge graph.',
  },
  {
    icon: FileSearch,
    name: 'Analyze',
    detail:
      'Semantic search, entity extraction, and insight workbench convert noise into actionable findings.',
  },
  {
    icon: BarChart3,
    name: 'Report',
    detail:
      'Generate briefings, alerts, and long-form assessments with approval flows and publishing telemetry.',
  },
];

const complianceHighlights: Highlight[] = [
  {
    title: 'Security architecture',
    copy:
      'Zero-trust authentication, customer-managed keys, segmented data planes, and SOC2-ready controls.',
  },
  {
    title: 'Global compliance',
    copy:
      'GDPR, ISO 27001, and CJIS-aligned workflows with configurable retention and jurisdiction-aware policies.',
  },
  {
    title: 'Operational assurance',
    copy:
      'Policy-driven access reviews, immutable audit logging, and disaster recovery validated every 30 days.',
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      'Our analysts reduced triage time by 72% after consolidating collection and reporting in CLERINT. The automation keeps pace with global operations.',
    author: 'Elena Martín',
    role: 'Director of Global Intelligence',
    company: 'Fortis Financial Group',
  },
  {
    quote:
      'The platform passed our enterprise security review in weeks. RLS and audit trails gave risk leadership the transparency they needed.',
    author: 'Samuel Reeve',
    role: 'Chief Security Officer',
    company: 'Atlas Energy Security',
  },
];

export default function Home() {
  const [showNavLogo, setShowNavLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavLogo(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 transition-opacity duration-300 ease-out">
            {showNavLogo && (
              <div className="shimmer-logo">
                <Shield className="h-5 w-5 text-primary" />
                <span className="logo-text text-lg font-semibold tracking-tight text-foreground">CLERINT</span>
              </div>
            )}
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} prefetch={false} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <RequestDemoModal>
              <Button className="gap-2">
                <Calendar className="h-4 w-4" />
                Request Demo
              </Button>
            </RequestDemoModal>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section id="hero" className="hero-section relative flex items-center overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/30 via-background to-background" />
          <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
          <div
            className="container relative flex flex-col items-center justify-center gap-12 text-center"
            data-testid="hero"
          >
            <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_45px_rgba(59,130,246,0.35)] md:h-72 md:w-72">
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="shield-glow absolute h-44 w-44 rounded-full" />
              <Shield className="hero-shield h-24 w-24 text-primary drop-shadow-[0_0_35px_rgba(59,130,246,0.55)] md:h-32 md:w-32" />
            </div>
            <div className="max-w-3xl space-y-4">
              <Badge
                className="mx-auto border-primary/40 bg-primary/10 text-primary"
                data-testid="hero-tagline"
              >
                Clean Rationale Intelligence Framework
              </Badge>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl text-foreground">
                CLERINT
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                CLERINT unifies global OSINT operations with explainable AI, governed pipelines, and analyst workflows
                engineered for accountable decision-making.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <RequestDemoModal>
                <Button size="lg" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Request Demo
                </Button>
              </RequestDemoModal>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2 border-primary/40 hover:bg-primary/10">
                  Contact Sales <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-primary/20 bg-card/80 p-4 backdrop-blur"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <div className="space-y-1 text-left">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <div className="text-center space-y-6 mb-12">
              <Badge className="border-primary/30 bg-primary/10 text-primary">Interactive Demo</Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Experience CLERINT in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our live demo console to see how CLERINT streamlines intelligence operations,
                from data collection to decision-ready reporting.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <h3 className="font-semibold">Real-time Data Collection</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">
                    Watch live OSINT feeds from global sources, with automatic deduplication and enrichment.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <h3 className="font-semibold">AI-Powered Analysis</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">
                    See how our AI assists analysts with entity extraction, sentiment analysis, and threat assessment.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <h3 className="font-semibold">Collaborative Workspace</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">
                    Experience team collaboration tools, investigation timelines, and report generation workflows.
                  </p>
                </div>

                <div className="pt-4">
                  <RequestDemoModal>
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      <Calendar className="h-4 w-4" />
                      Schedule Your Demo
                    </Button>
                  </RequestDemoModal>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-primary/20 bg-card/50 p-6 backdrop-blur">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm text-muted-foreground ml-2">CLERINT Console</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-primary/20 rounded animate-pulse"></div>
                      <div className="h-4 bg-primary/10 rounded animate-pulse" style={{width: '75%'}}></div>
                      <div className="h-4 bg-primary/15 rounded animate-pulse" style={{width: '90%'}}></div>
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="h-20 bg-primary/10 rounded-lg animate-pulse"></div>
                        <div className="h-20 bg-primary/15 rounded-lg animate-pulse"></div>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg animate-pulse mt-4"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted logos */}
        <section className="border-y py-10">
          <div className="container space-y-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Trusted by global intelligence and security teams
            </p>
            <div className="grid grid-cols-2 gap-6 text-center text-sm font-medium text-muted-foreground sm:grid-cols-3 lg:grid-cols-6">
              {trustedLogos.map((logo) => (
                <div key={logo} className="rounded-xl border bg-muted/30 px-4 py-3">
                  {logo}
                </div>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="mt-8 space-y-4">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Certified & Compliant
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {complianceBadges.map((badge) => (
                  <div key={badge.name} className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                    <div className="text-sm font-semibold text-primary">{badge.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{badge.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 rounded-2xl border border-primary/20 bg-card/70 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="space-y-2 text-left">
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform pillars */}
        <section id="platform" className="py-20">
          <div className="container space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge className="border-primary/30 bg-primary/10 text-primary">Platform pillars</Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                The CLERINT framework powers ethical, explainable intelligence operations.
              </h2>
              <p className="text-muted-foreground md:text-lg">
                From high-velocity detection to executive briefings, the platform fuses data, analysts,
                and governance into a resilient intelligence fabric.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {platformPillars.map((pillar) => (
                <Card key={pillar.title} className="h-full border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{pillar.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature highlights */}
        <section id="capabilities" className="bg-muted/40 py-20">
          <div className="container space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge className="border-primary/30 bg-primary/10 text-primary">Operational capabilities</Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Built for global investigations, crisis response, and strategic intelligence.
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Modular tooling for every phase of the intelligence lifecycle, delivered with cloud-native scale
                and zero-compromise governance.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featureHighlights.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="h-full border-primary/20">
                    <CardHeader className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="py-20">
          <div className="container space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge className="border-primary/30 bg-primary/10 text-primary">Mission workflow</Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Designed around the analyst journey—from first signal to executive decision.
              </h2>
              <p className="text-muted-foreground md:text-lg">
                CLERINT orchestrates ethical collection, enrichment, analysis, and reporting with accountability
                engineered into every step.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {workflowStages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <Card key={stage.name} className="h-full border-dashed border-primary/20">
                    <CardHeader className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{stage.name}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{stage.detail}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section id="compliance" className="bg-muted/40 py-20">
          <div className="container space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge className="border-primary/30 bg-primary/10 text-primary">Audit & compliance</Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Governance-first architecture aligned with global regulatory frameworks.
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Security teams rely on CLERINT for verifiable controls, transparent audit trails, and resilient
                infrastructure across jurisdictions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {complianceHighlights.map((item) => (
                <Card key={item.title} className="h-full border-primary/20">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{item.copy}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted/40 py-20">
          <div className="container space-y-10">
            <div className="max-w-3xl space-y-4">
              <Badge className="border-primary/30 bg-primary/10 text-primary">Customer proof</Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Analysts and security leaders trust CLERINT to deliver accountable intelligence.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="h-full border-primary/25 bg-card/80 backdrop-blur">
                  <CardContent className="flex h-full flex-col justify-between gap-6 p-8">
                    <p className="text-lg leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-muted-foreground">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="container">
            <Card className="relative overflow-hidden border-primary/30">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.2),_transparent_60%)]" />
              <CardContent className="flex flex-col gap-8 p-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4">
                  <Badge className="border-primary/40 bg-primary/10 text-primary">Launch in weeks</Badge>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    Ready to deploy a clean rationale intelligence framework?
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    Partner with our mission team to migrate data, integrate collection pipelines, and train analysts
                    on governed AI workflows tailored to your operating model.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <RequestDemoModal>
                    <Button size="lg" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Book a deployment briefing
                    </Button>
                  </RequestDemoModal>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="gap-2">
                      Contact Our Team <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-10">
        <div className="container flex flex-col gap-6 text-sm text-muted-foreground">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="shimmer-logo text-sm">
              <Shield className="h-5 w-5" />
              <span className="logo-text font-semibold text-foreground">CLERINT</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#platform" prefetch={false} className="transition hover:text-foreground">
                Platform
              </Link>
              <Link href="#capabilities" prefetch={false} className="transition hover:text-foreground">
                Capabilities
              </Link>
              <Link href="#workflow" prefetch={false} className="transition hover:text-foreground">
                Workflow
              </Link>
              <Link href="#compliance" prefetch={false} className="transition hover:text-foreground">
                Compliance
              </Link>
              <Link href="/business-case" className="transition hover:text-foreground">
                Business Case
              </Link>
              <Link href="/contact" className="transition hover:text-foreground">
                Contact
              </Link>
              <Link href="/privacy" className="transition hover:text-foreground">
                Privacy
              </Link>
              <Link href="https://clerint.org" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
                clerint.org
              </Link>
            </div>
          </div>
          <p>© {new Date().getFullYear()} CLERINT. Clean Rationale Intelligence Framework.</p>
        </div>
      </footer>
    </div>
  );
}
