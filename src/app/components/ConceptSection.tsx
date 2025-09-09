import React from 'react';

export default function ConceptSection() {
  return (
    <section id="concept" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
            WEB・アプリ開発と業務コンサルティング
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed font-poppins">
            <p className="text-lg font-normal">
              AI WorksはAIやPythonを使って仕事や趣味を最適化することで、お客様の悩みを解決するために設立しました。最新のテクノロジーを駆使し、お客様のビジネス課題を解決する革新的なソリューションを提供しています。上場企業での豊富な業務改善実務経験をもとに、信頼性が高く効果的なサービスをお届けします。
            </p>
            <p className="text-lg font-normal">
              WEB制作、WEBアプリケーション開発、そして業務コンサルティングを通じて、お客様のデジタル変革（DX）をトータルサポートいたします。
            </p>
          </div>

          {/* Services Diagram 
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              AI Worksのサービス領域
            </h3>

            <div className="flex justify-center items-end space-x-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-500 text-white p-8 rounded-lg mb-4 h-48 flex items-center justify-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">💻</div>
                    <div className="text-lg font-bold">WEB制作</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  企業サイト・ECサイト<br />レスポンシブデザイン
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white p-8 rounded-lg mb-4 h-40 flex items-center justify-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">📱</div>
                    <div className="text-lg font-bold">アプリ開発</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  WEBアプリケーション<br />業務システム
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-700 text-white p-8 rounded-lg mb-4 h-32 flex items-center justify-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">📊</div>
                    <div className="text-lg font-bold">コンサル</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  業務効率化<br />DX推進
                </div>
              </div>
            </div>

            <div className="text-center text-gray-600 text-sm">
              <div>お客様のビジネス成長をトータルサポート</div>
            </div>
          </div>
          */}
          
        
          <div className="space-y-6 text-gray-700 leading-relaxed font-poppins mt-8">
            <p className="text-lg font-normal">
              現代のビジネス環境において、AIの活用は避けて通れない道となっています。AI WorksではAIを中心としたアプリケーションを活用し、お客様それぞれの悩みを解決するためのツールを開発いたします。また、単なる制作にとどまらず、お客様の業務プロセスを深く理解し、真に価値のあるソリューションをご提案いたします。
            </p>
            <p className="text-center font-semibold text-blue-700 text-lg">
              お客様の悩みを解決することが、私たちの最大の喜びです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}