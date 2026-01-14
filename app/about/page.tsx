import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Users,
  Target,
  Globe,
  Lightbulb,
  Award,
  Heart,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CLERINT | Our Mission and Team',
  description: 'Learn about CLERINT\'s mission to enable clean, rationale intelligence operations worldwide.',
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
};

type Value = {
  title: string;
  description: string;
  icon: any;
};

const mission = {
  title: 'Enabling Clean Rationale Intelligence',
  description: 'CLERINT was founded on the belief that intelligence operations should be transparent, accountable, and ethically sound. We provide the tools and framework that allow organizations to conduct open-source intelligence (OSINT) with confidence, clarity, and compliance.',
  vision: 'A world where intelligence operations are conducted with full transparency, enabling better decisions through clean, rationale-based analysis.',
};

const values: Value[] = [
  {
    title: 'Transparency First',
    description: 'Every analysis, every decision, every conclusion must be traceable and explainable. We believe in clean rationale over black-box solutions.',
    icon: Shield,
  },
  {
    title: 'Ethical Intelligence',
    description: 'OSINT operations must respect privacy, comply with regulations, and serve the greater good. We build governance into every feature.',
    icon: Heart,
  },
  {
    title: 'Analyst Empowerment',
    description: 'Technology should amplify human expertise, not replace it. Our platform empowers analysts with better tools and clearer insights.',
    icon: Users,
  },
  {
    title: 'Global Accessibility',
    description: 'Intelligence capabilities should be accessible to organizations of all sizes, from small security teams to large government agencies.',
    icon: Globe,
  },
];

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former intelligence analyst with 15 years of experience in government and private sector OSINT operations. PhD in Information Security from MIT.',
    expertise: ['Intelligence Analysis', 'Security Architecture', 'Team Leadership'],
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect with expertise in scalable intelligence platforms. Previously led engineering teams at major security technology companies.',
    expertise: ['Platform Architecture', 'AI/ML Systems', 'DevOps'],
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Head of Security & Compliance',
    bio: 'Cybersecurity expert with deep experience in government compliance frameworks. Former CISO at Fortune 500 companies.',
    expertise: ['Security Architecture', 'Compliance', 'Risk Management'],
  },
  {
    name: 'James Kim',
    role: 'Head of Product',
    bio: 'Product strategist focused on user experience and workflow optimization. Background in intelligence operations and product design.',
    expertise: ['Product Strategy', 'UX Design', 'Intelligence Workflows'],
  },
];

const milestones = [
  {
    year: '2023',
    title: 'CLERINT Founded',
    description: 'Founded with a vision to democratize intelligence capabilities and make OSINT operations more transparent and accountable.',
  },
  {
    year: '2024',
    title: 'First Enterprise Deployment',
    description: 'Successfully deployed CLERINT for our first enterprise customer, processing over 1M intelligence signals in the first month.',
  },
  {
    year: '2024',
    title: 'SOC 2 Type II Certification',
    description: 'Achieved SOC 2 Type II certification, demonstrating our commitment to enterprise-grade security and compliance.',
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Expanded operations to serve intelligence teams across North America, Europe, and Asia-Pacific regions.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container max-w-6xl space-y-16 px-4">
        {/* Header */}
        <header className="text-center space-y-6">
          <Badge className="border-primary/30 bg-primary/10 text-primary">About CLERINT</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Building the Future of Intelligence Operations
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            We're a team of intelligence professionals, security experts, and technology innovators
            united by a common mission: making intelligence operations more transparent, accountable, and effective.
          </p>
        </header>

        {/* Mission & Vision */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Our Mission & Vision</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Mission</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {mission.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Vision</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {mission.vision}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-primary/20">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Intelligence professionals and technology experts working together
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-primary/20">
                <CardHeader className="space-y-3">
                  <div className="text-center space-y-2">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-center">
                    {member.bio}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Timeline */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Our Journey</h2>
            <p className="text-muted-foreground">
              Key milestones in CLERINT's development and growth
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="mt-4 h-16 w-0.5 bg-primary/20"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="font-mono">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us */}
        <section className="rounded-3xl border border-primary/20 bg-muted/40 p-10 text-center">
          <div className="space-y-4">
            <Badge className="border-primary/30 bg-primary/10 text-primary">Join Our Mission</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Help Us Build the Future of Intelligence
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for transparent,
              ethical intelligence operations. Join our team and help shape the future of OSINT.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Questions About CLERINT?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Whether you're interested in our platform,
            want to join our team, or have questions about intelligence operations,
            we're here to help.
          </p>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
