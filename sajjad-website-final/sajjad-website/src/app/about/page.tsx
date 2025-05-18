"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* قسم المقدمة مع خلفية رموز سومرية */}
      <section className="relative py-20 overflow-hidden">
        {/* خلفية مع رموز سومرية */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 z-0">
          {/* رموز سومرية في الخلفية */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute text-3xl text-gray-800 dark:text-gray-200 font-mesopotamian"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                {['𒀭', '𒂗', '𒄑', '𒅎', '𒁹', '𒁺', '𒁻'][Math.floor(Math.random() * 7)]}
              </div>
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              عن <span className="text-gradient-purple">سجاد الحسناوي</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              قصة تجمع بين الحداثة والتراث، بين التكنولوجيا والثقافة
            </p>
          </motion.div>
        </div>
      </section>

      {/* قسم القصة الشخصية */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                رحلتي <span className="text-gradient-purple">الإبداعية</span>
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  بدأت رحلتي في عالم التصميم والتطوير الرقمي منذ سنوات، حيث جمعت بين شغفي بالتكنولوجيا الحديثة وارتباطي العميق بالتراث الثقافي الرافديني العريق.
                </p>
                <p>
                  أسعى دائماً لإنشاء تجارب رقمية فريدة تجمع بين الأصالة والمعاصرة، وتعكس هويتي كمبدع عراقي يتطلع نحو المستقبل مع الاحتفاظ بجذوره الثقافية.
                </p>
                <p>
                  أؤمن بأن التصميم الجيد هو الذي يحرك المشاعر ويخلق تجربة لا تُنسى، لذا أحرص على أن تكون جميع أعمالي ذات تأثير عاطفي وثقافي عميق.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl glow-purple"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* هنا سيتم وضع صورة شخصية أو رمز تعبيري */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center">
                <div className="text-9xl">🧠</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* قسم المهارات والخبرات */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            مهاراتي <span className="text-gradient-purple">وخبراتي</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'تطوير الويب',
                skills: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion']
              },
              {
                icon: '🎨',
                title: 'التصميم',
                skills: ['UI/UX', 'تصميم الهوية البصرية', 'الرسوم المتحركة', 'التصميم التفاعلي']
              },
              {
                icon: '🏛️',
                title: 'الثقافة والتراث',
                skills: ['الحضارة السومرية', 'الفن الرافديني', 'الخط المسماري', 'التراث العراقي']
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="mr-2 text-purple-600">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الرؤية والفلسفة */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">رؤيتي وفلسفتي</h2>
            <p className="text-xl text-purple-200 leading-relaxed">
              &ldquo;أؤمن بأن التصميم الرقمي يجب أن يكون جسراً بين الماضي والمستقبل، بين التراث والابتكار. هدفي هو إنشاء تجارب رقمية تحرك المشاعر وتعزز الهوية الثقافية مع مواكبة أحدث التقنيات.&rdquo;
            </p>
            <div className="pt-6">
              <Link href="/projects" className="px-8 py-3 bg-white text-purple-900 hover:bg-purple-100 rounded-full font-medium transition-colors duration-300">
                استعرض أعمالي
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
