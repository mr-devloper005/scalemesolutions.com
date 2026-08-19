'use client'

import { Building2, MapPin, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business profile live quickly.' },
    { icon: Phone, title: 'Listing support', body: 'Get help with categories, contact information, profile updates, and claim requests.' },
    { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or service category? Tell us where the directory should expand.' },
  ]

  return (
    <EditableSiteShell>
      <main className="mx-auto max-w-[var(--editable-container)] px-4 py-12 text-[#221f2b] sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5f35b2]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#555162]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#555162]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--editable-border)] bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-semibold">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
