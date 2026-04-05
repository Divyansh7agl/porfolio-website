import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Globe, Database, Cpu, Search, Layout } from 'lucide-react';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    icon: <Code2 size={24} />,
    color: '#7c3aed',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'C++', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    icon: <Layout size={24} />,
    color: '#3b82f6',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    icon: <Database size={24} />,
    color: '#10b981',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Express', level: 80 },
    ],
  },
  {
    category: 'AI & Data',
    icon: <Cpu size={24} />,
    color: '#06b6d4',
    skills: [
      { name: 'Generative AI', level: 85 },
      { name: 'LLM APIs', level: 90 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'MongoDB/SQL', level: 80 },
    ],
  },
  {
    category: 'Core Concepts',
    icon: <Search size={24} />,
    color: '#f472b6',
    skills: [
      { name: 'DSA', level: 85 },
      { name: 'OOP', level: 90 },
      { name: 'System Design', level: 70 },
      { name: 'Git/GitHub', level: 90 },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section-padding" style={{ background: 'linear-gradient(to bottom, #050816, #090e24, #050816)' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#7042f88b', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            My Expertise
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
              className="glass-card"
              style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: group.color }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ color: group.color }}>{group.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{group.category}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {group.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>
                      <span style={{ color: '#e2e8f0' }}>{skill.name}</span>
                      <span style={{ color: '#94a3b8' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '6px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: groupIdx * 0.1 + skillIdx * 0.1, duration: 1, ease: 'easeOut' }}
                        style={{ height: '100%', background: group.color, borderRadius: '10px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
