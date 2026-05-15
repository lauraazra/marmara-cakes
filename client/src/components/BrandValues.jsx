import { Sparkles, Award, Tag, Bike } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const iconMap = {
  Sparkles: Sparkles,
  Award: Award,
  Tag: Tag,
  Bike: Bike,
};

export default function BrandValues({ data, loading }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  if (loading)
    return (
      <Container>
        <p className="text-center py-10">Loading brand value...</p>
      </Container>
    );

  if (!data || !Array.isArray(data)) return null;

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2"
      >
        {data.map((value, index) => {
          const Icon = iconMap[value.icon] || Sparkles;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative group p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-50 overflow-hidden will-change-transform"
            >
              <div
                className={`absolute -bottom-10 -right-10 size-32 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${value.bgColor}`}
              ></div>

              <div className="relative z-10 space-y-5">
                <div
                  className={`inline-flex p-4 rounded-2xl ${value.bgColor} ${value.color}`}
                >
                  <Icon className="size-8" strokeWidth={2} />
                </div>

                <h4 className="text-2xl font-bold text-marmara-deepTeal leading-snug">
                  {value.title}
                </h4>

                <p className="text-gray-600 text-base leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
