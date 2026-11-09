'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';
import {
  profile,
  heroHighlights,
  projects,
  skillGroups,
} from '@/lib/portfolio';

const highlightCards = [
  {
    icon: Cpu,
    title: 'Machine Learning',
    description:
      'Built ML systems with Scikit-learn, Pandas, and regression/ensemble models.',
  },
  {
    icon: GraduationCap,
    title: 'MCA, CGPA 8.4',
    description:
      'Postgraduate at PES University focused on software and data systems.',
  },
  {
    icon: Sparkles,
    title: 'Leadership',
    description:
      'General Secretary of the student union and Best Student of the Year.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-muted/40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 -z-10 h-px w-1/2 bg-foreground/20"
        />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              Open to SDE / System Engineer opportunities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 text-lg font-medium text-foreground sm:text-xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground text-balance sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="group">
                <a href={profile.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex items-center justify-center gap-4"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Highlight chips */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2"
            >
              {heroHighlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground shadow-sm"
                >
                  {h}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Summary highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="At a glance"
            title="Summary highlights"
            description="A quick snapshot of my background, skills, and what I bring to the table."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Skills preview */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Toolbox"
              title="Skills & technologies"
              description="Languages, databases, tools, and subjects I've worked with and studied."
            />
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.slice(0, 4).map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.06}>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {group.category}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/about">
                  See all skills
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Featured work"
            title="Projects"
            description="Machine learning systems built to solve real-world problems."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  {project.badge && (
                    <span className="mb-3 inline-flex w-fit items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                      {project.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/projects">
                Explore projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-foreground bg-foreground p-8 text-center text-background shadow-lg sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-background/80">
              I&apos;m actively seeking Software Development Engineer and System
              Engineer roles. Let&apos;s connect.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
              >
                <a href={profile.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}