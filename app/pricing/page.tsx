import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GaugeCircle,
  Globe2,
  Headset,
  Layers,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const pricingTiers = [
  {
    name: 'Intel Starter',
    headline: 'Foundation plan for small analyst teams validating CLERINT.',
    badge: 'Best for pilots',
    price: '$9,250 / year',
    description:
      'Five seats, mission-ready dashboards, and analyst assist credits wrapped in a fast onboarding playbook.',
    highlights: [
      '5 analyst seats with shared staging tenant',
      'Core OSINT connectors and daily report exports',
      'Explainable AI briefings with manual override queue',
      'Business-hours email support with 48h SLA',
    ],
    footnote: 'Includes 2 analyst assist tickets per quarter and remote onboarding workshop.',
    cta: {
      label: 'Start 5-seat pilot',
      href: '/contact',
    },
  },
  {
    name: 'Ops Growth',
    headline: 'Scale automation and governance across your analyst pods.',
    badge: 'Most popular',
    price: '$1,450 / user / year',
    description:
      'Everything in Starter plus identity integrations, targeted automations, and proactive mission reviews.',
    highlights: [
      'Minimum 10 seats with SSO and SCIM provisioning',
      'Targeted alert automations and smart triage queues',
      'Quarterly threat briefings and ROI scorecards',
      'Priority ticket routing with next-business-day responses',
    ],
    footnote: 'Billed annually; includes 5 analyst assist tickets per quarter.',
    cta: {
      label: 'Talk to sales',
      href: 'mailto:sales@clerint.org',
    },
  },
  {
    name: 'Mission Enterprise',
    headline: 'Dedicated infrastructure and success pod for large programs.',
    price: '$1,150 / user / year',
    description:
      'Best for 50+ seats requiring isolated deployments, bespoke feed onboarding, and white-glove support.',
    highlights: [
      'Minimum 50 seats with isolated VPC deployment',
      'Custom data feed ingestion and automation sprints',
      'Dedicated customer success manager and 24/7 hotline',
      'Executive value reporting with board-ready packs',
    ],
    footnote: 'Includes 10 analyst assist tickets per quarter and private tenant hardening.',
    cta: {
      label: 'Plan enterprise rollout',
      href: '/contact',
    },
  },
];

const comparisonMatrix = [
  {
    label: 'Mission-ready CLERINT workspace & dashboards',
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    label: 'Included seats',
    starter: '5 included',
    growth: '10 seat minimum',
    enterprise: '50 seat minimum',
  },
  {
    label: 'Identity integrations (SSO & SCIM)',
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    label: 'Automation & alerting',
    starter: 'Optional add-on',
    growth: 'Targeted automations',
    enterprise: 'Full library + custom sprints',
  },
  {
    label: 'Analyst assist credits',
    starter: '2 tickets / quarter',
    growth: '5 tickets / quarter',
    enterprise: '10 tickets / quarter',
  },
  {
    label: 'Customer success coverage',
    starter: 'Email (8x5, 48h SLA)',
    growth: 'Priority desk + quarterly reviews',
    enterprise: 'Dedicated CSM + 24/7 hotline',
  },
  {
    label: 'Deployment topology',
    starter: 'Shared staging tenant',
    growth: 'Shared tenant + priority lanes',
    enterprise: 'Isolated VPC deployment',
  },
  {
    label: 'Executive reporting cadence',
    starter: 'Bi-annual scorecard',
    growth: 'Quarterly scorecard',
    enterprise: 'Monthly board pack + onsite',
  },
];

const valueProps = [
  {
    title: 'Mission-grade security & compliance',
    description:
      'FedRAMP-aligned controls, granular RBAC, and cryptographic logging designed with federal and multinational governance programs.',
    icon: ShieldCheck,
  },
  {
    title: 'Operational AI guardrails',
    description:
      'CLERINT Copilots and enrichment models enforce explainability and chain-of-custody so analysts can defend every conclusion.',
    icon: Sparkles,
  },
  {
    title: 'Faster time-to-value',
    description:
      'Prebuilt automations, migration tooling, and onboarding playbooks shorten the distance from kickoff to first executive briefing.',
    icon: GaugeCircle,
  },
];

