import React from 'react';

export default function CompanySection() {
  const companyInfo = [
    {
      label: "商号",
      value: "AI Works",
    },
    {
      label: "URL",
      value: "https://ai-works.co.jp/",
    },
    {
      label: "設立",
      value: "2025年9月1日",
    },

    {
      label: "代表者",
      value: "川部 貴洋",
    },
    {
      label: "所在地",
      value: "〒160-0022 東京都新宿区新宿7-16-2 101",
    },
    {
      label: "事業内容",
      value: `HP・LP制作
        WEBアプリケーション開発
        システム開発・保守運用
        業務コンサルティング・DX推進支援`,
    },

    {
      label: "サービス特徴",
      value: `最新技術を活用したモダンな開発
      PythonやAIを活用した自動化ツール等の開発`
    },
  ];

  return (
    <section
      id="company"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
            Company Information
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {companyInfo.map((info, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="text-gray-700 font-semibold mb-2 md:mb-0 md:w-32 flex-shrink-0">
                      {info.label}
                    </div>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line flex-1">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-b border-gray-300 pb-4">
                <div className="flex flex-col md:flex-row">
                  <div className="text-gray-700 font-semibold mb-2 md:mb-0 md:w-32 flex-shrink-0">
                    アクセス
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-700">
                      副都心線 東新宿駅より徒歩5分
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
