import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white relative">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="Modern office" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">会社情報</h3>
            <p className="mb-2">株式会社モフネッツ</p>
            <div className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
              <p>045-777-9905</p>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
              <p>info@mofunets.co.jp</p>
            </div>
            <p className="text-sm text-gray-400">営業時間: 9:00 - 18:00（土日祝休み）</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">テレアポ代行</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">フォーム送信代行</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">ハイブリッド営業代行</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">リスト作成サービス</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">スクリプト作成サービス</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">会社概要</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">サービス一覧</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">導入事例</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">よくある質問</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 株式会社モフネッツ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;