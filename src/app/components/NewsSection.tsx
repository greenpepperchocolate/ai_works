import React from 'react';

export default function NewsSection() {
  const newsItems = [
    {
      date: "2024.09.01",
      category: "お知らせ",
      title: "AI Works設立のお知らせ",
      description: "WEB制作・アプリ開発・業務コンサルティングを手がけるAI Worksを設立いたしました。最新技術で企業のDX推進を支援してまいります。",
      isNew: true
    },

  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "お知らせ":
        return "bg-blue-100 text-blue-800";
      case "実績":
        return "bg-green-100 text-green-800";
      case "技術":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 font-poppins">
            News & Updates
          </h2>
          <p className="text-center text-gray-600 mb-16 font-poppins">
            AI Worksの最新情報をお届けします
          </p>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex items-center gap-4 mb-3 md:mb-0">
                    <span className="text-gray-500 font-mono text-sm">
                      {item.date}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins hover:text-blue-600 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-poppins">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
    {/* 一時削除 
          <div className="text-center mt-12">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg">
              すべてのニュースを見る
            </button>
          </div>
          */}
        </div>
        
      </div>
    </section>
  );
}