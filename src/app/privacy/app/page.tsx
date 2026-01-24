import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー（アプリ） | AI Works',
  description: 'AI Worksが提供するモバイルアプリケーションにおけるプライバシーポリシーです。',
}

export default function AppPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">最終更新日: 2026年01月20日</p>

          <div className="prose prose-gray max-w-none">
            {/* 総則 */}
            <p className="text-gray-700 mb-6">
              川部 貴洋（屋号：AI Works、以下「当方」）は、当方が提供するモバイルアプリケーション（以下「本アプリ」）における、
              ユーザーの個人情報および利用情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>

            {/* 1. 取得する情報 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. 取得する情報</h2>

            <h3 className="text-base font-semibold text-gray-900 mb-2 mt-4">1.1 ユーザーが提供する情報</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>メールアドレス（アカウント登録・ログイン時）</li>
              <li>アプリ内で設定された学習・表示設定</li>
              <li>お問い合わせ時に入力された情報</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-900 mb-2 mt-4">1.2 自動的に取得される情報</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>学習履歴（再生回数、視聴進捗、お気に入り等）</li>
              <li>端末情報（OS、端末種別、アプリバージョン）</li>
              <li>利用ログ、操作履歴</li>
              <li>クラッシュ情報、パフォーマンスデータ</li>
              <li>IPアドレス、タイムゾーン等の技術情報</li>
            </ul>

            <p className="text-xs text-gray-500 mb-6">
              ※ 本アプリは、連絡先、写真、位置情報等の端末内個人データへはアクセスしません。
            </p>

            {/* 2. 利用目的 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. 情報の利用目的</h2>
            <p className="text-gray-700 mb-4">取得した情報は、以下の目的で利用されます。</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>アカウント管理および本人認証</li>
              <li>学習履歴・設定の保存および同期</li>
              <li>アプリ機能の提供、維持、改善</li>
              <li>利用状況の分析および品質向上</li>
              <li>不正利用の防止およびセキュリティ確保</li>
              <li>お問い合わせ対応およびサポート提供</li>
              <li>法令遵守および紛争対応</li>
            </ul>

            {/* 3. 外部サービス */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. 外部サービスの利用について</h2>
            <p className="text-gray-700 mb-4">
              本アプリは、サービス提供および品質向上のため、以下の外部サービスを利用する場合があります。
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>クラウドデータベース・ストレージサービス</li>
              <li>アクセス解析・クラッシュ解析サービス</li>
              <li>認証・配信・インフラ関連サービス</li>
            </ul>
            <p className="text-gray-700 mb-6">
              これらのサービス事業者は、各社のプライバシーポリシーに基づき情報を管理します。
            </p>

            {/* 4. 第三者提供 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-gray-700 mb-4">
              当方は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づき開示が求められた場合</li>
              <li>業務委託先に対し、サービス提供に必要な範囲で提供する場合（この場合、適切な契約および管理を行います）</li>
            </ul>

            {/* 5. 保存期間 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. データの保存期間</h2>
            <p className="text-gray-700 mb-4">
              取得した個人情報は、利用目的の達成に必要な期間のみ保存されます。アカウント削除後は、
              合理的な期間内に削除または匿名化されます。
            </p>
            <p className="text-xs text-gray-500 mb-6">
              ※ 法令上保存義務がある情報は、その期間保存される場合があります。
            </p>

            {/* 6. ユーザーの権利 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. ユーザーの権利</h2>
            <p className="text-gray-700 mb-4">ユーザーは、以下の権利を有します。</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>個人情報の確認・修正</li>
              <li>利用停止または削除の要請</li>
              <li>アカウント削除の申請</li>
            </ul>
            <p className="text-gray-700 mb-6">
              これらは、アプリ内設定またはお問い合わせにより対応します。
            </p>

            {/* 7. 未成年 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. 未成年者の利用について</h2>
            <p className="text-gray-700 mb-4">
              本アプリは、13歳未満の児童による利用を想定していません。13歳未満の方は、
              保護者の同意なく本アプリを利用できません。
            </p>
            <p className="text-gray-700 mb-6">
              万一、13歳未満の児童の個人情報が取得されたことが判明した場合、速やかに削除対応を行います。
            </p>

            {/* 8. セキュリティ */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. セキュリティ対策</h2>
            <p className="text-gray-700 mb-6">
              当方は、個人情報の漏洩、改ざん、紛失等を防止するため、暗号化、アクセス制御等の合理的な安全管理措置を講じます。
            </p>

            {/* 9. 変更 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. プライバシーポリシーの変更</h2>
            <p className="text-gray-700 mb-6">
              本ポリシーは、法令改正やサービス内容の変更等に応じて改定されることがあります。
              重要な変更がある場合、アプリ内または当方Webサイト等で通知します。
            </p>

            {/* 10. 事業者情報 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. 事業者情報・お問い合わせ</h2>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                事業者名：川部 貴洋（屋号：AI Works）<br />
                メールアドレス：aiworks.corporate@gmail.com<br />
                Webサイト：<a href="https://www.ai-works.site/" className="text-blue-600 hover:underline">https://www.ai-works.site/</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
