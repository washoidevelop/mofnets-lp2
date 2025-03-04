import React from 'react';
import { Phone, FileText, ArrowRight } from 'lucide-react';

const ServiceOverviewSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">電話＋フォーム送信代行で、新規開拓を効率化</h2>
        
        <div className="mb-12 overflow-hidden rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Business communication" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Phone className="w-12 h-12 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold">テレアポ代行</h3>
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                <p>プロアポインターによる高い受付突破率</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                <p>特殊なスクリプトで決裁者との商談設定率を向上</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                <p>実際に「決裁者同席商談を狙うスクリプト」で受注率が2倍になった事例も</p>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FileText className="w-12 h-12 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold">フォーム送信代行</h3>
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                <p>自動送信ツールを用いた効率的なアプローチ</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                <p>メールアドレス非公開の企業にもリーチ可能</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                <p>徹底したクレーム対策と送信先除外設定</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6">ハイブリッドアプローチの効果</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-3">
                  <Phone className="w-10 h-10 text-blue-600" />
                </div>
                <p className="font-bold">テレアポ</p>
              </div>
              
              <div className="text-center p-4">
                <span className="text-2xl font-bold text-blue-600">×</span>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-3">
                  <FileText className="w-10 h-10 text-blue-600" />
                </div>
                <p className="font-bold">フォーム送信</p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-blue-600" />
            </div>
            
            <div className="md:hidden">
              <ArrowRight className="w-8 h-8 text-blue-600 transform rotate-90" />
            </div>
            
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-blue-800 mb-2">相乗効果</h4>
              <p>接触率の大幅向上</p>
              <p>複数チャネルからのアプローチ</p>
              <p>商談獲得率の最大化</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-bold mb-2">電話×フォームで接触率が大幅向上</h4>
              <p className="text-sm">複数チャネルからのアプローチで見込み客との接点を増やします</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-bold mb-2">低コストで高確度のリード獲得が可能</h4>
              <p className="text-sm">成果報酬型なので、コストを抑えながら効率的に商談を獲得できます</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-bold mb-2">営業リストから商談設定までワンストップ提供</h4>
              <p className="text-sm">リスト作成から商談設定まで一貫して対応し、御社の負担を軽減します</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;