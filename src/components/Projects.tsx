import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AnimatedText from "./AnimatedText";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Nền tảng thương mại điện tử hoàn chỉnh với giỏ hàng, thanh toán và quản lý đơn hàng.",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1074&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với tính năng kéo thả, phân công và thống kê hiệu suất.",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1032&auto=format&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuex", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Financial Dashboard",
      description:
        "Dashboard tài chính với biểu đồ và phân tích dữ liệu thời gian thực.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1015&auto=format&fit=crop",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "Nền tảng mạng xã hội với chat realtime, chia sẻ bài viết và kết nối bạn bè.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Image Generator",
      description:
        "Ứng dụng tạo hình ảnh từ văn bản sử dụng công nghệ AI tiên tiến.",
      image:
        "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1170&auto=format&fit=crop",
      technologies: ["Python", "Flask", "TensorFlow", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Ứng dụng theo dõi sức khỏe và thể dục với đồ thị phân tích và đề xuất cá nhân hóa.",
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1170&auto=format&fit=crop",
      technologies: ["React Native", "Redux", "Firebase", "HealthKit"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-secondary/20"
      style={{ padding: 0 }}
    >
      <div className="content-container" style={{ paddingBottom: 20 }}>
        <motion.div
          style={{ y }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-subheading animate-on-scroll">Dự Án</p>
          <h2 className="section-heading animate-on-scroll">
            <AnimatedText
              text="Các Dự Án Nổi Bật"
              animationType="highlight"
              highlightClassName="h-[4px] -bottom-0.5 rounded-full"
            />
          </h2>
          <p className="text-muted-foreground mt-4 animate-on-scroll">
            Những dự án tiêu biểu tôi đã thực hiện, từ ứng dụng web đến các giải
            pháp phần mềm phức tạp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
