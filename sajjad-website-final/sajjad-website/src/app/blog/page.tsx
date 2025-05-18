"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Blog() {
  // مصفوفة المقالات
  const articles = [
    {
      title: "التصميم المستوحى من التراث الرافديني في العصر الرقمي",
      excerpt: "كيف يمكن دمج العناصر التراثية الرافدينية في تصاميم المواقع الإلكترونية العصرية مع الحفاظ على الهوية الثقافية",
      date: "15 مايو 2025",
      category: "تصميم",
      image: "blog1.jpg",
      emoji: "🏛️"
    },
    {
      title: "تقنيات الرسوم المتحركة ثلاثية الأبعاد في تطوير الويب",
      excerpt: "استعراض لأحدث التقنيات والمكتبات المستخدمة في إنشاء تجارب ثلاثية الأبعاد تفاعلية على الويب",
      date: "10 مايو 2025",
      category: "تطوير",
      image: "blog2.jpg",
      emoji: "⚛️"
    },
    {
      title: "الخط المسماري في التصميم الجرافيكي المعاصر",
      excerpt: "كيفية استلهام الخط المسماري السومري وتوظيفه في التصميمات الجرافيكية الحديثة بطريقة إبداعية",
      date: "5 مايو 2025",
      category: "تراث",
      image: "blog3.jpg",
      emoji: "📜"
    },
    {
      title: "تجربة المستخدم بين الماضي والحاضر",
      excerpt: "دراسة في كيفية تطور تجربة المستخدم عبر العصور وكيف يمكن الاستفادة من دروس الماضي في تصميمات اليوم",
      date: "28 أبريل 2025",
      category: "UX",
      image: "blog4.jpg",
      emoji: "🔮"
    },
    {
      title: "الهوية البصرية وتأثيرها على نجاح المشاريع الرقمية",
      excerpt: "أهمية الهوية البصرية المتكاملة في بناء العلامات التجارية الرقمية وكيفية تصميمها بفعالية",
      date: "20 أبريل 2025",
      category: "تسويق",
      image: "blog5.jpg",
      emoji: "🎨"
    },
    {
      title: "مستقبل التفاعل بين الإنسان والتكنولوجيا",
      excerpt: "نظرة استشرافية حول كيفية تطور التفاعل بين الإنسان والتكنولوجيا في ظل التقدم السريع للذكاء الاصطناعي",
      date: "15 أبريل 2025",
      category: "تكنولوجيا",
      image: "blog6.jpg",
      emoji: "🧠"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* قسم العنوان */}
      <section className="relative py-16 overflow-hidden">
        {/* خلفية مع تأثيرات */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 z-0">
          {/* رموز سومرية متحركة في الخلفية */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl text-white font-mesopotamian"
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                  duration: 8 + Math.random() * 10,
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

        {/* محتوى القسم */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              <span className="text-gradient-purple">المدونة</span>
            </h1>
            <p className="text-xl text-purple-200 leading-relaxed">
              أفكار ورؤى حول التصميم والتكنولوجيا والتراث الثقافي
            </p>
          </motion.div>
        </div>
      </section>

      {/* قسم عرض المقالات */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* صورة المقال */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-indigo-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {article.emoji}
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"
                    whileHover={{ opacity: 0.3 }}
                  />
                </div>
                
                {/* تفاصيل المقال */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{article.date}</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{article.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{article.excerpt}</p>
                  
                  {/* زر قراءة المزيد */}
                  <div className="pt-4">
                    <Link href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                      قراءة المزيد &larr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الاشتراك في النشرة البريدية */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              اشترك في <span className="text-gradient-purple">النشرة البريدية</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              احصل على أحدث المقالات والأفكار مباشرة إلى بريدك الإلكتروني
            </p>
            <div className="pt-6 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white rounded-full font-medium transition-colors duration-300">
                  اشتراك
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
