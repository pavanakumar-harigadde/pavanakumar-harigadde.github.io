'use client';

import { GraduationCap, Award, Trophy, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';
import {
  profile,
  education,
  skillGroups,
  certifications,
  achievements,
} from '@/lib/portfolio';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <FadeIn>
        <SectionHeading
          eyebrow="About me"
          title={profile.name}
          description={profile.role}
        />
      </FadeIn>

      {/* Professional summary */}
      <FadeIn delay={0.05}>
        <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {profile.summary}
          </p>
        </div>
      </FadeIn>

      {/* Education timeline */}
      <section className="mt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Academic journey"
            title="Education"
            description="My academic path from undergraduate physics & computing to a Master of Computer Applications."
          />
        </FadeIn>
        <div className="mt-10 space-y-6">
          {education.map((edu, i) => (
            <FadeIn key={edu.institution} delay={i * 0.08}>
              <div className="relative rounded-xl border border-border bg-card p-6 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-medium text-foreground">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {edu.period}
                    </span>
                    {edu.cgpa && (
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        CGPA: {edu.cgpa}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {edu.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Skills by category */}
      <section className="mt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Toolbox"
            title="Technical skills"
            description="Grouped by category — everything from languages and databases to subjects I've studied."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.06}>
              <Card className="h-full">
                <CardContent className="p-5">
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
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications"
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.08}>
              <Card className="h-full">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Beyond academics"
            title="Achievements & leadership"
            description="Recognition for academic merit, leadership, and extracurricular contribution."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {achievements.map((ach, i) => (
            <FadeIn key={ach.title} delay={i * 0.06}>
              <Card className="h-full">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                    <Trophy className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{ach.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {ach.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}