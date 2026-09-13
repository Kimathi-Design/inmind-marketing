"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Badge,
  Button,
  CheckIcon,
  FieldSelect,
  Glass,
  Input,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@inmind/ui";
import { EditorialHero } from "@/components/marketing/EditorialHero";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { marketingShellClass } from "@/components/marketing/MarketingShell";
import { FadeUp } from "@/components/motion/Reveal";
import { contactPage as c } from "@/content/marketing/contact";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  audience: string;
  company: string;
  objective: string;
  budget: string;
  timeline: string;
  message: string;
};

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  audience: "",
  company: "",
  objective: "",
  budget: "",
  timeline: "",
  message: "",
};

function FormSelect({
  label,
  value,
  onValueChange,
  placeholder,
  options,
  required,
}: {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: readonly { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <FieldSelect
      label={`${label}${required ? " *" : ""}`}
      value={value}
      onValueChange={onValueChange}
      required={required}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </FieldSelect>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  if (sent) {
    return (
      <Glass padding="lg" className="shadow-[var(--im-shadow-md)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--im-ink)] text-[var(--im-on-ink)]">
          <CheckIcon size={18} />
        </div>
        <h2 className="mt-5 text-[24px] font-semibold tracking-[-0.04em] text-[var(--im-ink)]">
          {c.form.success.headline}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--im-ink-soft)]">
          {c.form.success.body}
        </p>
        <p className="mt-4 text-[13.5px] text-[var(--im-muted)]">
          {c.form.success.note}
        </p>
      </Glass>
    );
  }

  return (
    <Glass padding="lg" className="shadow-[var(--im-shadow-md)]">
      <div className="mb-6">
        <h2 className="text-[22px] font-semibold tracking-[-0.04em] text-[var(--im-ink)]">
          {c.form.title}
        </h2>
        <p className="mt-1.5 text-[13.5px] text-[var(--im-muted)]">
          {c.form.subtitle}
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="First name *"
            name="firstName"
            value={form.firstName}
            onChange={set("firstName")}
            placeholder="Jane"
            required
          />
          <Input
            label="Last name *"
            name="lastName"
            value={form.lastName}
            onChange={set("lastName")}
            placeholder="Mwangi"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Work email *"
            name="email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@company.com"
            required
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+254 700 000 000"
            hint="Optional"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormSelect
            label="I am a"
            value={form.audience}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, audience: value }))
            }
            placeholder="Select role"
            options={c.audienceOptions}
            required
          />
          <Input
            label="Company or handle *"
            name="company"
            value={form.company}
            onChange={set("company")}
            placeholder="Brand name or @handle"
            required
          />
        </div>

        <FormSelect
          label="Campaign objective"
          value={form.objective}
          onValueChange={(value) =>
            setForm((prev) => ({ ...prev, objective: value }))
          }
          placeholder="What are you trying to achieve?"
          options={c.objectiveOptions}
          required
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormSelect
            label="Estimated budget"
            value={form.budget}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, budget: value }))
            }
            placeholder="Select range"
            options={c.budgetOptions}
          />
          <FormSelect
            label="Timeline"
            value={form.timeline}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, timeline: value }))
            }
            placeholder="When do you want to start?"
            options={c.timelineOptions}
            required
          />
        </div>

        <label className="flex w-full flex-col gap-2">
          <span className="text-[13px] font-medium tracking-[-0.01em] text-[var(--im-ink)]">
            Tell us more *
          </span>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={set("message")}
            placeholder="Audience, markets, platforms, success metrics, creators you already have in mind…"
            className="w-full rounded-[13px] border border-[var(--im-line)] bg-[var(--im-panel)] px-3.5 py-3 text-[14px] leading-relaxed tracking-[-0.01em] text-[var(--im-ink)] outline-none transition-[border-color,box-shadow,background] duration-200 placeholder:text-[var(--im-muted-2)] focus:border-[var(--im-ink)]/25 focus:bg-[var(--im-fill)] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]"
          />
        </label>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          {c.form.submit}
          <ArrowUpRight size={15} className="ml-1.5 opacity-80" />
        </Button>
      </form>
    </Glass>
  );
}

export function ContactPage() {
  return (
    <>
      <EditorialHero {...c.hero} />

      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className={marketingShellClass}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <FadeUp>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <MarketingImage
                    src={c.hero.image.src}
                    alt={c.hero.image.alt}
                    fill
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <Badge tone="ink">Campaign desk</Badge>
                    <p className="mt-3 text-[18px] font-medium leading-snug tracking-[-0.03em] text-white">
                      From first brief to live campaign, one team, one workflow.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <div className="mt-8">
                <h2 className="text-[20px] font-semibold tracking-[-0.04em] text-[var(--im-ink)]">
                  {c.aside.headline}
                </h2>
                <ul className="mt-5 space-y-5">
                  {c.aside.points.map((point) => (
                    <li key={point.title} className="flex gap-3">
                      <CheckIcon
                        size={16}
                        className="mt-1 shrink-0 text-[var(--im-violet)]"
                      />
                      <div>
                        <p className="text-[15px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                          {point.title}
                        </p>
                        <p className="mt-1 text-[14px] leading-relaxed text-[var(--im-ink-soft)]">
                          {point.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-[18px] border border-[var(--im-line)] bg-[var(--im-panel)] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--im-muted)]">
                    {c.aside.emailLabel}
                  </p>
                  <a
                    href={`mailto:${c.aside.email}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--im-ink)] transition-colors hover:text-[var(--im-violet)]"
                  >
                    {c.aside.email}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 sm:py-20 md:py-24">
        <div className={marketingShellClass}>
          <SectionHeader
            eyebrow={c.steps.eyebrow}
            headline={c.steps.headline}
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {c.steps.items.map((step, index) => (
              <FadeUp key={step.title} delay={index * 0.06}>
                <li className="h-full rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6">
                  <p className="text-[12px] tabular-nums text-[var(--im-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                    {step.body}
                  </p>
                </li>
              </FadeUp>
            ))}
          </ol>
          <p className="mt-10 text-center text-[14px] text-[var(--im-muted)]">
            Already working with us?{" "}
            <Link
              href="/resources"
              className="font-medium text-[var(--im-ink)] underline-offset-4 hover:underline"
            >
              Browse resources
            </Link>{" "}
            or explore the{" "}
            <Link
              href="/platform"
              className="font-medium text-[var(--im-ink)] underline-offset-4 hover:underline"
            >
              platform
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
