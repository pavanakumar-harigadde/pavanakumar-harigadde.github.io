'use client';

import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';
import { projects, profile } from '@/lib/portfolio';

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <FadeIn>
        <SectionHeading
          eyebrow="Featured work"
          title="Projects"
          description="Machine learning systems and hackathon projects built to solve real-world problems."
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.1}>
            <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {project.badge && (
                      <Badge variant="secondary" className="mb-3">
                        {project.badge}
                      </Badge>
                    )}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>

                <p className="mt-3 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex-1">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="gap-3 border-t border-border/60 p-6 pt-4">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.githubUrl ?? profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a
                    href={project.demoUrl ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={!project.demoUrl}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}