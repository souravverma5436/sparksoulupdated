import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Heart, Shield, Clock, Award, Sparkles, Gift } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whySparkSoul = [
    {
      icon: Heart,
      title: 'Crafted with Passion',
      description: 'Every piece tells a unique story, handcrafted by artisans who pour their soul into each creation.'
    },
    {
      icon: Shield,
      title: 'Timeless Quality',
      description: 'Materials chosen for their enduring beauty and ethical sourcing, ensuring pieces that last generations.'
    },
    {
      icon: Sparkles,
      title: 'Personal Touch',
      description: 'Custom curation and personalization that transforms ordinary gifts into extraordinary expressions.'
    }
  ];

  const featuredCollection = [
    {
      id: 1,
      name: 'Crystal Beaded Necklace',
      price: '₹1,599',
      image: 'https://karatcart.com/cdn/shop/products/11011510_1.jpg?v=1763709423',
      category: 'Jewelry'
    },
    {
      id: 2,
      name: 'Vintage Pearl Earrings',
      price: '₹1,499',
      image: 'https://www.curiocottage.in/cdn/shop/files/WFES62_2_ed34372d-d609-4647-b55b-527ccc6e308a_2048x.jpg?v=1754039137',
      category: 'Jewelry'
    },
    {
      id: 3,
      name: 'Deluxe Gift Hamper',
      price: '₹3,499',
      image: 'https://thedottedi.in/cdn/shop/files/dottedi_High_tasters_Hamper.jpg?v=1732289448',
      category: 'Hampers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/20 to-stone-100 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 bg-stone-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Hero Section - Asymmetrical Layout */}
      <section ref={heroRef} className="relative min-h-screen flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -60 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-2"
              >
                <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-medium">
                  Handcrafted Luxury
                </p>
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
                className="space-y-2"
              >
                <span className="block font-serif text-6xl md:text-7xl lg:text-8xl font-thin text-stone-800 leading-none">
                  Spark
                </span>
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-amber-700 leading-none -mt-2">
                  Soul
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                className="font-sans text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg"
              >
                Where every piece whispers a story of craftsmanship, elegance, and timeless beauty.
                Discover jewelry and hampers that capture the essence of meaningful moments.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  onClick={() => onNavigate('products')}
                  className="px-10 py-4 bg-stone-800 text-white font-sans font-medium rounded-lg hover:bg-stone-700 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Collection
                </motion.button>

                <motion.button
                  onClick={() => onNavigate('about')}
                  className="px-10 py-4 border-2 border-stone-300 text-stone-700 font-sans font-medium rounded-lg hover:bg-stone-50 hover:border-stone-400 transition-all duration-500 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Story
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              {/* Main featured image with floating animation */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-stone-100 to-amber-50 p-8">
                  <img
                    src={`${import.meta.env.BASE_URL}ChatGPT Image Apr 13, 2026, 06_05_56 PM 1.png`}
                    alt="Luxury Gift Hamper"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400/60 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-stone-300/40 rounded-full blur-md"
                    animate={{
                      scale: [1.1, 1, 1.1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2,
                    }}
                  />
                </div>
              </motion.div>

              {/* Overlapping card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-stone-200/50 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="w-5 h-5 text-amber-600" />
                  <span className="font-serif text-sm font-medium text-stone-800">Premium Curated</span>
                </div>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  Each hamper tells a unique story, crafted for unforgettable moments.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Soft divider */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      </section>

      {/* Why Spark Soul Section */}
      <section className="relative py-32 px-6 lg:px-16 bg-white/40">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 right-16 w-32 h-32 bg-amber-100/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-6">
              Why Spark Soul
            </h2>
            <p className="font-sans text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
              More than just beautiful pieces — we're about creating meaningful connections
              through thoughtful craftsmanship and personalized experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {whySparkSoul.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group text-center relative"
              >
                {/* Background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-stone-100/50 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>

                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200/50 group-hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="relative py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-6">
              Featured Collection
            </h2>
            <p className="font-sans text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover pieces that blend timeless elegance with contemporary artistry,
              each one carefully selected for its unique story and exceptional quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCollection.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => onNavigate('products')}
              >
                <div className="relative overflow-hidden rounded-2xl bg-stone-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 mb-6">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-sans text-xs font-medium text-stone-700">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-serif text-lg font-medium text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-sans text-amber-700 font-medium text-lg">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => onNavigate('products')}
              className="px-10 py-4 border-2 border-stone-300 text-stone-700 font-sans font-medium rounded-xl hover:bg-stone-50 hover:border-stone-400 transition-all duration-500 hover:shadow-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Complete Collection
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Emotional Storytelling Section */}
      <section className="relative py-32 px-6 lg:px-16 bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block"
            >
              <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
              Every Gift Tells a Story
            </h2>

            <p className="font-sans text-stone-300 text-xl leading-relaxed max-w-3xl mx-auto">
              We believe that the most meaningful gifts aren't just beautiful objects,
              but vessels that carry emotions, memories, and connections.
              Each piece we create is an invitation to celebrate life's precious moments.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-amber-600 text-white font-sans font-medium rounded-xl hover:bg-amber-500 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Story
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-amber-400/40 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-6 h-6 bg-stone-400/30 rounded-full blur-sm"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </section>
    </div>
  );
}
