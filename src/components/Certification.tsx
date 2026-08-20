import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent } from "react";
import "./styles/Certification.css";

const base = import.meta.env.BASE_URL;

const certifications = [
  {
    src: `${base}images/aws-cloud.png`,
    pdf: `${base}images/aws-cloud.pdf`,
    alt: "AWS Cloud Practitioner Certification",
    title: "AWS Cloud Practitioner",
  },
  {
    src: `${base}images/aws-Machine.png`,
    pdf: `${base}images/aws-machine.pdf`,
    alt: "AWS Machine Learning Certification",
    title: "AWS Machine Learning Engineer",
  },
];

const CertCard = ({
  src,
  pdf,
  alt,
  title,
  index,
}: {
  src: string;
  pdf: string;
  alt: string;
  title: string;
  index: number;
}) => {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.18), transparent 70%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px * 100);
    mouseY.set(py * 100);
    rotateY.set((px - 0.5) * 16);
    rotateX.set((0.5 - py) * 16);
  };

  const handleMouseLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="cert-card"
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        className="cert-card-inner"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        <motion.div className="cert-spotlight" style={{ backgroundImage: spotlight }} />
        <motion.a
          className="cert-frame"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} certificate PDF`}
          data-cursor="disable"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <img src={src} alt={alt} loading="lazy" />
          <motion.span
            className="cert-tooltip"
            variants={{
              rest: { opacity: 0, y: 8 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Click to open certificate
          </motion.span>
        </motion.a>
        <p className="cert-title">{title}</p>
      </motion.div>
    </motion.div>
  );
};

const Certification = () => {
  return (
    <div className="certification-section section-container" id="certification">
      <div className="certification-container">
        <h3>Certification</h3>
        <div className="certification-flex">
          {certifications.map((cert, i) => (
            <CertCard key={cert.src} {...cert} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
