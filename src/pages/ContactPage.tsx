import { useRef, useState } from 'react';
import { Instagram, Mail, Send, Sparkles, Clock, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
// 2. Add a Gmail service → copy the Service ID below
// 3. Create an email template → copy the Template ID below
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_kcrshpm';
const EMAILJS_TEMPLATE_ID = 'template_tiaqijq';
const EMAILJS_PUBLIC_KEY  = 'OmSFpjpqNu65C_R_P';

const INTERESTS = ['Jewelry', 'Customized Hamper', 'Bracelets', 'Accessories', 'Rings', 'Clutches', 'Other'];
const DELIVERY  = ['Within 3–5 days', 'Within a week', 'Urgent (ASAP)', 'Just Inquiry'];
const HOW_FOUND = ['Instagram (@spark_soul.24)', 'Word of Mouth', 'Repeat Customer', 'Other'];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    address: '',
    interests: [] as string[],
    description: '',
    occasion: '',
    delivery: '',
    howFound: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleInterest = (item: string) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter(i => i !== item)
        : [...prev.interests, item],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name:    form.fullName,
      from_email:   form.email,
      whatsapp:     form.whatsapp,
      address:      form.address,
      interests:    form.interests.join(', '),
      description:  form.description,
      occasion:     form.occasion,
      delivery:     form.delivery,
      how_found:    form.howFound,
      to_email:     'souravverma5436@gmail.com',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setForm({ fullName: '', email: '', whatsapp: '', address: '', interests: [], description: '', occasion: '', delivery: '', howFound: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactMethods = [
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@spark_soul.24',
      action: 'Follow Us',
      link: 'https://instagram.com/spark_soul.24',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Sparksoul156@gmail.com',
      action: 'Email Us',
      link: 'mailto:Sparksoul156@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 overflow-hidden"
    >
      {/* Floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-24 right-16 w-24 h-24 bg-amber-200/15 rounded-full blur-xl"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-32 left-20 w-32 h-32 bg-stone-200/20 rounded-full blur-lg"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full border border-amber-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="text-sm font-medium text-amber-800">Get in Touch</span>
          </motion.div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-stone-800 mb-6">
            Let's Connect
            <span className="block text-amber-700 font-medium">With Spark</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Have a question or want to place a custom order? Fill in the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Contact method cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
          {contactMethods.map((method, index) => (
            <motion.a key={method.title} href={method.link}
              target={method.link.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200/50 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200/50">
                  <method.icon className="w-8 h-8 text-amber-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">{method.title}</h3>
                <p className="text-stone-600 mb-4 text-sm font-light">{method.description}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium mx-auto text-amber-700 group-hover:translate-x-1 transition-transform duration-300">
                  <span>{method.action}</span>
                  <Send className="w-4 h-4" strokeWidth={2} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/50 max-w-3xl mx-auto relative overflow-hidden">

          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100/20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-stone-100/30 rounded-full -ml-16 -mb-16 blur-3xl" />

          <div className="relative z-10">
            <h3 className="font-serif text-4xl font-light text-stone-800 mb-2 text-center">
              Custom Orders &
              <span className="block text-amber-700 font-medium">Inquiries</span>
            </h3>
            <p className="text-stone-500 text-sm text-center mb-8 font-light">
              We create handcrafted jewelry, customized hampers, bracelets, and accessories made with love.
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4 py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500" strokeWidth={1.5} />
                  <h4 className="font-serif text-2xl text-stone-800">Message Sent!</h4>
                  <p className="text-stone-500 font-light">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2 rounded-xl border border-stone-300 text-stone-600 hover:bg-stone-50 transition-colors text-sm">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" ref={formRef} onSubmit={handleSubmit}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-6">

                  {/* Full Name */}
                  <Field label="Full Name" required>
                    <input name="fullName" value={form.fullName} onChange={handleChange} required
                      placeholder="Your full name"
                      className={inputCls} />
                  </Field>

                  {/* Email */}
                  <Field label="Email" required>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className={inputCls} />
                  </Field>

                  {/* WhatsApp */}
                  <Field label="WhatsApp Number" required hint="Include country code (e.g. +91…)">
                    <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputCls} />
                  </Field>

                  {/* Address */}
                  <Field label="Address" required>
                    <textarea name="address" value={form.address} onChange={handleChange} required rows={2}
                      placeholder="Your delivery address"
                      className={inputCls + ' resize-none'} />
                  </Field>

                  {/* Interests */}
                  <Field label="What are you interested in?" required>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {INTERESTS.map(item => (
                        <button key={item} type="button" onClick={() => toggleInterest(item)}
                          className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                            form.interests.includes(item)
                              ? 'bg-amber-700 text-white border-amber-700'
                              : 'bg-white text-stone-600 border-stone-300 hover:border-amber-400'
                          }`}>
                          {item}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Description */}
                  <Field label="Describe your order or customization request" hint="Include colors, styles, or personalization details">
                    <textarea name="description" value={form.description} onChange={handleChange} rows={3}
                      placeholder="Tell us what you have in mind…"
                      className={inputCls + ' resize-none'} />
                  </Field>

                  {/* Occasion */}
                  <Field label="Do you want this order for a specific occasion?" hint='e.g. "Birthday, Anniversary, Wedding Gift… or Other"'>
                    <input name="occasion" value={form.occasion} onChange={handleChange}
                      placeholder="Birthday, Anniversary, Wedding Gift…"
                      className={inputCls} />
                  </Field>

                  {/* Delivery Timeframe */}
                  <Field label="Preferred Delivery Timeframe">
                    <div className="flex flex-wrap gap-2 mt-1">
                      {DELIVERY.map(item => (
                        <button key={item} type="button"
                          onClick={() => setForm(prev => ({ ...prev, delivery: item }))}
                          className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                            form.delivery === item
                              ? 'bg-amber-700 text-white border-amber-700'
                              : 'bg-white text-stone-600 border-stone-300 hover:border-amber-400'
                          }`}>
                          {item}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* How did you find us */}
                  <Field label="How did you find us?">
                    <div className="flex flex-wrap gap-2 mt-1">
                      {HOW_FOUND.map(item => (
                        <button key={item} type="button"
                          onClick={() => setForm(prev => ({ ...prev, howFound: item }))}
                          className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                            form.howFound === item
                              ? 'bg-amber-700 text-white border-amber-700'
                              : 'bg-white text-stone-600 border-stone-300 hover:border-amber-400'
                          }`}>
                          {item}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button type="submit" disabled={status === 'sending'}
                    whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 text-white font-medium rounded-xl hover:bg-stone-700 disabled:opacity-60 transition-all duration-300 text-base shadow-lg hover:shadow-xl">
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" strokeWidth={2} />
                      </>
                    )}
                  </motion.button>

                  <div className="flex flex-wrap justify-center gap-8 text-stone-500 text-sm pt-2">
                    <div className="flex items-center gap-2 font-light">
                      <Globe className="w-4 h-4 text-amber-700" strokeWidth={1.5} />
                      <span>Serving worldwide</span>
                    </div>
                    <div className="flex items-center gap-2 font-light">
                      <Clock className="w-4 h-4 text-amber-700" strokeWidth={1.5} />
                      <span>Response within 24 hours</span>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="spotlight-anchor absolute right-8 sm:right-16 lg:right-24 bottom-32 w-1 h-1 pointer-events-none" data-spotlight="contact" />
      </div>
    </section>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const inputCls = 'w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/70 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all duration-200 text-sm';

function Field({ label, required, hint, children }: {
  label: string; required?: boolean; hint?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-1">
        {label}{required && <span className="text-amber-600 ml-0.5">*</span>}
      </label>
      {hint && <p className="text-xs text-stone-400 mb-1.5">{hint}</p>}
      {children}
    </div>
  );
}
