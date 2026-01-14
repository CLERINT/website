'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RequestDemoModal } from '@/components/request-demo-modal';
import { Calendar } from 'lucide-react';

const valueNarratives = [
  {
    title: 'Accelerated threat triage',
    impact: '72% faster',
    description:
      'Consolidate collection and enrichment in CLERINT to reduce dwell time on emerging threats and speed analyst escalation.',
  },
  {
    title: 'Executive-ready reporting',
    impact: '4 hr -> 45 min',
    description:
      'Automated briefing templates, approval workflows, and distribution lists cut the manual effort required for daily reports.',
  },
  {
    title: 'Audit-ready governance',
    impact: 'SOC2 & CJIS aligned',
    description:
      'Granular permissions, event telemetry, and immutable audit trails satisfy regulatory requests without bespoke tooling.',
  },
];

const strategicOutcomes = [
  {
    headline: 'Unified intelligence operations',
    points: [
      'Replace fragmented investigation tools with a governed workspace for cross-functional collaboration.',
      'Share context-rich findings with security leadership and crisis teams in near real time.',
    ],
  },
  {
    headline: 'Explainable AI augmentation',
    points: [
      'Analyst-in-the-loop automations increase coverage without sacrificing traceability.',
      'Guardrails and observable prompts deliver trustworthy co-pilots that pass compliance reviews.',
    ],
  },
  {
    headline: 'Future-proof data stewardship',
    points: [
      'Adaptive retention policies, regional controls, and encryption choices align to every jurisdiction you operate in.',
      'Continuous monitoring ensures collection activity remains ethical and contractually defensible.',
    ],
  },
];

const initiativeTimeline = [
  {
    phase: 'Discovery & alignment',
    duration: 'Weeks 1 - 2',
    details:
      'Joint workshops to map current-state intelligence workflows, key data feeds, and governance requirements.',
  },
  {
    phase: 'Pilot workspace',
    duration: 'Weeks 3 - 6',
    details:
      'Launch a production-ready CLERINT tenant with curated connectors, AI playbooks, and SOC review checkpoints.',
  },
  {
    phase: 'Global rollout',
    duration: 'Weeks 7 - 12',
    details:
      'Scale to additional teams, introduce automation guardrails, and finalize integration handoffs to security engineering.',
  },
];

export default function BusinessCasePage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container space-y-16 px-4">
        <section className="space-y-6 text-center md:text-left">
          <Badge className="border-primary/30 bg-primary/10 text-primary">Business case</Badge>
          <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Demonstrate measurable value with CLERINT
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Security leaders deploy CLERINT to unify intelligence collection, analysis, and governance. The result:
              faster decisions, lower operational risk, and compliance artifacts ready for any audit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Talk with our team
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {valueNarratives.map((item) => (
            <Card key={item.title} className="border-primary/20">
              <CardHeader className="space-y-3">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-3xl font-semibold text-primary">{item.impact}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center md:text-left">
            <Badge className="border-primary/30 bg-primary/10 text-primary">Strategic outcomes</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Unlock resilient, explainable intelligence operations
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {strategicOutcomes.map((outcome) => (
              <Card key={outcome.headline} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{outcome.headline}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {outcome.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center md:text-left">
            <Badge className="border-primary/30 bg-primary/10 text-primary">Deployment path</Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Proven timeline from discovery to global adoption
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {initiativeTimeline.map((step) => (
              <Card key={step.phase} className="border-dashed border-primary/20">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">{step.phase}</CardTitle>
                  <p className="text-sm font-medium text-primary">{step.duration}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {step.details}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-primary/20 bg-muted/40 p-10 text-center md:text-left">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            <Badge className="mx-auto w-fit border-primary/30 bg-primary/10 text-primary md:mx-0">
              Next steps
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Bring the Clean Rationale Intelligence Framework to your organization
            </h2>
            <p className="text-muted-foreground md:text-lg">
              We partner with mission owners, chief security officers, and intelligence teams to operationalize CLERINT
              with measurable milestones. Request a tailored briefing to align on goals, delivery roadmap, and success
              metrics.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <RequestDemoModal>
                <Button size="lg" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule briefing
                </Button>
              </RequestDemoModal>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
