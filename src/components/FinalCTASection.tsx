import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます。担当者より連絡いたします。');
    setFormData({ company: '', name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="Business collaboration" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">まずは無料相談からはじめませんか？</h2>
          <p className="text-lg mb-2">お客様の商材・サービスに合わせた最適なアプローチ方法をご提案します。</p>
          <p className="text-lg">まずはお気軽にご相談ください。成功事例や具体的なシミュレーションもご案内できます！</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">無料相談・お問い合わせ</h3>
            
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容（任意）</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                無料相談・お問い合わせ
              </button>
            </form>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">お電話でのお問い合わせ</p>
                    <p className="font-bold">045-777-9905</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">メールでのお問い合わせ</p>
                    <p className="font-bold">info@mofunets.co.jp</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">平日 9:00〜18:00（土日祝休み）</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;