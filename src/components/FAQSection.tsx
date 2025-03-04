import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: '料金体系はどのようになっていますか？',
      answer: '基本的には件数ベースの料金体系となっており、フォーム送信、テレアポ、ハイブリッドの3つのプランをご用意しています。また、月額固定プランもございますので、ご予算に合わせてご相談ください。'
    },
    {
      question: 'テレアポ後の商談同席もお願いできますか？',
      answer: '現状はアポイント設定までを基本業務としておりますが、ご要望があれば商談同席についてもオプションで相談可能です。'
    },
    {
      question: '自社でリストを持っていないのですが、大丈夫ですか？',
      answer: '問題ありません。当社でターゲットリストの抽出からご提案できますので、お気軽にご相談ください。'
    },
    {
      question: '問い合わせフォーム営業はクレームや違法リスクはありませんか？',
      answer: '企業の公式サイトに設置されている「お問い合わせフォーム」を通じて正当に情報をお送りしています。営業お断り先はリストから除外しており、法令を順守して運営していますのでご安心ください。'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">よくあるご質問</h2>
        
        <div className="mb-12 overflow-hidden rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Customer support and questions" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold text-lg flex items-center">
                    <span className="text-blue-600 mr-3">Q.</span>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 bg-white">
                    <div className="flex">
                      <span className="text-red-500 font-bold mr-3">A.</span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;