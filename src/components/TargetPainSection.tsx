import React from 'react';
import { AlertCircle, DollarSign, Mail } from 'lucide-react';
import Users from './Users';

const TargetPainSection = () => {
  const painPoints = [
    {
      icon: <AlertCircle className="w-10 h-10 text-red-500" />,
      text: '新規営業に着手したいが、何から始めればよいか分からない'
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      text: '社員をコア業務（商談対応など）に集中させたいので、泥臭いアウトバンドにリソースを割けない'
    },
    {
      icon: <Mail className="w-10 h-10 text-red-500" />,
      text: 'メールや電話をしてもなかなか反応率が上がらない'
    },
    {
      icon: <DollarSign className="w-10 h-10 text-red-500" />,
      text: '営業チームを採用・育成するより、リスクの少ない外注を検討したい'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">こんなお悩みはありませんか？</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="md:col-span-2 overflow-hidden rounded-lg shadow-md mb-4">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Business team facing challenges" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mr-4 mt-1 flex-shrink-0">{point.icon}</div>
              <p className="text-lg">{point.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="text-lg text-center">
            上記のような課題をお持ちでしたら、ぜひ当社のハイブリッド営業代行サービスをご検討ください。<br className="hidden md:block" />
            <span className="font-bold text-blue-700">電話とフォーム送信の両輪アプローチで"新規開拓"に挑戦します。</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetPainSection;