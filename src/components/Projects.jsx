import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const CLUTCH_AI_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80';

const PROJECTS = [
  {
    id: 1,
    title: 'Clutch AI | Interview Simulator',
    desc: 'A high-pressure interview simulator with dynamic difficulty scaling, voice-based AI interviews, and a structured feedback engine.',
    image: CLUTCH_AI_IMAGE,
    tags: ['React', 'TypeScript', 'Groq API', 'Web Speech API'],
    tagColors: ['#60a5fa', '#3178c6', '#a78bfa', '#22d3ee'],
    github: 'https://github.com/Divyansh7agl',
    live: '#',
    stars: 45,
    featured: true,
    accent: '#7c3aed',
  },
  {
    id: 2,
    title: 'LinkedIn Labs | Profile Optimizer',
    desc: 'AI-powered profile analysis tool that provides personalized content optimization suggestions and improves profile visibility using NLP scoring.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    tags: ['Next.js', 'TypeScript', 'REST APIs', 'NLP'],
    tagColors: ['#60a5fa', '#3178c6', '#a78bfa', '#f472b6'],
    github: 'https://github.com/Divyansh7agl',
    live: '#',
    stars: 32,
    featured: true,
    accent: '#3b82f6',
  },
  {
    id: 3,
    title: 'Ratify | Multi-Cloud Resource',
    desc: 'Dedicated multi-cloud monitoring dashboard integrating AWS and Azure services to identify cost inefficiencies and optimization opportunities.',
    image: CLUTCH_AI_IMAGE,
    tags: ['AWS', 'Azure', 'FastAPI', 'Firebase'],
    tagColors: ['#fbbf24', '#3b82f6', '#10b981', '#f97316'],
    github: 'https://github.com/Divyansh7agl',
    live: '#',
    stars: 28,
    featured: true,
    accent: '#10b981',
  },
];

const FILTERS = ['All', 'AI/ML', 'Cloud', 'Web App'];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' } }),
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'AI/ML') return p.tags.some(t => ['Groq API', 'NLP'].includes(t));
    if (filter === 'Cloud') return p.tags.some(t => ['AWS', 'Azure', 'Firebase'].includes(t));
    if (filter === 'Web App') return p.tags.some(t => ['React', 'Next.js', 'FastAPI'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="section-padding" style={{ background: 'linear-gradient(to bottom, #050816, #07102a, #050816)' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            My Work
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            A collection of AI-powered applications and scalable web platforms built with modern technology.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.45rem 1.25rem', borderRadius: '99px', border: 'none', cursor: 'pointer',
                fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s',
                background: filter === f ? 'linear-gradient(135deg, #7c3aed, #3b82f6)' : 'rgba(255,255,255,0.06)',
                color: filter === f ? 'white' : '#94a3b8',
                boxShadow: filter === f ? '0 0 20px rgba(124,58,237,0.35)' : 'none',
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      layout
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="project-card glass-card"
      style={{ overflow: 'hidden', position: 'relative', cursor: 'default' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <motion.img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Overlay gradient */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 30%, rgba(5,8,22,0.9) 100%)` }} />

        {/* Accent glow */}
        <motion.div
          style={{ position: 'absolute', inset: 0, background: `${project.accent}15`, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>{project.title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24', fontSize: '0.8rem' }}>
            <Star size={12} fill="#fbbf24" />
            {project.stars}
          </div>
        </div>

        <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1rem' }}>{project.desc}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              style={{
                padding: '0.2rem 0.6rem', borderRadius: '99px',
                fontSize: '0.72rem', fontWeight: 500,
                background: `${project.tagColors[i] || '#60a5fa'}15`,
                border: `1px solid ${project.tagColors[i] || '#60a5fa'}40`,
                color: project.tagColors[i] || '#60a5fa',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.45rem 1rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600,
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#e2e8f0', textDecoration: 'none', flex: 1, justifyContent: 'center',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
          >
            <GithubIcon size={14} /> Code
          </motion.a>
          <motion.a
            href={project.live}
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.45rem 1rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600,
              background: `linear-gradient(135deg, ${project.accent}cc, #3b82f680)`,
              border: `1px solid ${project.accent}50`,
              color: 'white', textDecoration: 'none', flex: 1, justifyContent: 'center',
            }}
          >
             Live Link
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
