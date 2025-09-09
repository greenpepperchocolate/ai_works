'use client'
import React, { useState } from 'react';

interface CaseStudy {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  results: string[];
  category: string;
  images?: string[];
}

export default function CaseStudiesSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<{[key: number]: number}>({});

  const handleImageChange = (studyIndex: number, imageIndex: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [studyIndex]: imageIndex
    }));
  };

  const caseStudies = [
    {
      image: "/img/インボイス1.png",
      title: "請求書のデータ化アプリ",
      description: "AIを使って請求書のPDFを分析し、明細をデータ化するアプリです。業務の効率化を目的とし、手作業での入力作業を大幅に削減します。",
      technologies: ["生成AI","Django","React", "PostgreSQL"],
      results: [
        "業務の効率化",
        "処理精度95%以上を達成",
      ],
      category: "WEBアプリ・AI",
      images: ["/img/インボイス1.png", "/img/インボイス2.png"]
    },
    {
      image: "/img/位置1.png",
      title: "位置情報リマインダーアプリ",
      description: "登録していた位置に近づくとアラートが鳴り、買い忘れ防止をしたり、危険アラートが出るモバイルアプリです。GPS機能を活用し、ユーザーの生活をサポートする便利な機能を提供します。",
      technologies: ["React Native", "Google Maps API", "Django", "Expo", "PostgreSQL"],
      results: [
        "位置精度50m以内で通知",
        "買い忘れ防止率80%向上"
      ],
      category: "モバイルアプリ",
      images: ["/img/位置1.png", "/img/位置2.png"]
    },
    {
      image: "/img/アマゾン1.png",
      title: "ECの商品データ自動取得ツール",
      description: "指定サイトの商品URLをもとに対象の商品データを自動で取得し、CSVデータに抽出。各ECの商品データを比較・分析をすることが目的となるツールです。",
      technologies: ["Python", "Streamlit", "Pandas",],
      results: [
        "自動で商品や価格情報をデータ化",
        "商品コードで各ECとの料金比較が可能"
      ],
      category: "自動化ツール",
      images: ["/img/アマゾン1.png", "/img/アマゾン2.png"]
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "WEBアプリ・AI":
        return "bg-purple-100 text-purple-800";
      case "モバイルアプリ":
        return "bg-blue-100 text-blue-800";
      case "自動化ツール":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 font-poppins">
            開発事例
          </h2>
          <p className="text-center text-gray-600 mb-16 font-poppins">
            AI Worksがこれまでに手がけた代表的な開発事例をご紹介します
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <div className="relative overflow-hidden rounded-t-xl bg-gray-50">
                    <div className="w-full h-80 sm:h-96 flex items-center justify-center p-4">
                      <img
                        src={study.images ? study.images[activeImageIndex[index] || 0] : study.image}
                        alt={study.title}
                        className="max-w-full max-h-full object-contain transition-all duration-500 hover:scale-105 rounded-lg shadow-sm"
                      />
                    </div>
                    
                    {/* Image navigation dots */}
                    {study.images && study.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {study.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={() => handleImageChange(index, imageIndex)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              (activeImageIndex[index] || 0) === imageIndex
                                ? 'bg-white scale-110'
                                : 'bg-white/60 hover:bg-white/80'
                            }`}
                            aria-label={`画像 ${imageIndex + 1}を表示`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Navigation arrows for multiple images */}
                    {study.images && study.images.length > 1 && (
                      <>
                        <button
                          onClick={() => handleImageChange(index, Math.max(0, (activeImageIndex[index] || 0) - 1))}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                          disabled={(activeImageIndex[index] || 0) === 0}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleImageChange(index, Math.min(study.images!.length - 1, (activeImageIndex[index] || 0) + 1))}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                          disabled={(activeImageIndex[index] || 0) === (study.images!.length - 1)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        study.category
                      )}`}
                    >
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 font-poppins">
                    {study.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 font-poppins">
                      使用技術
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 font-poppins">
                      主な成果
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start text-sm text-gray-600 font-poppins"
                        >
                          <span className="text-green-500 mr-2 mt-0.5">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-lg p-8 inline-block">
              <h3 className="text-xl font-bold text-blue-800 mb-3 font-poppins">
                お客様の課題に合わせたソリューションを提供します。
              </h3>
              <p className="text-blue-700 font-poppins">
                WEBアプリや自動化ツールの開発やAI（機械学習）を使った分析なども受付しております。
              </p>
              <div className="mt-6">
                {/* TODO: 実際のGoogleフォームIDに置き換えてください 
                    Googleフォーム作成手順:
                    1. https://forms.google.com にアクセス
                    2. 新しいフォームを作成
                    3. 質問項目を追加（お名前、会社名、メール、プロジェクト内容、予算、期限など）
                    4. フォームの設定で「回答を受信」を有効化
                    5. 共有設定で「リンクを知っている全員が回答可能」に設定
                    6. フォームのURLをここに貼り付け */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf_example_form_id/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  開発やデータ分析のご相談はこちら
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}