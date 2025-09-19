import { Button } from "@/ui";
import Link from "next/link";

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="rounded-[var(--radius-md)] border border-muted/25 p-4 bg-bg/60">
      <h3 className="heading-3 mb-1">{title}</h3>
      <p className="text-body text-fg/85">{desc}</p>
    </li>
  );
}

export default function Home() {
  return (
    <main className="container-app py-10 space-y-12">
      <section className="space-y-5">
        <h1 className="heading-1">
          ANKA UI — CSS Engineering & UI Component Library
        </h1>
        <p className="text-body text-fg/85 max-w-3xl">
          Bu proje; <b>CSS engineering</b> (Tailwind v4 + design tokens),
          <b> UI component geliştirme</b> (Button, Card, Input, Modal) ve
          <b> dokümantasyon</b> (Storybook) pratiği için. Amaç: sağlam bir
          tasarım sistemi disipliniyle, <i>üretime hazır</i> bir mini kütüphane
          oluşturmak.
        </p>

        <div className="flex gap-3 flex-wrap">
          <Link href="/button">
            <Button variant="primary">Button Demo</Button>
          </Link>
          <Link href="/card">
            <Button variant="secondary">Card Demo</Button>
          </Link>
          <Link href="/input">
            <Button variant="ghost">Input Demo</Button>
          </Link>
          <Link href="/modal">
            <Button>Modal Demo</Button>
          </Link>
          <a href="http://localhost:6006" target="_blank" rel="noreferrer">
            <Button variant="secondary">Storybook (local)</Button>
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="heading-2">Neden bu projeyi yapıyorum?</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          <Feature
            title="Design Tokens & Tailwind v4"
            desc="Configless Tailwind v4 ve @theme ile tek kaynaklı (single source) token yönetimi: renk, tipografi, spacing. Projede tema değişimi class ile yapılabiliyor."
          />
          <Feature
            title="Atomic düşünme & a11y"
            desc="Atoms → molecules → organisms. Erişilebilirlik: aria-* nitelikleri, ESC ile kapanma, focus trap, tab order."
          />
          <Feature
            title="Production packaging"
            desc="tsup ile ESM/CJS + .d.ts. Host app token'ları sağlar, componentler sadece davranış ve sınıf kompozisyonu taşır."
          />
          <Feature
            title="Dokümantasyon & paylaşım"
            desc="Storybook ile görsel dokümantasyon; Medium yazısı/LinkedIn paylaşımıyla çıktıları sunma."
          />
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="heading-2">Teknik Stack & İlkeler</h2>
        <ul className="grid gap-3">
          <Feature
            title="Next.js App Router"
            desc="Varsayılan server component'lar; sadece etkileşim gereken yerler 'use client'."
          />
          <Feature
            title="Tailwind v4 (CSS-first)"
            desc="@import 'tailwindcss' + @theme/@utility. Token'lar CSS değişkeni; alpha/opacity Tailwind tarafından handle edilir."
          />
          <Feature
            title="SCSS (yalnızca global helpers)"
            desc="global.scss: body bg/fg, küçük yardımcılar (.container-app, .sr-only, .flex-center). Component stilleri Tailwind utility."
          />
          <Feature
            title="CVA + tailwind-merge"
            desc="Variant/size/full gibi kombinasyonları güvenli ve okunabilir yönetmek için."
          />
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="heading-2">Hızlı Başlangıç</h2>
        <div className="rounded-[var(--radius-md)] border border-muted/25 p-4 bg-bg/60">
          <p className="text-body">
            <b>Dev:</b> <code>pnpm dev</code> • <b>Storybook:</b>{" "}
            <code>pnpm storybook</code> • <b>UI build:</b>{" "}
            <code>pnpm run build:ui</code>
          </p>
          <p className="text-caption mt-1">
            Storybook deploy linki README&apos;de yer alacak.
          </p>
        </div>
      </section>
    </main>
  );
}
