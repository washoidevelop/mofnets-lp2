import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます。担当者より連絡いたします。');
    setFormData({ company: '', name: '', email: '', phone: '' });
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative">
      {/* Company info header */}
      <div className="bg-gray-800 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left font-bold text-lg mb-1 md:mb-0">
              株式会社モフネッツ
            </div>
            <div className="flex items-center justify-center">
              <a href="tel:045-777-9905" className="flex items-center bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-700 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">045-777-9905</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Business meeting" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              テレアポ＋フォーム送信のハイブリッド営業代行で、<br className="hidden md:block" />
              御社の商談獲得を効率的に加速します。
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-bold mr-3 flex-shrink-0">実績</span>
                <p className="text-lg"><span className="font-bold">CPA5,000円以下</span>の実績あり（営業支援ツール商材の例）</p>
              </div>
              <div className="flex items-center">
                <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-bold mr-3 flex-shrink-0">効果</span>
                <p className="text-lg">電話×フォーム送信の両軸で<span className="font-bold">商談獲得率を最大化</span></p>
              </div>
              <div className="flex items-center">
                <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-bold mr-3 flex-shrink-0">信頼</span>
                <p className="text-lg">複数業界で成果を積み重ねた<span className="font-bold">専門チーム</span>が対応</p>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-xl mb-6">新規顧客開拓の最短ルート。月額固定料金でコスト管理も簡単。</p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105">
                無料相談はこちら
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full bg-white text-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-600">まずは無料相談</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">会社名</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">ご担当者名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                無料相談を申し込む
              </button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>お電話でのお問い合わせ</p>
              <p className="text-lg font-bold flex items-center justify-center mt-1">
                <Phone size={20} className="mr-2" /> 045-777-9905
              </p>
              <p className="text-xs mt-1">（平日 9:00〜18:00）</p>
            </div>
          </div>
          
          <div className="mt-8 md:hidden text-center w-full">
            <p className="text-xl mb-6">新規顧客開拓の最短ルート。月額固定料金でコスト管理も簡単。</p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105 w-full">
              無料相談はこちら
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;