"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* قسم الترحيب الرئيسي */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* خلفية متدرجة مع تأثيرات */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 z-0">
          {/* رموز سومرية متحركة في الخلفية */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl text-white font-mesopotamian"
                initial={{ opacity: 0.3, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                transition={{ 
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                {['𒀭', '𒂗', '𒄑', '𒅎', '𒁹', '𒁺', '𒁻'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}
          </div>
        </div>

        {/* محتوى القسم الرئيسي */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="w-full md:w-1/2 text-white space-y-6 text-center md:text-right"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block">سجاد الحسناوي</span>
                <span className="text-gradient-purple text-3xl md:text-5xl block mt-2">SAJJAD ALHASNAWI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200">
                مزيج من التكنولوجيا والثقافة والإبداع
              </p>
              
              <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/projects" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-colors duration-300">
                  استعرض أعمالي
                </Link>
                <Link href="/contact" className="px-8 py-3 bg-transparent border-2 border-purple-400 hover:border-white rounded-full text-white font-medium transition-colors duration-300">
                  تواصل معي
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* هنا سيتم وضع الشعار والعلم العراقي المتحرك */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* مكان الشعار */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-700 to-indigo-600 shadow-lg glow-purple flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">SAMO</span>
                </div>
                
                {/* العلم العراقي المتحرك - سيتم استبداله بتنفيذ SVG متحرك */}
                <div className="absolute -top-4 -right-4 w-16 h-12 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-red-600 via-white to-black relative">
                    <div className="absolute w-full text-center text-green-600 font-arabic text-xs">الله أكبر</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* رموز تعبيرية متحركة */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-8 rtl:space-x-reverse">
          {['🧠', '🔮', '⚛️', '💫', '🌌'].map((emoji, index) => (
            <motion.div
              key={index}
              className="text-4xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 1 + index * 0.2,
                duration: 0.5,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
        
        {/* سهم للتمرير للأسفل */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>
      
      {/* قسم المقدمة المختصرة */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              رؤية تجمع بين <span className="text-gradient-purple">الحداثة والتراث</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              أقدم تجربة رقمية فريدة تمزج بين التصميم العصري المستقبلي وعمق التراث الرافديني، مع الحفاظ على الهوية الوطنية والتأثير العاطفي والثقافي.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* قسم الميزات الرئيسية */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ما يميز <span className="text-gradient-purple">أعمالي</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'تصميم عصري',
                description: 'واجهات مستخدم مستقبلية مع تجربة استخدام سلسة ومتميزة'
              },
              {
                icon: '🏛️',
                title: 'تراث رافديني',
                description: 'استلهام من الحضارة السومرية والتراث العراقي العريق'
              },
              {
                icon: '✨',
                title: 'تفاعل حيوي',
                description: 'رسوم متحركة وتأثيرات بصرية تجعل المحتوى ينبض بالحياة'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* قسم الدعوة للتواصل */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">هل لديك مشروع مميز؟</h2>
            <p className="text-lg text-purple-200">
              أنا جاهز للتعاون معك لتحويل أفكارك إلى واقع رقمي مبهر
            </p>
            <div className="pt-6">
              <Link href="/contact" className="px-8 py-3 bg-white text-purple-900 hover:bg-purple-100 rounded-full font-medium transition-colors duration-300">
                لنبدأ العمل معاً
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
