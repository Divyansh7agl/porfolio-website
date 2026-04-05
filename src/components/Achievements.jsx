import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Target, Users, BookOpen, Award, Medal } from 'lucide-react';

const COUNTERS = [
  { icon: <Trophy size={20} />, value: 1, suffix: 'st Runner Up', label: 'E-Yantra 2026', color: '#7c3aed' },
  { icon: <Target size={20} />, value: 150, suffix: '+', label: 'DSA Problems Solved', color: '#3b82f6' },
  { icon: <Award size={20} />, value: 97, suffix: '%', label: 'AI Trainee Score', color: '#10b981' },
  { icon: <Star size={20} />, value: 20, suffix: 'th', label: 'IIT Jodhpur Ideathon', color: '#f472b6' },
];

const ACHIEVEMENTS = [
  {
    year: '2026',
    title: '1st Runner-Up @ E-Yantra Robotics',
    org: 'IIT Bombay',
    desc: 'Secured 1st Runner-Up position in the prestigious national-level robotics competition organized by IIT Bombay.',
    type: 'Competition',
  },
  {
    year: '2025',
    title: '2nd Rank in 24-hour Hackathon',
    org: 'Offline Hackathon',
    desc: 'Achieved 2nd rank for building a scalable real-world solution within a 24-hour intensive development window.',
    type: 'Hackathon',
  },
  {
    year: '2025',
    title: '4th Place in 36-hour AI Hackathon',
    org: 'AI-based Hackathon',
    desc: 'Secured 4th place in a 36-hour specialized AI hackathon focused on Generative AI solutions.',
    type: 'Hackathon',
  },
  {
    year: '2025',
    title: 'Top 20 in Ideathon @ IIT Jodhpur',
    org: 'Prometeo 2025',
    desc: 'Ranked in the top 20 among hundreds of participants in the annual Ideathon at IIT Jodhpur.',
    type: 'Innovation',
  },
  {
    year: 'Sport',
    title: 'National Level Athlete',
    org: 'Chess & Kabaddi',
    desc: 'Represented the university at the national level in both Chess and Kabaddi, showcasing strategic thinking and teamwork.',
    type: 'Sports',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" className="section-padding" style={{ background: 'linear-gradient(to bottom, #050816, #0b1535, #050816)' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            My Milestones
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        {/* Counter Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {COUNTERS.map((counter, i) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card"
              style={{ padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: counter.color }} />
              <div style={{ color: counter.color, display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>{counter.icon}</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>
                <Counter value={counter.value} inView={inView} />
                <span style={{ fontSize: '1rem', color: counter.color, marginLeft: '4px' }}>{counter.suffix}</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 500 }}>{counter.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card"
              style={{ padding: '1.75rem', position: 'relative', borderLeft: i % 2 === 0 ? '4px solid #7c3aed' : '4px solid #3b82f6' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', letterSpacing: '0.1em' }}>{item.year}</span>
                <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>{item.type}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#f1f5f9' }}>{item.title}</h3>
              <p style={{ color: '#a78bfa', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.8rem' }}>{item.org}</p>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, inView }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [value, inView]);

  return <>{count}</>;
}
