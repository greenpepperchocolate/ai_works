'use client'

import Link from 'next/link'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white/95 border-t border-gray-200 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center items-center space-x-1 text-xs">
              <span>│</span>
              <li>
                <button
                  onClick={() => scrollToSection('top')}
                  className="px-3 py-1 hover:text-gray-900 transition-colors"
                >
                  TOP
                </button>
              </li>
              <span>│</span>
              <li>
                <button
                  onClick={() => scrollToSection('concept')}
                  className="px-3 py-1 hover:text-gray-900 transition-colors"
                >
                  サービス
                </button>
              </li>
              <span>│</span>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="px-3 py-1 hover:text-gray-900 transition-colors"
                >
                  ソリューション
                </button>
              </li>
              <span>│</span>
              <li>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="px-3 py-1 hover:text-gray-900 transition-colors"
                >
                  開発事例
                </button>
              </li>
              <span>│</span>
              <li>
                <button
                  onClick={() => scrollToSection('news')}
                  className="px-3 py-1 hover:text-gray-900 transition-colors"
                >
                  News & Updates
                </button>
              </li>
              <span>│</span>
              <li>
                <button
                  onClick={() => scrollToSection('company')}
                  className="px-3 py-1 hover:text-gray-900 transition-colors"
                >
                  会社概要
                </button>
              </li>
              <span>│</span>
              <li>
                <Link
                  href="/privacy"
                  className="px-3 py-1 hover:text-gray-900 transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <span>│</span>
            </ul>
          </nav>

          <div className="text-sm text-gray-600">
            ©Copyright AI Works All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
