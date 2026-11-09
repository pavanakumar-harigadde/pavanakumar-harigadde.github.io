'use client';

import * as React from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';
import { profile } from '@/lib/portfolio';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState<Errors>({});
  const [submitted, setSubmitted] = React.useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!EMAIL_RE.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      next.message = 'Please enter a message.';
    } else if (message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // No backend configured — open the user's mail client with a prefilled email.
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'pavanakumar-devadiga',
      href: profile.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'pavanakumar-devadiga',
      href: profile.github,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <FadeIn>
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact me"
          description="I'm actively looking for Software Development Engineer and System Engineer roles. Reach out — I'd love to hear from you."
        />
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Contact info */}
        <FadeIn className="lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.icon === Linkedin || c.icon === Github ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="truncate text-sm font-medium group-hover:text-foreground">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1} className="lg:col-span-3">
          <Card>
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl font-semibold">Thanks for reaching out!</h3>
                  <p className="max-w-sm text-muted-foreground">
                    Your email client should have opened with your message. I&apos;ll
                    get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about the role or opportunity..."
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    Send message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}