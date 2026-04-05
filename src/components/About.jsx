import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Lightbulb, Heart, Coffee, BookOpen, MapPin } from 'lucide-react';

const SKILLS_TAGS = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Flask', 'TailwindCSS', 'MongoDB', 'PostgreSQL', 'MySQL',
  'LLM APIs', 'Prompt Engineering', 'Machine Learning', 'Deep Learning', 'C++',
  'REST APIs', 'AWS', 'Docker', 'Git',
];

const TAG_COLORS = [
  { bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.4)', color: '#a78bfa' },
  { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.4)', color: '#60a5fa' },
  { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.4)', color: '#22d3ee' },
  { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.4)', color: '#34d399' },
  { bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.4)', color: '#fbbf24' },
];

const FACTS = [
  { icon: <GraduationCap size={20} />, title: 'Education', desc: 'B.E. in IT @ MBM Engineering College' },
  { icon: <BookOpen size={20} />, title: 'Current Focus', desc: 'Full-stack & AI-powered apps' },
  { icon: <Lightbulb size={20} />, title: 'AI Enthusiast', desc: 'Specializing in LLMs & Automation' },
  { icon: <Coffee size={20} />, title: 'Night Owl', desc: 'Best code written after midnight' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', background: 'linear-gradient(to bottom, #050816, #080d28, #050816)' }}>
      {/* Subtle orb */}
      <div style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.p variants={fadeUp} style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Who I Am
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Text block */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.div
              variants={fadeUp}
              className="glass-card"
              style={{ padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #7c3aed, #3b82f6, #06b6d4)' }} />
              <p style={{ color: '#cbd5e1', lineHeight: 1.8, marginBottom: '1rem' }}>
                Hey! I'm <strong style={{ color: 'white' }}>Divyansh Agarwal</strong>, a passionate <strong style={{ color: 'white' }}>Computer Science (IT) student</strong> at MBM Engineering College with a deep interest in building impactful tech solutions.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                I specialize in <span style={{ color: '#a78bfa' }}>AI-powered applications</span> using React, Node.js, and Flask. My journey has been driven by a fascination for integrating LLM APIs and real-time feedback systems into scalable web products.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                Whether it's winning at <span style={{ color: '#60a5fa' }}>E-Yantra Robotics</span> or solving complex <span style={{ color: '#22d3ee' }}>150+ DSA problems</span>, I thrive on challenges that push the boundaries of modern development.
              </p>
            </motion.div>

            {/* Fact cards */}
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}
            >
              {FACTS.map((fact) => (
                <motion.div
                  key={fact.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="glass-card"
                  style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
                >
                  <div style={{ color: '#7c3aed' }}>{fact.icon}</div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{fact.title}</p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{fact.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills tags */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.h3 variants={fadeUp} style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#e2e8f0' }}>
              Technologies I work with
            </motion.h3>
            <motion.div
              variants={stagger}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}
            >
              {SKILLS_TAGS.map((tag, i) => {
                const c = TAG_COLORS[i % TAG_COLORS.length];
                return (
                  <motion.span
                    key={tag}
                    variants={fadeUp}
                    whileHover={{ scale: 1.1, y: -3 }}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '99px',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      color: c.color,
                      cursor: 'default',
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 14px ${c.border}`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {tag}
                  </motion.span>
                );
              })}
            </motion.div>

            {/* Download resume button */}
            <motion.div variants={fadeUp} style={{ marginTop: '2rem' }}>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 2rem', borderRadius: '50px',
                  background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                  color: 'white', fontWeight: 600, fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Download Resume
                <span>↓</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
