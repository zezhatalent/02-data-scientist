import { motion } from 'framer-motion';
import Reveal from './lib/Reveal';
import { useInView } from './hooks/useMotion';
import { useTheme } from './components/ThemeProvider';

const bars = [42, 58, 50, 66, 74, 90, 82];

export default function ChartSection() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="charts" className="py-24" style={{ background: theme.surface }}>
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold" style={{ color: theme.text }}>
            Data that comes alive
          </h2>
        </Reveal>
        <div
          ref={ref}
          className="mt-10 flex h-56 items-end justify-center gap-3 rounded-2xl border p-6"
          style={{ borderColor: theme.border, background: theme.bg }}
        >
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="w-10 rounded-t-lg"
              initial={{ height: 0 }}
              animate={inView ? { height: `${h}%` } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
              style={{
                background: `linear-gradient(180deg, ${theme.accent}, ${theme.accent2})`,
                borderRadius: 6,
              }}
            />
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-xs" style={{ color: theme.muted }}>
          Bars grow from zero as you scroll — just like every insight starts from raw data.
        </p>
      </div>
    </section>
  );
}
