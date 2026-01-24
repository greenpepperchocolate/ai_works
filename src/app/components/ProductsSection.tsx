import React from 'react';

export default function ProductsSection() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "WEBサイト制作・開発",
      description: "レスポンシブデザイン対応のWEBサイト制作",
      link: "#contact"
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      title: "WEBアプリケーション開発",
      description: "WEBをメインとしたアプリケーション開発",
      link: "#contact"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
      title: "業務コンサルティング",
      description: "AI（機械学習）によるデータ分析や、業務効率化を実現する自動化のコンサルティングをご提案します。",
      link: "#contact"
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <a href={product.link} className="block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-tight">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Technology Stack 
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              採用技術・開発環境
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="text-sm font-medium text-gray-700">React / Next.js</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🟢</div>
                <div className="text-sm font-medium text-gray-700">Node.js</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🐍</div>
                <div className="text-sm font-medium text-gray-700">Python / Django</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">☁️</div>
                <div className="text-sm font-medium text-gray-700">AWS / GCP</div>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              最新技術を活用し、高品質で保守性の高いシステムを構築します
            </div>
          </div>
        */}
          
        </div>
      </div>
    </section>
  )
}
