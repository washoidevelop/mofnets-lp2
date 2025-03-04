import React from 'react';
import { Phone, FileText, Users, DollarSign } from 'lucide-react';

const USPSection = () => {
  const strengths = [
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: 'テレアポ×フォーム送信で商談獲得率アップ',
      description: '「CPA5,000円以下」の実績あり。電話とフォーム両面から接触し、確度の高いリードを獲得します。',
      highlight: 'CPA5,000円以下'
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: '特殊スクリプトで受付突破＆成約率向上',
      description: '業界トップアポインター監修のスクリプトを使用。決裁者同席商談を狙う手法で受注率2倍の実績があります。',
      highlight: '受注率2倍'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: '豊富なアポインター研修制度',
      description: '業界のトップアポインターを招いた研修を定期実施。常に最新ノウハウを取り入れ、スキルを磨き続けています。',
      highlight: '定期研修実施'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: '柔軟な料金プラン＆成果報酬型',
      description: 'コストを最適化（成果時のみ支払い）。ボリュームディスカウントも対応しています。',
      highlight: '成果報酬型'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">当社の強み</h2>
        <p className="text-center text-lg text-gray-600 mb-8">選ばれる4つの理由</p>
        
        <div className="mb-12 overflow-hidden rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Professional business team" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{strength.title}</h3>
              <div className="bg-blue-100 text-blue-800 text-center py-1 px-3 rounded-full font-bold mb-4">
                {strength.highlight}
              </div>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;