import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Sparkles, X, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  size?: 'small' | 'medium' | 'large'; // For masonry layout
}

export default function GalleryPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const base = import.meta.env.BASE_URL;
  const galleryImages: GalleryImage[] = [
    { id: 1, url: `${base}bracelet.jpeg`, title: 'Bracelet with Butterfly Charm', category: 'Bracelets', size: 'medium' },
    { id: 2, url: `${base}brown hair clip.jpeg`, title: 'Brown Hair Clip', category: 'Accessories', size: 'small' },
    { id: 3, url: `${base}Pink Flower Hair Accessory.jpeg`, title: 'Pink Flower Hair Accessory', category: 'Accessories', size: 'medium' },
    { id: 4, url: `${base}Silver Ring.jpeg`, title: 'Heart-shaped Pink Gemstone Silver Ring', category: 'Jewelry', size: 'small' },
    { id: 5, url: `${base}evil eye bracelet.jpeg`, title: 'Gold Chain Bracelet', category: 'Bracelets', size: 'small' },
    { id: 6, url: `${base}lip gloss.jpeg`, title: 'Pink Lip Gloss', category: 'Accessories', size: 'small' },
    { id: 8, url: `${base}Silver Ring.jpeg`, title: 'Signature Ring', category: 'Jewelry', size: 'large' },
    { id: 9, url: `${base}bracelet.jpeg`, title: 'Memorable Gift Set', category: 'Bracelets', size: 'large' },
    { id: 10, url: `${base}evil eye bracelet.jpeg`, title: 'Protective Evil Eye Bracelet', category: 'Bracelets', size: 'medium' }
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = useMemo(() =>
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory),
    [selectedCategory]
  );

  // Cleanup function - no heavy GSAP needed
  useEffect(() => {
    return () => {
      // Component cleanup
    };
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-24 left-16 w-24 h-24 bg-amber-200/15 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-32 h-32 bg-stone-200/20 rounded-full blur-lg"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
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
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full border border-amber-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="text-sm font-medium text-amber-800">Our Gallery</span>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-stone-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Moments
            <span className="block text-amber-700 font-medium">Captured</span>
          </motion.h1>

          <motion.p
            className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our collection of handcrafted pieces, each one telling a story
            of craftsmanship, beauty, and timeless elegance.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.06 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
                selectedCategory === category
                  ? 'bg-stone-800 text-white shadow-lg'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 hover:shadow-lg'
              }`}
            >
              {category === 'All' && <Filter className="w-4 h-4 inline mr-2" />}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid Layout */}
        <motion.div
          ref={gridRef}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 mb-16 pb-12"
          style={{ columnGap: '1.5rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-6 break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image)}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-stone-200/50 shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image Container */}
                <motion.div
                  className="relative overflow-hidden"
                >
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23e5e5e5%22 width=%22400%22 height=%22300%22/%3E%3C/svg%3E';
                    }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Filter className="w-6 h-6 text-stone-800" />
                      </motion.div>
                    </div>

                    {/* Title and Category */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        className="text-white font-serif text-lg font-medium mb-2 line-clamp-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {image.title}
                      </motion.h3>
                      <motion.span
                        className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs rounded-full font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {image.category}
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Floating Sparkle */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-amber-700" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.p
            className="text-stone-600 mb-6 text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Want to see more?
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://instagram.com/spark_soul.24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 text-white font-medium rounded-xl hover:bg-stone-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            <span>Follow us on Instagram</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.a>
        </div>

        {/* Spotlight Anchor */}
        <div
          className="spotlight-anchor absolute left-8 sm:left-16 lg:left-24 top-32 w-1 h-1 pointer-events-none"
          data-spotlight="gallery"
        />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          className="fixed inset-0 bg-stone-900/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl border border-stone-200/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            />

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 hover:bg-white transition-all duration-300 border border-stone-200/50 shadow-lg"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-lg rounded-xl p-5 border border-stone-200/50 shadow-lg"
            >
              <motion.h3
                className="text-stone-800 font-serif text-xl font-medium mb-2"
                whileHover={{ scale: 1.02 }}
              >
                {selectedImage.title}
              </motion.h3>
              <motion.span
                className="inline-block text-stone-700 text-sm font-medium bg-amber-100 px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                {selectedImage.category}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
