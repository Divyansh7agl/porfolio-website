import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'Software Development Engineer (SDE) Intern',
    company: 'Skillonation',
    period: 'September 2025 – November 2025',
    location: 'Remote',
    description: [
      'Contributed to end-to-end development of web applications across frontend and backend systems.',
      'Integrated AI-driven features using LLM APIs to enhance automation and platform efficiency.',
      'Implemented authentication and deployment workflows to support scalable application usage.',
    ],
    color: '#7c3aed',
  },
  {
    title: 'Artificial Intelligence Trainee',
    company: 'iStart Rajasthan (RKCL)',
    period: 'June 2025 – July 2025',
    location: 'Rajasthan, India',
    description: [
      'Completed intensive on-site training covering supervised learning, model evaluation, and real-world AI applications.',
      'Achieved 97% score in the final evaluation assessment out of the training cohort.',
    ],
    color: '#3b82f6',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section-padding" style={{ background: 'linear-gradient(to bottom, #050816, #0a1128, #050816)', position: 'relative' }}>
      <div style={{ position: 'absolute', right: '-150px', top: '20%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            My Career Path
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '8px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #7c3aed, #3b82f6, transparent)',
              transformOrigin: 'top',
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              style={{ marginBottom: '3rem', position: 'relative' }}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                style={{
                  position: 'absolute',
                  left: '-1.85rem',
                  top: '0.5rem',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 15px ${exp.color}`,
                  border: '3px solid #050816',
                  zIndex: 2,
                }}
              />

              <div className="glass-card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>{exp.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: exp.color, fontWeight: 600, fontSize: '0.95rem' }}>
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.85rem', justifyContent: 'flex-end' }}>
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.description.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} style={{ color: exp.color, marginTop: '0.2rem', flexShrink: 0 }} />
                      <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
