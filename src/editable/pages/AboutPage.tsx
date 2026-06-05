import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fff7f5)] px-4 py-12 text-[var(--editable-page-text,#221f2b)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-[var(--editable-border)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5f35b2]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">About {SITE_CONFIG.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Company discovery', 'Service comparison', 'Listing support'].map((item) => <div key={item} className="rounded-lg bg-[#f4f0ff] px-4 py-3 text-sm font-black text-[#5f35b2]">{item}</div>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black tracking-tight">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
