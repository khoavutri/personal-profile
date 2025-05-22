import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Layout,
  Palette,
  LineChart,
  Globe,
  BrainCircuit,
  FileCode,
  GitBranch,
} from "lucide-react";
import SkillCard from "./SkillCard";
import AnimatedText from "./AnimatedText";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Initialize IntersectionObserver for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skillsData = [
    {
      title: "Lập Trình Front-end",
      description:
        "Thiết kế giao diện người dùng với React, Vue.js và các framework hiện đại khác.",
      level: 10,
      icon: <Code size={20} />,
    },
    {
      title: "Lập Trình Back-end",
      description:
        "Phát triển API và dịch vụ web với Node.js, Express, và các công nghệ server-side.",
      level: 9.75,
      icon: <Server size={20} />,
    },
    {
      title: "Cơ Sở Dữ Liệu",
      description:
        "Thiết kế và quản lý cơ sở dữ liệu với MongoDB, MySQL, PostgreSQL.",
      level: 9.5,
      icon: <Database size={20} />,
    },
    {
      title: "UX/UI Design",
      description:
        "Thiết kế giao diện người dùng với Figma, Adobe XD và các công cụ thiết kế khác.",
      level: 8,
      icon: <Layout size={20} />,
    },
    {
      title: "DevOps",
      description:
        "Triển khai và quản lý ứng dụng với Docker, Kubernetes, CI/CD.",
      level: 7,
      icon: <GitBranch size={20} />,
    },
    {
      title: "Phát Triển Mobile",
      description: "Xây dựng ứng dụng di động với React Native và Flutter.",
      level: 8,
      icon: <Globe size={20} />,
    },
    {
      title: "Phân Tích Dữ Liệu",
      description:
        "Phân tích và trực quan hóa dữ liệu với Python, R và các thư viện chuyên dụng.",
      level: 6.5,
      icon: <LineChart size={20} />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Phát triển các mô hình học máy và ứng dụng AI với TensorFlow và PyTorch.",
      level: 6,
      icon: <BrainCircuit size={20} />,
    },
    {
      title: "Web3 & Blockchain",
      description:
        "Phát triển ứng dụng phi tập trung và smart contracts với Solidity và Web3.js.",
      level: 5.5,
      icon: <FileCode size={20} />,
    },
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ padding: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />

      <div
        className="content-container relative z-10"
        style={{ paddingBottom: 20 }}
      >
        <motion.div
          style={{ y }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-subheading animate-on-scroll">Chuyên Môn</p>
          <h2 className="section-heading animate-on-scroll">
            <AnimatedText
              text="Kỹ Năng & Công Nghệ"
              animationType="highlight"
              highlightClassName="h-[4px] -bottom-0.5 rounded-full"
            />
          </h2>
          <p className="text-muted-foreground mt-4 animate-on-scroll">
            Một số kỹ năng và công nghệ tôi đã tích lũy và phát triển trong quá
            trình làm việc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              level={skill.level}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
