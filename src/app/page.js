'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Heart,
  Globe,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  Loader2,
  BookOpen,
  ShieldCheck,
  Handshake,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Users,
  Scale,
  MapPin,
  Quote,
  Menu,
  X,
} from 'lucide-react';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const NAV_LINKS = ['About', 'Mission', 'Impact', 'Contact'];

const PILLARS = [
  {
    icon: BookOpen,
    title: 'Education & Skilling',
    desc: 'Bridging the gender gap through literacy programs, vocational training, and digital empowerment workshops that translate directly into livelihoods.',
  },
  {
    icon: ShieldCheck,
    title: 'Advocacy & Rights',
    desc: 'Standing at the intersection of law and justice — fighting for equal rights and amplifying the voices that systemic inequality has silenced.',
  },
  {
    icon: Handshake,
    title: 'Community Support',
    desc: 'Building resilient networks of women who mentor, connect, and lift each other through lived experience and shared solidarity.',
  },
  {
    icon: Sparkles,
    title: 'Leadership Development',
    desc: 'Cultivating the next generation of fierce women leaders across politics, business, science, and art — without apology.',
  },
];

const STATS = [
  { value: '5,000+', label: 'Women Reached', icon: Users },
  { value: '12',     label: 'Active Programs', icon: Sparkles },
  { value: '3',      label: 'States Covered', icon: MapPin },
  { value: '100%',   label: 'Volunteer-Led', icon: Heart },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA] transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_0_0_#111111]' : 'border-b-2 border-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="/she-YlenJon1O7ieeEoa.avif"
              alt="She Can Foundation Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-none">
            <span className="font-syne font-extrabold text-[15px] text-[#111111] tracking-tight block">
              She Can
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-600 block">
              Foundation
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm font-semibold text-[#111111] hover:text-rose-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="btn-solid inline-flex items-center gap-2 px-5 py-2.5 bg-[#E11D48] text-white font-bold text-sm rounded-none border-2 border-[#111111]"
          >
            Join Our Team <ChevronRight size={15} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 border-2 border-[#111111] rounded-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-t-2 border-[#111111] px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold text-[#111111] py-1"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E11D48] text-white font-bold text-sm border-2 border-[#111111] w-fit"
          >
            Join Our Team <ChevronRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-[#FAFAFA] grid lg:grid-cols-2">
      {/* Left column — headline */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 py-20 border-b-2 border-[#111111] lg:border-b-0 lg:border-r-2">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-[#111111] bg-white w-fit mb-8">
          <Globe size={14} strokeWidth={2.5} className="text-rose-600" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#111111]">
            Global Vision · Local Action
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif font-black text-[#111111] leading-[1.02] mb-6">
          <span className="block text-5xl sm:text-6xl xl:text-7xl">Empowering</span>
          <span className="block text-5xl sm:text-6xl xl:text-7xl">Women to</span>
          <span className="block text-5xl sm:text-6xl xl:text-7xl fire-text">
            Shape the Future
          </span>
        </h1>

        <p className="text-stone-600 text-lg leading-relaxed max-w-lg mb-10 font-medium">
          We believe every woman carries the power to transform her community.
          Through education, advocacy, and unwavering solidarity, we turn that
          power into unstoppable, measurable change.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#mission"
            className="btn-solid inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] text-white font-bold border-2 border-[#111111] text-sm"
          >
            Explore Our Mission <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href="#contact"
            className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#111111] font-bold border-2 border-[#111111] text-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Legal strip */}
        <div className="flex items-center gap-3 mt-12 pt-8 border-t-2 border-[#111111]">
          <Scale size={18} strokeWidth={2.5} className="text-rose-600 shrink-0" />
          <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
            Registered under the <span className="text-[#111111]">Indian Society Act, 1860</span>
          </p>
        </div>
      </div>

      {/* Right column — Quote manifesto */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:pr-16 xl:pr-24 py-20 bg-[#0F0F1A]">
        {/* Quote icon */}
        <Quote
          size={56}
          strokeWidth={1.5}
          className="text-rose-600 mb-6"
          aria-hidden="true"
        />

        <blockquote className="mb-10">
          <p className="font-serif font-bold text-white text-2xl sm:text-3xl leading-snug">
            "When we empower a woman, we don't just change her life — we uplift
            an entire community. Our vision is global, but our impact begins
            right here, at home."
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-5">
          <div className="relative flex-shrink-0">
            {/* Offset shadow block */}
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-rose-600 rounded-none" />
            <div className="relative w-16 h-16 bg-[#111111] border-2 border-white flex items-center justify-center">
              <span className="font-syne font-extrabold text-white text-xl tracking-tighter">
                RM
              </span>
            </div>
          </div>
          <div>
            <p className="font-syne font-extrabold text-white text-lg">Reeta Mishra</p>
            <p className="text-rose-400 font-bold text-sm uppercase tracking-wider">
              Founder & President
            </p>
            <p className="text-stone-500 text-xs mt-0.5 font-medium">She Can Foundation</p>
          </div>
        </div>

        {/* Divider block */}
        <div className="mt-12 pt-8 border-t-2 border-stone-800 grid grid-cols-2 gap-4">
          <div className="bg-stone-900 border border-stone-800 p-4">
            <p className="font-syne font-extrabold text-white text-3xl">5K+</p>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">
              Women Empowered
            </p>
          </div>
          <div className="bg-rose-600 border border-rose-500 p-4">
            <p className="font-syne font-extrabold text-white text-3xl">1860</p>
            <p className="text-rose-100 text-xs font-bold uppercase tracking-widest mt-1">
              Registered Under Society Act
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MISSION / PILLARS ────────────────────────────────────────────────────────

function Mission() {
  return (
    <section id="mission" className="py-28 bg-[#FAFAFA] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b-2 border-[#111111]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-600 mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif font-black text-[#111111] text-4xl md:text-5xl leading-tight">
              Four Pillars of{' '}
              <span className="headline-underline">Unbreakable</span>{' '}
              Impact
            </h2>
          </div>
          <p className="text-stone-500 text-base leading-relaxed max-w-sm font-medium">
            Every initiative we run anchors in one of these pillars — creating
            systemic, measurable, permanent change.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#111111]">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`pillar-card group p-7 bg-white cursor-default ${
                i < 3 ? 'border-r-2 border-[#E5E7EB]' : ''
              }`}
            >
              <div
                className="pillar-icon-wrap w-12 h-12 bg-stone-100 flex items-center justify-center mb-6 text-rose-600 border border-stone-200 transition-colors duration-200"
              >
                <Icon size={22} strokeWidth={2.5} />
              </div>
              <h3 className="pillar-title font-syne font-extrabold text-[#111111] text-base mb-3 transition-colors duration-200">
                {title}
              </h3>
              <p className="pillar-desc text-stone-500 text-sm leading-relaxed transition-colors duration-200">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Legal seal */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 p-6 border-2 border-[#111111] bg-white">
          <div className="flex-shrink-0 w-16 h-16 bg-[#111111] flex items-center justify-center">
            <Scale size={28} className="text-white" strokeWidth={2} />
          </div>
          <div>
            <p className="font-syne font-extrabold text-[#111111] text-base">
              Certified · Accountable · Transparent
            </p>
            <p className="text-stone-500 text-sm mt-1 leading-relaxed font-medium">
              She Can Foundation is officially registered under the{' '}
              <strong className="text-[#111111]">Indian Society Act, 1860</strong>.
              Every rupee raised is accounted for. Every life transformed is
              celebrated.
            </p>
          </div>
          <div className="sm:ml-auto flex-shrink-0 px-5 py-2 bg-rose-600 border-2 border-[#111111]">
            <p className="text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap">
              Act of 1860
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── IMPACT / ABOUT ───────────────────────────────────────────────────────────

function Impact() {
  return (
    <section id="impact" className="py-28 bg-[#0F0F1A] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 pb-8 border-b-2 border-stone-800">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-500 mb-3">
            By The Numbers
          </p>
          <h2 className="font-serif font-black text-white text-4xl md:text-5xl leading-tight">
            The Impact is{' '}
            <span className="fire-text">Undeniable</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="stat-card bg-stone-900 border-2 border-stone-700 p-6 sm:p-8 cursor-default"
            >
              <Icon size={20} strokeWidth={2.5} className="text-rose-500 mb-4" />
              <p className="font-syne font-extrabold text-white text-4xl sm:text-5xl leading-none mb-2">
                {value}
              </p>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* About strip */}
        <div id="about" className="grid lg:grid-cols-2 gap-0 border-2 border-stone-700">
          {/* Text */}
          <div className="p-10 bg-stone-900 border-b-2 lg:border-b-0 lg:border-r-2 border-stone-700">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-500 mb-4">
              Our Story
            </p>
            <h3 className="font-serif font-black text-white text-3xl leading-tight mb-5">
              Built on Belief. Driven by Purpose.
            </h3>
            <p className="text-stone-400 text-base leading-relaxed mb-4 font-medium">
              She Can Foundation was born from a single, radical belief: that
              when you invest in a woman, you invest in an entire community.
              Founded by{' '}
              <strong className="text-white">Reeta Mishra</strong>, we operate
              at the intersection of grassroots action and systemic change.
            </p>
            <p className="text-stone-400 text-base leading-relaxed font-medium">
              We are registered under the{' '}
              <strong className="text-white">Indian Society Act, 1860</strong> —
              reflecting our commitment to transparent governance, democratic
              operations, and long-term sustainability.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                'Transparent financial reporting & governance',
                'Volunteer-led, community-first approach',
                'Intersectional — serving women across all strata',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    strokeWidth={2.5}
                    className="text-rose-500 shrink-0 mt-0.5"
                  />
                  <span className="text-stone-300 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual checkerboard */}
          <div className="grid grid-cols-2">
            {[
              { label: 'Est.', value: '2020', bg: 'bg-rose-600', text: 'text-white' },
              { label: 'Programs', value: '12+', bg: 'bg-stone-800', text: 'text-white' },
              { label: 'Districts', value: '8', bg: 'bg-[#111111]', text: 'text-white' },
              { label: 'Volunteers', value: '200+', bg: 'bg-rose-900', text: 'text-white' },
            ].map(({ label, value, bg, text }) => (
              <div
                key={label}
                className={`${bg} ${text} flex flex-col items-center justify-center p-8 border border-stone-700 stat-card`}
              >
                <p className="font-syne font-extrabold text-4xl sm:text-5xl leading-none mb-2">
                  {value}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        const d = await res.json();
        setErrors({ submit: d.error || 'Something went wrong.' });
      }
    } catch {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#FAFAFA] border-t-2 border-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 pb-8 border-b-2 border-[#111111]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-600 mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif font-black text-[#111111] text-4xl md:text-5xl leading-tight">
            Let's Start a{' '}
            <span className="headline-underline">Conversation</span>
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-5 border-2 border-[#111111]">
          {/* Left — contact info */}
          <div className="lg:col-span-2 bg-[#0F0F1A] p-8 sm:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-[#111111] flex flex-col justify-between">
            <div>
              <h3 className="font-syne font-extrabold text-white text-2xl mb-2">
                Direct Contact
              </h3>
              <p className="text-stone-400 text-sm mb-10 leading-relaxed font-medium">
                Reach out directly. We respond within 24 hours to every message
                we receive.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:president@shecanfoundation.org"
                  className="group flex items-center gap-4 p-4 border border-stone-700 bg-stone-900 hover:border-rose-600 hover:bg-stone-800 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-rose-600 flex items-center justify-center shrink-0">
                    <Mail size={18} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <p className="text-white text-sm font-semibold truncate">
                      president@shecanfoundation.org
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918283841830"
                  className="group flex items-center gap-4 p-4 border border-stone-700 bg-stone-900 hover:border-rose-600 hover:bg-stone-800 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-rose-600 flex items-center justify-center shrink-0">
                    <Phone size={18} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                      Phone
                    </p>
                    <p className="text-white text-sm font-semibold">
                      +91-8283841830
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-800">
              <p className="text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-3">
                Registered Organization
              </p>
              <div className="flex items-center gap-3">
                <Scale size={16} strokeWidth={2.5} className="text-rose-500 shrink-0" />
                <p className="text-stone-400 text-xs font-medium leading-relaxed">
                  Indian Society Act, 1860
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-white p-8 sm:p-10">
            {success ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center animate-fade-up">
                <div className="animate-scale-in w-24 h-24 bg-[#111111] flex items-center justify-center mb-6 border-2 border-[#111111]">
                  <CheckCircle size={48} strokeWidth={2.5} className="text-rose-500" />
                </div>
                <h3 className="font-serif font-black text-[#111111] text-3xl mb-3">
                  Message Received!
                </h3>
                <p className="text-stone-500 mb-8 max-w-xs leading-relaxed font-medium">
                  Thank you for reaching out. Our team will respond within 24
                  hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-ghost px-6 py-3 font-bold text-sm border-2 border-[#111111] bg-white text-[#111111] hover:bg-stone-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                <h3 className="font-syne font-extrabold text-[#111111] text-2xl mb-2">
                  Send a Message
                </h3>

                {errors.submit && (
                  <div className="flex items-center gap-3 p-4 border-l-4 border-rose-600 bg-rose-50 text-rose-700 text-sm font-semibold">
                    {errors.submit}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Jane Doe"
                      className={`input-solid w-full px-4 py-3 text-[#111111] placeholder-stone-300 text-sm font-medium rounded-none ${errors.name ? 'err' : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-600 font-bold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="jane@example.com"
                      className={`input-solid w-full px-4 py-3 text-[#111111] placeholder-stone-300 text-sm font-medium rounded-none ${errors.email ? 'err' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-600 font-bold">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us how you'd like to get involved or any questions you have…"
                    className={`input-solid w-full px-4 py-3 text-[#111111] placeholder-stone-300 text-sm font-medium resize-none rounded-none ${errors.message ? 'err' : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-600 font-bold">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-solid mt-2 flex items-center justify-center gap-2.5 py-4 px-6 bg-[#E11D48] text-white font-bold border-2 border-[#111111] text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} strokeWidth={2.5} /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={16} strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0F0F1A] border-t-2 border-[#111111]">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10 border-b border-stone-800">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/she-YlenJon1O7ieeEoa.avif"
                alt="She Can Foundation Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-syne font-extrabold text-white text-sm">
                She Can Foundation
              </p>
              <p className="text-rose-500 text-[10px] font-bold uppercase tracking-widest">
                Est. under Society Act, 1860
              </p>
            </div>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-medium">
            Empowering women through local action with a global vision. Building
            a world where no woman is left behind.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-600 mb-5">
            Quick Links
          </p>
          <div className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-stone-400 hover:text-rose-500 text-sm font-semibold transition-colors w-fit"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-600 mb-5">
            Reach Us
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:president@shecanfoundation.org"
              className="flex items-center gap-2.5 text-stone-400 hover:text-rose-500 text-sm font-semibold transition-colors"
            >
              <Mail size={14} strokeWidth={2.5} className="text-rose-600 shrink-0" />
              president@shecanfoundation.org
            </a>
            <a
              href="tel:+918283841830"
              className="flex items-center gap-2.5 text-stone-400 hover:text-rose-500 text-sm font-semibold transition-colors"
            >
              <Phone size={14} strokeWidth={2.5} className="text-rose-600 shrink-0" />
              +91-8283841830
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar — credit line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-stone-700 text-xs font-bold">
          © {new Date().getFullYear()} She Can Foundation. All rights reserved.
        </p>

        <a
          href="https://github.com/Dhiptanshu"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 text-stone-600 hover:text-rose-500 transition-colors duration-200 text-xs font-bold"
        >
          Made with{' '}
          <Heart
            size={12}
            strokeWidth={2.5}
            className="text-rose-600 fill-rose-600 group-hover:scale-125 transition-transform"
          />{' '}
          by{' '}
          <span className="text-stone-300 group-hover:text-rose-400 underline underline-offset-2 decoration-stone-700 transition-colors">
            Dhiptanshu Malik
          </span>
          <ExternalLink size={11} className="group-hover:text-rose-400 transition-colors" />
        </a>
      </div>
    </footer>
  );
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Impact />
      <ContactSection />
      <Footer />
    </>
  );
}
