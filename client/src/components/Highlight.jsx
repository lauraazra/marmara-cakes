import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Container from "./Container";

const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const nodeRef = useRef(null);
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => {
    if (to % 1 !== 0) {
      return latest.toFixed(1) + suffix;
    }
    return Math.floor(latest).toLocaleString("id-ID") + suffix;
  });

  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        delay: 0.3,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

export default function Highlight() {
  const boxReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={boxReveal}
        className="highlight-brand grid grid-cols-3 lg:max-w-4xl mx-auto"
      >
        {/* Box 1 */}
        <div className="highlight-box text-center border-r border-marmara-neutral/10">
          <p className="text-2xl font-bold text-marmara-deepTeal md:text-4xl">
            <Counter from={0} to={6} duration={1.5} />
          </p>
          <p className="text-xs uppercase tracking-wider text-marmara-neutral/60 md:text-sm mt-1">
            Branches
          </p>
        </div>

        {/* Box 2 */}
        <div className="highlight-box text-center border-r border-marmara-neutral/10">
          <p className="text-2xl font-bold text-marmara-deepTeal md:text-4xl">
            <Counter from={0} to={10000} duration={2.5} suffix="+" />
          </p>
          <p className="text-xs uppercase tracking-wider text-marmara-neutral/60 md:text-sm mt-1">
            Cakes Sold
          </p>
        </div>

        {/* Box 3 */}
        <div className="highlight-box text-center">
          <p className="text-2xl font-bold text-marmara-deepTeal md:text-4xl">
            <Counter from={0.0} to={4.7} duration={2} suffix="+" />
          </p>
          <p className="text-xs uppercase tracking-wider text-marmara-neutral/60 md:text-sm mt-1">
            Rating
          </p>
        </div>
      </motion.div>
    </Container>
  );
}
