"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  // مصفوفة المشاريع
  const projects = [
    {
      title: "تصميم موقع تراثي",
      description: "موقع يجمع بين التصميم العصري والتراث الرافديني مع تأثيرات تفاعلية متقدمة",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "project1.jpg",
      emoji: "🏛️"
    },
    {
      title: "تطبيق الواقع المعزز",
      description: "تطبيق يعرض القطع الأثرية السومرية بتقنية الواقع المعزز مع معلومات تفاعلية",
      tags: ["React Native", "AR.js", "Three.js"],
      image: "project2.jpg",
      emoji: "🔮"
    },
    {
      title: "منصة تعليمية",
      description: "منصة تعليمية تفاعلية لتعلم اللغات القديمة والكتابة المسمارية",
      tags: ["React", "Node.js", "MongoDB"],
      image: "project3.jpg",
      emoji: "📚"
    },
    {
      title: "تصميم هوية بصرية",
      description: "هوية بصرية كاملة لشركة ناشئة تجمع بين العناصر العصرية والتراثية",
      tags: ["تصميم الهوية", "الشعارات", "التصميم الجرافيكي"],
      image: "project4.jpg",
      emoji: "🎨"
    },
    {
      title: "تطبيق الذكاء الاصطناعي",
      description: "تطبيق يستخدم الذكاء الاصطناعي لتحليل وترجمة النصوص المسمارية القديمة",
      tags: ["Python", "TensorFlow", "React"],
      image: "project5.jpg",
      emoji: "🧠"
    },
    {
      title: "معرض افتراضي",
      description: "معرض افتراضي ثلاثي الأبعاد يعرض الفن والتراث العراقي بطريقة تفاعلية",
      tags: ["Three.js", "WebGL", "GSAP"],
      image: "project6.jpg",
      emoji: "🖼️"
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
              <span className="text-gradient-purple">مشاريعي</span> وأعمالي
            </h1>
            <p className="text-xl text-purple-200 leading-relaxed">
              مجموعة من المشاريع التي تعكس رؤيتي في دمج التكنولوجيا مع التراث والثقافة
            </p>
          </motion.div>
        </div>
      </section>

      {/* قسم عرض المشاريع */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* صورة المشروع */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-indigo-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {project.emoji}
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"
                    whileHover={{ opacity: 0.3 }}
                  />
                </div>
                
                {/* تفاصيل المشروع */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  
                  {/* الوسوم */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* زر المعاينة */}
                  <div className="pt-4">
                    <Link href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                      معاينة المشروع &larr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الدعوة للتعاون */}
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
              هل لديك <span className="text-gradient-purple">فكرة مشروع</span>؟
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              أنا دائماً متحمس للتعاون في مشاريع جديدة تجمع بين الإبداع والتكنولوجيا والتراث الثقافي
            </p>
            <div className="pt-6">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white rounded-full font-medium transition-colors duration-300">
                لنتحدث عن مشروعك
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
