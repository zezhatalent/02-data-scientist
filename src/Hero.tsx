import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useCountUp, useInView } from './hooks/useMotion';

function DataFlowSVG() {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>('.flow');
    paths.forEach((p, i) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      p.style.animation = `dash ${4 + i * 0.7}s linear ${i * 0.6}s forwards`;
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg ref={svgRef} className="h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="stream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0d9488" stopOpacity="0.5" />
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0.5" />
          </linearGradient>
          <style>{`@keyframes dash{to{stroke-dashoffset:0}}`}</style>
        </defs>
        {[
          'M-40,200 C200,80 400,340 840,180',
          'M-40,320 C220,200 460,420 840,280',
          'M-40,420 C260,340 520,200 840,380',
          'M-20,520 C260,460 540,600 840,480',
        ].map((d, i) => (
          <path key={i} className="flow" d={d} fill="none" stroke="url(#stream)" strokeWidth="2" />
        ))}
      </svg>
      <motion.div className="absolute h-2 w-2 rounded-full" style={{ background: theme.accent, top: '30%', left: '20%' }}
        animate={{ y: [0, -20, 0], x: [0, 30, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute h-2.5 w-2.5 rounded-full" style={{ background: theme.accent2, top: '60%', left: '60%' }}
        animate={{ y: [0, -30, 0], x: [0, -25, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
      <motion.div className="absolute h-1.5 w-1.5 rounded-full" style={{ background: theme.accent, top: '45%', left: '80%' }}
        animate={{ y: [0, 20, 0], x: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
    </div>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>();
  const n = useCountUp(value, inView, 1800);
  return (
    <div ref={ref} className="text-center">
      <span className="font-mono text-3xl font-extrabold md:text-4xl" style={{ color: theme.accent2 }}>
        {n}{suffix}
      </span>
      <p className="mt-1 text-sm font-medium" style={{ color: theme.muted }}>{label}</p>
    </div>
  );
}

function FloatingData({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  const { theme } = useTheme();
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [0, -25, 0], opacity: [0.1, 0.35, 0.1] }}
      transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke={theme.accent} strokeWidth="0.5" opacity="0.3" />
        <circle cx="12" cy="12" r="2" fill={theme.accent} opacity="0.2" />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, 1], [-12, 12]);
  const bgY = useTransform(mouseY, [0, 1], [-12, 12]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: bgX, y: bgY }}>
        <DataFlowSVG />
      </motion.div>

      <FloatingData delay={0} x="8%" y="20%" size={35} />
      <FloatingData delay={2} x="88%" y="35%" size={28} />
      <FloatingData delay={1} x="70%" y="75%" size={32} />
      <FloatingData delay={3} x="20%" y="85%" size={24} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm"
            style={{ color: theme.accent }}
          >
            👋 Hi, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-3 text-xl font-semibold"
            style={{
              color: theme.text,
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a href="#projects" className="rounded-lg px-6 py-3 font-semibold" style={{ background: theme.accent, color: '#fff' }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}66` }} whileTap={{ scale: 0.95 }}>
              View case studies
            </motion.a>
            <motion.a href="#contact" className="rounded-lg border-2 px-6 py-3 font-semibold" style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05, backgroundColor: `${theme.accent}15` }} whileTap={{ scale: 0.95 }}>
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-3 rounded-xl" style={{ background: `linear-gradient(120deg, ${theme.accent}, ${theme.accent2})`, opacity: 0.2, filter: 'blur(20px)' }} />
          <img src={content.photo} alt={content.name} className="relative rounded-xl border-2 object-cover" style={{ borderColor: `${theme.accent}66`, width: 280, height: 280 }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 pb-12 md:grid-cols-4"
      >
        {content.stats?.map((s) => (
          <Stat key={s.label} value={s.value} suffix={s.suffix ?? ''} label={s.label} />
        ))}
      </motion.div>
    </section>
  );
}
