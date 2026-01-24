'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
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

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1 text-gray-700 text-sm">
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

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-gray-100 pt-3">
            <div className="flex flex-col space-y-2 text-gray-700 text-sm">
              <button onClick={() => scrollToSection('top')} className="py-2 px-3 text-left hover:bg-gray-50 rounded">TOP</button>
              <button onClick={() => scrollToSection('concept')} className="py-2 px-3 text-left hover:bg-gray-50 rounded">サービス</button>
              <button onClick={() => scrollToSection('products')} className="py-2 px-3 text-left hover:bg-gray-50 rounded">ソリューション</button>
              <button onClick={() => scrollToSection('case-studies')} className="py-2 px-3 text-left hover:bg-gray-50 rounded">開発事例</button>
              <button onClick={() => scrollToSection('news')} className="py-2 px-3 text-left hover:bg-gray-50 rounded">News & Updates</button>
              <button onClick={() => scrollToSection('company')} className="py-2 px-3 text-left hover:bg-gray-50 rounded">会社概要</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
