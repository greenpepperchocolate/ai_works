'use client'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/img/ヒーローセクション画像.png"
        alt="Hero"
        fill
        priority
        className="object-top"
      />
    </section>
  )
}