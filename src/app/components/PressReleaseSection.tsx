import React from 'react';

export default function PressReleaseSection() {
  const pressReleases = [
    {
      date: "2025.09.01",
      title: "AI Works設立のお知らせ",
      description: "WEB制作・アプリ開発・業務コンサルティングを手がけるAI Worksを設立いたしました。最新技術で企業のDX推進を支援してまいります。",
      category: "設立"
    },


  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "会社設立":
        return "bg-purple-100 text-purple-800";
      case "サービス":
        return "bg-blue-100 text-blue-800";
      case "技術":
        return "bg-green-100 text-green-800";
      case "実績":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="press" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">
            News & Updates
          </h2>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <time className="text-sm text-gray-500 font-mono">
                      {release.date}
                    </time>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        release.category
                      )}`}
                    >
                      {release.category}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {release.description}
                    </p>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
          {/* 一時削除
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              すべてのニュースを見る
            </button>
          </div>
           */}
        </div>
      </div>
    </section>
  );
}
