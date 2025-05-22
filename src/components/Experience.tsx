import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { CalendarIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year?: string;
  title: string;
  organization?: string;
  description: string;
  type: "work" | "education";
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  organization,
  description,
  type,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "relative pl-10 pb-10 last:pb-0",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-border last:before:h-6",
        "after:absolute after:left-[-5px] after:top-1 after:h-[10px] after:w-[10px] after:rounded-full after:border-2 after:border-primary after:bg-background"
      )}
    >
      <div className="absolute left-[-18px] top-0 p-2 bg-background">
        {type === "work" ? (
          <BriefcaseIcon size={16} className="text-primary" />
        ) : (
          <GraduationCapIcon size={16} className="text-primary" />
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center mb-1 text-sm">
        {year && (
          <div className="flex items-center mr-3 text-muted-foreground">
            <CalendarIcon size={14} className="mr-1" />
            <span className="font-medium">{year}</span>
          </div>
        )}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      {organization && (
        <div className="text-primary font-medium mb-2">{organization}</div>
      )}
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const workExperience = [
    {
      year: "2023 - Hiện tại",
      title: "Full Stack Developer",
      organization: "Khoa Dev.",
      description:
        "Phát triển và duy trì các ứng dụng web phức tạp sử dụng React, TypeScript, GraphQL,  Node.js, Express. Tích hợp hệ thống thanh toán và xác thực người dùng, 3d model, hệ thống call video trực tuyến",
      type: "work" as const,
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      organization: "Digital Innovation Co.",
      description:
        "Phát triển các ứng dụng web sử dụng Node.js, Express và React. Tích hợp hệ thống thanh toán và xác thực người dùng.",
      type: "work" as const,
    },
  ];

  const education = [
    {
      year: "",
      title: "Ngôn ngữ lập trình",
      description: "JavaScript, TypeScript, java, Python, C++, go, rust",
      type: "education" as const,
    },
    {
      year: "",
      title: "Frameworks & Libraries",
      description: "React, Next.js, Node.js, Express, Sping",
      type: "education" as const,
    },
    {
      year: "",
      title: "Công cụ & DevOps",
      description: "Git, Docker, CI/CD, Kubernetes",
      type: "education" as const,
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-background"
      style={{ padding: 0 }}
    >
      <div className="content-container" style={{ paddingBottom: 20 }}>
        <motion.div
          style={{ y }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-subheading animate-on-scroll">Kinh Nghiệm</p>
          <h2 className="section-heading animate-on-scroll">
            <AnimatedText
              text="Quá Trình Làm Việc"
              animationType="highlight"
              highlightClassName="h-[4px] -bottom-0.5 rounded-full"
            />
          </h2>
          <p className="text-muted-foreground mt-4 animate-on-scroll">
            Quá trình học tập và làm việc của tôi trong lĩnh vực phát triển phần
            mềm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xl font-display font-bold mb-8 flex items-center"
            >
              <BriefcaseIcon size={20} className="mr-2 text-primary" />
              Kinh Nghiệm Làm Việc
            </motion.h3>
            <div>
              {workExperience.map((item, index) => (
                <TimelineItem key={index} {...item} index={index} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xl font-display font-bold mb-8 flex items-center"
            >
              <GraduationCapIcon size={20} className="mr-2 text-primary" />
              Kỹ năng
            </motion.h3>
            <div>
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
