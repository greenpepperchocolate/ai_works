'use client'
import Image from 'next/image'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/img/AIワークス.png"
              alt="AI Works"
              width={160}
              height={60}
              priority
              className="h-12 w-32 object-cover object-center"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-1 text-gray-700 text-xs">
            <span>│</span>
            <button
              onClick={() => scrollToSection('top')}
              className="px-3 py-1 hover:text-gray-900 transition-colors"
            >
              TOP
            </button>
            <span>│</span>
            <button
              onClick={() => scrollToSection('concept')}
              className="px-3 py-1 hover:text-gray-900 transition-colors"
            >
              サービス
            </button>
            <span>│</span>
            <button
              onClick={() => scrollToSection('products')}
              className="px-3 py-1 hover:text-gray-900 transition-colors"
            >
              ソリューション
            </button>
            <span>│</span>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="px-3 py-1 hover:text-gray-900 transition-colors"
            >
              開発事例
            </button>
            <span>│</span>
            <button
              onClick={() => scrollToSection('news')}
              className="px-3 py-1 hover:text-gray-900 transition-colors"
            >
              News & Updates
            </button>
            <span>│</span>
            <button
              onClick={() => scrollToSection('company')}
              className="px-3 py-1 hover:text-gray-900 transition-colors"
            >
              会社概要
            </button>
            <span>│</span>
          </nav>
        </div>
      </div>
    </header>
  )
}
