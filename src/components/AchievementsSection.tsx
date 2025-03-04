import React from 'react';
import { Star } from 'lucide-react';

const AchievementsSection = () => {
  const companyLogos = [
    { name: 'Company A', logo: 'A' },
    { name: 'Company B', logo: 'B' },
    { name: 'Company C', logo: 'C' },
    { name: 'Company D', logo: 'D' },
    { name: 'Company E', logo: 'E' },
    { name: 'Company F', logo: 'F' },
  ];

  const caseStudies = [
    {
      company: 'IT企業A社',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      results: [
        'フォーム営業で月20件の商談創出',
        '返信率15%を記録',
        '結果、CPAが4,800円を下回る好結果'
      ]
    },
    {
      company: 'マーケティングツール企業B社',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      results: [
        '特殊スクリプトによるテレアポで決裁者同席率が向上',
        '受注率が従来比2倍に',
        '大型案件の商談化にも成功'
      ]
    }
  ];

  const testimonials = [
    {
      quote: '外注の成果報酬型なので、当初のリスク懸念が大幅に下がりました。',
      author: '◯◯社ご担当者様'
    },
    {
      quote: '商談確度が思った以上に高くて驚きました。テレアポとフォーム送信の組み合わせが効いています。',
      author: '△△社ご担当者様'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">導入実績とお客様の声</h2>
        
        <div className="mb-12 overflow-hidden rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Business success and achievements" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Company Logos */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">導入企業</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {companyLogos.map((company, index) => (
              <div key={index} className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-400">{company.logo}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">成功事例</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">{study.company}</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">お客様の声</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-right">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;