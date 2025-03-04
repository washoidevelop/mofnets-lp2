import React from 'react';
import { MessageSquare, Users, FileCheck, Target, Phone, BarChart } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
      title: 'お問い合わせ',
      description: 'まずは問い合わせフォームまたはお電話でご連絡ください'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'ヒアリング',
      description: 'ターゲット企業・商材・目標件数などをお伺いします'
    },
    {
      icon: <FileCheck className="w-10 h-10 text-blue-600" />,
      title: 'ご提案＆契約',
      description: '最適なプランと料金を提示し、ご納得いただいたらご契約'
    },
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'ターゲット選定＆原稿作成',
      description: '業界・エリア・役職などを設定し、スクリプトやフォーム送信文面を準備'
    },
    {
      icon: <Phone className="w-10 h-10 text-blue-600" />,
      title: 'アプローチ開始',
      description: 'テレアポ＆フォーム送信を本格スタート'
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      title: 'レポート共有',
      description: 'アポイント状況・商談成立数を定期的にレポート報告。課題があれば改善策を検討'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">導入までの流れ</h2>
        
        <div className="mb-12 overflow-hidden rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Business process workflow" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Card-based Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="pt-16 px-6 pb-6">
                    <div className="flex justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 p-6 rounded-lg text-center">
            <p className="font-bold text-lg">最短でお問い合わせから5営業日で開始可能。スピード重視で対応します。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;