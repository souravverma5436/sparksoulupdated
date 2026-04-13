import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: Heart, value: '500+', label: 'Happy Customers' },
    { icon: Sparkles, value: '1000+', label: 'Pieces Created' },
    { icon: Users, value: '50+', label: 'Custom Orders' },
    { icon: Award, value: '5+', label: 'Years Experience' }
  ];

  useEffect(() => {
    return () => {
      // Component cleanup
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 bg-stone-200/30 rounded-full blur-lg"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Hero Section - Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Left Content - Takes up more space */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full border border-amber-200/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span className="text-sm font-medium text-amber-800">Our Story</span>
              </motion.div>

              <motion.h1
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-stone-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Crafting
                <span className="block text-amber-700 font-medium">Moments</span>
                That Last Forever
              </motion.h1>
            </div>

            <motion.div
              className="space-y-6 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Every piece tells a story. Born from passion and precision, Spark Soul creates
                jewelry that captures the essence of life's most precious moments. Each design
                is handcrafted with love, using only the finest materials and timeless techniques.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed font-light">
                From delicate necklaces that whisper elegance to bold statement pieces that command
                attention, we believe that true beauty lies in the details – the perfect curve,
                the ideal balance, the subtle sparkle that catches the light just right.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-stone-800 text-white font-medium rounded-xl hover:bg-stone-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Discover Our Work
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-stone-300 text-stone-700 font-medium rounded-xl hover:bg-stone-50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Custom Orders
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Takes up less space */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-amber-100 to-stone-200 rounded-3xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-amber-600" />
                </div>
              </motion.div>

              {/* Floating accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-8 h-8 text-amber-700" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-6 h-6 text-amber-700" />
              </motion.div>
              <div className="font-serif text-3xl font-light text-stone-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-stone-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-serif text-4xl lg:text-5xl font-light text-stone-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">Handcrafted with Love</h3>
              <p className="text-stone-600 leading-relaxed">
                Every piece is created with meticulous care and attention to detail,
                ensuring that each item carries the warmth of human craftsmanship.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">Timeless Quality</h3>
              <p className="text-stone-600 leading-relaxed">
                We use only premium materials and traditional techniques to create
                pieces that stand the test of time and become cherished heirlooms.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">Personal Connection</h3>
              <p className="text-stone-600 leading-relaxed">
                We believe in building relationships with our customers, understanding
                their stories, and creating pieces that truly reflect their unique spirit.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Spotlight Anchor */}
        <div
          className="spotlight-anchor absolute left-8 sm:left-16 lg:left-24 top-32 w-1 h-1 pointer-events-none"
          data-spotlight="about"
        />
      </div>
    </section>
  );
}