const addOns = [
  {
    title: 'Automation playbooks',
    description: 'Accelerate investigations with reusable automation templates authored by CLERINT engineers.',
    items: ['Dynamic alerting + triage queues', 'Hands-free report assembly', 'SOC / TIP integrations'],
  },
  {
    title: 'Secure enclave deployments',
    description: 'Hardened, sovereign deployments with air-gapped options and customer-managed cryptographic controls.',
    items: ['Hybrid or on-premises topologies', 'Kubernetes & OpenShift reference builds', 'Offline update cadence'],
  },
  {
    title: 'Executive advisory services',
    description: 'Quarterly executive briefings, value dashboards, and co-authored roadmaps with CLERINT leadership.',
    items: ['Board-ready reporting packs', 'Joint KPI definition', 'Change management workshops'],
  },
];

const faqs = [
  {
    question: 'How quickly can we launch each plan?',
    answer:
      'Intel Starter workspaces are live within 2 weeks, including remote onboarding. Ops Growth launches in 4 weeks with identity integrations and automation pilots. Mission Enterprise follows a phased rollout, typically landing production in 6 weeks with hardening and VPC build-out.',
  },
  {
    question: 'Do you offer monthly billing?',
    answer:
      'All plans are billed annually to keep platform costs predictable. Starter is a flat annual investment, while Growth and Enterprise invoice seat counts at the contracted minimum. Multi-year commitments can lock pricing for 24-36 months.',
  },
  {
    question: 'What happens if we need more analyst seats mid-year?',
    answer:
      'You can top up seats at the prevailing rate anytime. Starter teams can upgrade into Ops Growth once you exceed five seats. Growth and Enterprise plans support true-up invoicing each quarter so you only pay for the seats you activate.',
  },
  {
    question: 'Can CLERINT connect with our data lake, SIEM, or ticketing stack?',
    answer:
      'Yes. REST and GraphQL APIs, outbound webhooks, and prebuilt connectors support the most common data lakes, SIEMs, TIPs, and work management tools. Mission Enterprise customers receive custom connector engineering as part of the deployment.',
  },
];

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-20%] h-[520px] translate-y-16 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,rgba(59,130,246,0)_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28)_0%,rgba(59,130,246,0)_70%)]" />
        <div className="absolute inset-x-0 top-0 h-full bg-pricing-grid opacity-[0.08]" />
      </div>

      <section className="container relative z-10 flex flex-col gap-16 py-24 md:py-32">
        <div className="max-w-3xl space-y-6">
          <Badge className="w-fit border-primary/20 bg-primary/10 text-primary">Pricing & packaging</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Three packages to launch, scale, and secure your CLERINT mission
          </h1>
          <p className="text-lg text-muted-foreground">
            Start lean with Intel Starter, unlock automation and identity integrations with Ops Growth, and graduate to
            Mission Enterprise when you need isolated infrastructure and white-glove support. Every plan includes a
            blueprint workshop so your rollout and ROI targets are crystal clear from day one.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Start a pricing conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`group flex h-full flex-col justify-between border-border/50 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 ${
                tier.badge ? 'relative ring-2 ring-primary/70' : ''
              }`}
            >
              {tier.badge ? (
                <Badge className="absolute right-4 top-4 border-primary/40 bg-primary text-primary-foreground shadow-md">
                  {tier.badge}
                </Badge>
              ) : null}
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-sm font-medium uppercase tracking-wide text-primary">{tier.price}</p>
                <CardDescription className="text-base leading-relaxed">{tier.headline}</CardDescription>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {tier.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 pt-0">
                <Button asChild size="lg" className="w-full gap-2">
                  <Link href={tier.cta.href}>
                    {tier.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">{tier.footnote}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container relative z-10 pb-24">
        <div className="grid gap-6 rounded-4xl border border-border/40 bg-card/60 p-10 shadow-lg shadow-primary/5 backdrop-blur-lg md:grid-cols-3">
          {valueProps.map((prop) => (
            <div key={prop.title} className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                <prop.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{prop.title}</h3>
              <p className="text-sm text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container relative z-10 space-y-10 pb-24">
        <div className="max-w-3xl space-y-4">
          <Badge className="border-primary/20 bg-primary/10 text-primary">Capability comparison</Badge>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Choose the engagement depth that mirrors your intelligence mandate
          </h2>
          <p className="text-muted-foreground">
            All tiers include secure CLERINT workspaces, audit-grade provenance, and mission support. Ops Growth elevates
            automation and governance, while Mission Enterprise layers in dedicated infrastructure and advisory depth.
          </p>
        </div>

        <div className="overflow-hidden rounded-4xl border border-border/40 bg-card/50 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr className="text-left">
                <th className="px-6 py-4 font-semibold text-foreground">Capability</th>
                <th className="px-6 py-4 font-semibold text-foreground">Intel Starter</th>
                <th className="px-6 py-4 font-semibold text-foreground">Ops Growth</th>
                <th className="px-6 py-4 font-semibold text-foreground">Mission Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonMatrix.map((row, idx) => (
                <tr
                  key={row.label}
                  className={idx % 2 === 0 ? 'bg-background/40' : 'bg-muted/30'}
                >
                  <td className="px-6 py-4 text-foreground">{row.label}</td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-foreground/90">
                    {renderCapabilityCell(row.starter)}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-foreground/90">
                    {renderCapabilityCell(row.growth)}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-foreground/90">
                    {renderCapabilityCell(row.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container relative z-10 space-y-10 pb-24">
        <div className="max-w-3xl space-y-4">
          <Badge className="border-primary/20 bg-primary/10 text-primary">Modular enhancements</Badge>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Extend CLERINT with automation, sovereign hosting, and executive enablement
          </h2>
          <p className="text-muted-foreground">
            Layer optional modules as your program scales. Our success engineers shape each add-on with measurable
            outcomes and governance checkpoints.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {addOns.map((addon) => (
            <Card key={addon.title} className="h-full border-border/40 bg-card/60 shadow-sm backdrop-blur">
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl">{addon.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {addon.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {addon.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Layers className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container relative z-10 pb-24">
        <div className="grid gap-8 rounded-4xl border border-primary/20 bg-primary/10 p-10 text-foreground shadow-lg shadow-primary/10 md:grid-cols-[1.1fr_0.9fr] dark:border-primary/30 dark:bg-primary/5">
          <div className="space-y-4">
            <Badge className="border-primary/20 bg-primary text-primary-foreground">Implementation support</Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Every engagement includes guided rollout and measurable checkpoints
            </h2>
            <p className="text-muted-foreground">
              From data migration to governance workshops, CLERINT specialists ensure your teams adopt the Clean
              Rationale Intelligence Framework with confidence. Engagement plans include success metrics, enablement
              tracks, and ongoing automation tuning.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <Headset className="h-4 w-4" />
                Embedded mission desk
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Exec value reviews
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                Global data residency
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-primary/30 bg-background/70 p-6 shadow-inner">
            <h3 className="text-lg font-semibold">Implementation milestones</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                Week 0-2: Blueprint workshop, success metrics, and integration inventory
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                Week 3-4: Workspace cutover, automation pilots, and enablement sessions
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                Week 5+: Executive scorecards, continuous optimisation, and roadmap alignment
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container relative z-10 space-y-10 pb-24">
        <div className="max-w-3xl space-y-4">
          <Badge className="border-primary/20 bg-primary/10 text-primary">FAQs</Badge>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Answers to the most common procurement questions
          </h2>
          <p className="text-muted-foreground">
            Need deeper detail on procurement paths, compliance artefacts, or sovereign hosting? Your CLERINT strategist
            will share documentation during the roadmap session.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question} className="h-full border-border/40 bg-card/70 backdrop-blur">
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container relative z-10 pb-32">
        <div className="flex flex-col items-center gap-6 rounded-4xl border border-border/40 bg-background/80 p-12 text-center shadow-lg shadow-primary/10">
          <Badge className="border-primary/20 bg-primary/10 text-primary">Next step</Badge>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to map your CLERINT pricing blueprint?
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Share your mission objectives, compliance posture, and technology stack. We will prepare a customised
            pricing outline, deployment timeline, and ROI guardrails for executive review.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Schedule a roadmap call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/business-case">Download value brief</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function renderCapabilityCell(value: boolean | string) {
  if (value === true) {
    return <CheckCircle2 className="mx-auto h-4 w-4 text-primary" />;
  }

  if (value === false) {
    return <span className="text-muted-foreground/70">-</span>;
  }

  return <span>{value}</span>;
}
