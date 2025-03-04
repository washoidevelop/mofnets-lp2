import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('hybrid');
  
  const plans = {
    form: {
      title: 'フォーム送信',
      price: '60',
      unit: '1件',
      features: [
        '自動送信ツールを用いた効率的なアプローチ',
        'メールアドレス非公開の企業にもリーチ可能',
        '徹底したクレーム対策と送信先除外設定'
      ]
    },
    teleapo: {
      title: 'テレアポ',
      price: '250',
      unit: '1件',
      features: [
        'プロアポインターによる高い受付突破率',
        '特殊なスクリプトで決裁者との商談設定率を向上',
        '決裁者同席商談を狙うスクリプト'
      ]
    },
    hybrid: {
      title: 'フォーム送信＋テレアポ',
      price: '300',
      unit: '1件',
      features: [
        '電話とフォーム両面から接触し、確度の高いリードを獲得',
        '複数チャネルからのアプローチで見込み客との接点を増加',
        '商談獲得率の最大化'
      ],
      recommended: true
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">料金プラン</h2>
        
        <div className="mb-12 overflow-hidden rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Business pricing and value" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form Submission Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-center mb-4">{plans.form.title}</h3>
              
              <div className="text-center mb-6">
                <span className="text-5xl font-bold">{plans.form.price}</span>
                <span className="text-xl text-gray-600">円 / {plans.form.unit}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plans.form.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
          
          {/* Teleapo Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-center mb-4">{plans.teleapo.title}</h3>
              
              <div className="text-center mb-6">
                <span className="text-5xl font-bold">{plans.teleapo.price}</span>
                <span className="text-xl text-gray-600">円 / {plans.teleapo.unit}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plans.teleapo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
          
          {/* Hybrid Card - Recommended */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-blue-500 transform scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="bg-blue-600 text-white text-center py-2 font-bold">
              おすすめプラン
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-center mb-4">{plans.hybrid.title}</h3>
              
              <div className="text-center mb-6">
                <span className="text-5xl font-bold">{plans.hybrid.price}</span>
                <span className="text-xl text-gray-600">円 / {plans.hybrid.unit}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plans.hybrid.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h4 className="font-bold mb-4">料金に関する補足</h4>
          <ul className="space-y-2 text-sm">
            <li>• ボリュームディスカウントあり</li>
            <li>• 商材・サービスによって最低契約件数が異なるため要相談</li>
            <li>• （例）IT人材紹介サービスの場合：1,000件～など</li>
            <li>• ※商談獲得難易度によりCPAが変動する場合あり</li>
          </ul>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-800">月額固定料金プラン</p>
            <p className="text-sm">月ごとの予算に合わせた固定料金プランもご用意しています。計画的な予算管理が可能です。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;