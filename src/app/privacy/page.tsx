import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | AI Works',
  description: 'AI Worksのプライバシーポリシーページです。個人情報の取り扱いについて詳しく説明しています。',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            プライバシーポリシー
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-6">
              AI Works（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、
              ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>

            {/* 第1条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第1条（個人情報）</h2>
            <p className="text-gray-700 mb-6">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、
              当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び
              容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報
              （個人識別情報）を指します。
            </p>

            {/* 第2条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第2条（個人情報の収集方法）</h2>
            <p className="text-gray-700 mb-4">
              当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、
              クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間で
              なされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。
              以下、「提携先」といいます。）などから収集することがあります。
            </p>

            {/* 第3条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第3条（個人情報を収集・利用する目的）</h2>
            <p className="text-gray-700 mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>当社サービスの提供・運営のため</li>
              <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
              <li>お客様の本人確認、クレジットカード認証サービスのため</li>
              <li>決済代行業務に必要な範囲での業務委託先への提供（当社はクレジットカード情報を保持しません）</li>
              <li>新機能・更新情報・キャンペーン等および当社の他サービス案内メール送付のため</li>
              <li>メンテナンス、重要なお知らせ等の連絡のため</li>
              <li>不正利用等のおそれがあるユーザーの特定およびご利用のお断りのため</li>
              <li>登録情報の閲覧・変更・削除、ご利用状況の閲覧のため</li>
              <li>有料サービスの利用料金をご請求するため</li>
              <li>上記に付随する目的</li>
            </ul>

            {/* 第4条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第4条（利用目的の変更）</h2>
            <p className="text-gray-700 mb-4">
              当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、
              個人情報の利用目的を変更します。
            </p>
            <p className="text-gray-700 mb-6">
              変更後の目的については、当社所定の方法によりユーザーに通知し、
              または本ウェブサイト上に公表します。
            </p>

            {/* 第5条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第5条（個人情報の第三者提供）</h2>
            <p className="text-gray-700 mb-4">
              当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、
              第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>個人情報の取扱いを委託する場合</li>
              <li>事業承継に伴って個人情報が提供される場合</li>
              <li>共同利用に関して、範囲・目的・管理責任者等を公表した上で共同して利用する場合</li>
            </ul>

            {/* 第6条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第6条（個人情報の開示）</h2>
            <p className="text-gray-700 mb-4">
              本人から個人情報の開示を求められた場合、遅滞なく開示します。
              ただし、以下の場合は全部または一部を開示しないことがあります。
              開示しない場合は速やかに通知します。開示に際し、1件あたり1,000円の手数料を申し受けます。
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>本人または第三者の生命・身体・財産その他の権利利益を害するおそれがある場合</li>
              <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
              <li>その他法令に違反することとなる場合</li>
            </ul>

            {/* 第7条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第7条（個人情報の訂正および削除）</h2>
            <p className="text-gray-700 mb-4">
              本人から個人情報の訂正・追加・削除（以下「訂正等」といいます。）を求められた場合、
              遅滞なく必要な調査を行います。
            </p>
            <p className="text-gray-700 mb-6">
              訂正等を行った場合、または行わない旨の決定をしたときは、遅滞なく通知します。
            </p>

            {/* 第8条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第8条（個人情報の利用停止等）</h2>
            <p className="text-gray-700 mb-4">
              本人から、個人情報が利用目的の範囲を超えて取り扱われている、
              または不正の手段により取得されたとして、利用停止または消去（以下「利用停止等」といいます。）を
              求められた場合、遅滞なく必要な調査を行います。
            </p>
            <p className="text-gray-700 mb-4">
              請求に応じる必要があると判断した場合、遅滞なく利用停止等を行います。
            </p>
            <p className="text-gray-700 mb-6">
              利用停止等を行った場合、または行わない旨の決定をしたときは、遅滞なく通知します。
            </p>

            {/* 第9条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第9条（プライバシーポリシーの変更）</h2>
            <p className="text-gray-700 mb-4">
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
              ユーザーに通知することなく、変更することができます。
            </p>
            <p className="text-gray-700 mb-6">
              当社が別途定める場合を除いて、変更後のプライバシーポリシーは、
              本ウェブサイトに掲載したときから効力を生じます。
            </p>

            {/* 第10条 */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">第10条（お問い合わせ窓口）</h2>
            <p className="text-gray-700 mb-4">
              本ポリシーに関するお問い合わせは、下記窓口までお願いいたします。
            </p>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                住所：東京都新宿区新宿7-16-2 101<br />
                社名：AI Works<br />
                メールアドレス：aiworks.corporate@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}