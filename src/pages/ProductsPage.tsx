import { useEffect, useRef, useCallback, useMemo } from 'react';
import { Instagram, Sparkles, Heart, Share2 } from 'lucide-react';
import * as React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price?: string;
  rating?: number;
}

export default function ProductsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Pink Flower Hair Accessory',
      category: 'Accessories',
      description:
        'Add a vibrant, effortless touch of summer charm with this bold pink flower hair accessory.',
      image: '/Pink Flower Hair Accessory.jpeg',
      price: '₹499',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Bracelet with Butterfly Charm',
      category: 'Bracelets',
      description:
        'A wrist is gracefully adorned with two beaded bracelets of clear and lavender crackle crystal, one featuring a purple butterfly charm.',
      image: '/bracelet.jpeg',
      price: '₹799',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Luxury Gift Hamper',
      category: 'Customized Hampers',
      description: 'Curated gift hamper with personalized items and premium wrapping',
      image: 'https://chocolove.in/cdn/shop/files/Nutlover_gifthamoer.jpg?v=1725903118',
      price: '₹2,499',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Celebration Hamper',
      category: 'Customized Hampers',
      description: 'Perfect for special occasions and celebrations with luxurious contents',
      image: 'https://www.thespringpalette.com/cdn/shop/files/1_83305a26-701f-4960-b55b-424208131aae.jpg?v=1727581787',
      price: '₹1,999',
      rating: 4.8,
    },
    {
      id: 5,
      name: 'Heart-shaped Pink Gemstone Silver Ring',
      category: 'Jewelry',
      description: 'Delicate silver ring with a heart-shaped pink gemstone and intricate detailing',
      image: '/Silver Ring.jpeg',
      price: '₹1,299',
      rating: 5.0,
    },
    {
      id: 6,
      name: 'Gold Chain Bracelet',
      category: 'Bracelets',
      description: 'Elegant gold-plated evil eye chain bracelet with protective charm',
      image: '/evil eye bracelet.jpeg',
      price: '₹899',
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Pink Lip Gloss',
      category: 'Accessories',
      description:
        'A miniature lip gloss container shaped like a small pink milkshake, filled with clear gloss and pink glitter.',
      image: '/lip gloss.jpeg',
      price: '₹349',
      rating: 4.6,
    },
    {
      id: 8,
      name: 'Hair Clip',
      category: 'Accessories',
      description:
        'Brown hair clip with a tortoiseshell pattern, featuring a classic claw design for secure hold.',
      image: '/brown hair clip.jpeg',
      price: '₹599',
      rating: 4.5,
    },
    {
      id: 9,
      name: 'Crystal Beaded Necklace',
      category: 'Jewelry',
      description: 'Premium crystal beaded necklace with adjustable clasp and elegant finish',
      image: 'https://karatcart.com/cdn/shop/products/11011510_1.jpg?v=1763709423',
      price: '₹1,599',
      rating: 4.9,
    },
    {
      id: 10,
      name: 'Vintage Pearl Earrings',
      category: 'Jewelry',
      description: 'Classic vintage pearl earrings with sterling silver posts',
      image: 'https://www.curiocottage.in/cdn/shop/files/WFES62_2_ed34372d-d609-4647-b55b-527ccc6e308a_2048x.jpg?v=1754039137',
      price: '₹1,499',
      rating: 4.8,
    },
    {
      id: 11,
      name: 'Gemstone Collection Bundle',
      category: 'Jewelry',
      description: 'Curated collection of premium gemstone jewelry pieces',
      image: 'https://britishfossils.co.uk/wp-content/uploads/2023/12/PK133-Gemstone-Collection-Pack-amethyst-out-1-1.jpg',
      price: '₹3,999',
      rating: 5.0,
    },
    {
      id: 12,
      name: 'Deluxe Gift Hamper',
      category: 'Customized Hampers',
      description: 'Premium deluxe hamper with exclusive artisanal selection',
      image: 'https://thedottedi.in/cdn/shop/files/dottedi_High_tasters_Hamper.jpg?v=1732289448',
      price: '₹3,499',
      rating: 4.9,
    },
    {
      id: 13,
      name: 'Gold Vermeil Bracelet',
      category: 'Bracelets',
      description: 'Luxurious gold vermeil bracelet with moonstone accents',
      image: 'https://cdn.eternz.com/thumbnails/products/UntitledCapture0150copy_cf9d9227_thumbnail_1024.jpg',
      price: '₹2,299',
      rating: 4.7,
    },
    {
      id: 14,
      name: 'Rose Gold Hair Pins',
      category: 'Accessories',
      description: 'Set of elegant rose gold hair pins with pearl details',
      image: 'https://m.media-amazon.com/images/I/81Z53oyRcwL.jpg',
      price: '₹749',
      rating: 4.6,
    },
    {
      id: 15,
      name: 'Diamond Stud Earrings',
      category: 'Jewelry',
      description: 'Premium diamond stud earrings set in white gold',
      image: 'https://abdesignjewellery.com/cdn/shop/files/Stud_Earrings.jpg?v=1734013681',
      price: '₹4,999',
      rating: 5.0,
    },
    {
      id: 16,
      name: 'Velvet Jewelry Box',
      category: 'Accessories',
      description: 'Luxurious velvet jewelry box with compartments, perfect for storage',
      image: 'https://www.themessycorner.in/cdn/shop/files/Jewellery_box-_Emrald_Green.1_597f9487-d1ec-4780-a326-44ebb33c1be4.jpg?v=1768380631&width=1080',
      price: '₹899',
      rating: 4.8,
    },
  ];

  const categories = ['All', 'Jewelry', 'Customized Hampers', 'Bracelets', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [favorites, setFavorites] = React.useState<number[]>([]);

  const handleInstagramDM = useCallback((productName: string) => {
    const instagramUrl = 'https://www.instagram.com/spark_soul.24';
    window.open(instagramUrl, '_blank');
  }, []);

  const toggleFavorite = useCallback((productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const filteredProductsMemo = useMemo(() =>
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clear any pending animations or resources
    };
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 right-12 w-20 h-20 bg-amber-200/20 rounded-full blur-lg"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-28 h-28 bg-stone-200/25 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
            <span className="text-sm font-medium text-amber-800">Our Collection</span>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-stone-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Handcrafted
            <span className="block text-amber-700 font-medium">Masterpieces</span>
          </motion.h1>

          <motion.p
            className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our curated collection of handcrafted jewelry and personalized gifts,
            each piece telling a unique story of craftsmanship and elegance.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          ref={pillsRef}
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-stone-800 text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredProductsMemo.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-stone-100 to-amber-50">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22%3E%3Crect fill=%22%23e5e5e5%22 width=%22400%22 height=%22500%22/%3E%3C/svg%3E';
                    }}
                  />

                  {/* Rating Badge */}
                  {product.rating && (
                    <motion.div
                      className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      ⭐ {product.rating}
                    </motion.div>
                  )}

                  {/* Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        favorites.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-stone-600'
                      }`}
                    />
                  </motion.button>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <motion.h3
                    className="font-serif text-lg font-medium text-stone-800 mb-2 line-clamp-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    {product.name}
                  </motion.h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <motion.span
                      className="font-serif text-xl font-light text-amber-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      {product.price}
                    </motion.span>

                    <motion.button
                      onClick={() => handleInstagramDM(product.name)}
                      className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="w-4 h-4" />
                      DM
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Floating Sparkle Icon */}
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
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-2xl mx-auto p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-stone-200/50 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <motion.h2
              className="font-serif text-3xl font-light text-stone-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Custom Creations
            </motion.h2>

            <motion.p
              className="text-stone-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Don't see what you're looking for? Let's create something unique together.
              Contact us for custom orders and personalized designs.
            </motion.p>

            <motion.button
              onClick={() => handleInstagramDM('Custom Order')}
              className="px-8 py-4 bg-amber-700 text-white font-medium rounded-xl hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram className="w-5 h-5" />
              <span>Start Your Custom Order</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Spotlight Anchor */}
        <div
          className="spotlight-anchor absolute right-8 sm:right-16 lg:right-24 top-32 w-1 h-1 pointer-events-none"
          data-spotlight="products"
        />
      </div>
    </section>
  );
}
