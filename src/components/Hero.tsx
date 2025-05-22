import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ThreeScene from "./ThreeScene";
import AnimatedText from "./AnimatedText";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ padding: 0 }}
    >
      <ThreeScene interactive />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm text-sm font-medium border border-primary/20"
        >
          <span className="text-primary">Lập Trình Viên Chuyên Nghiệp</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-6">
          <AnimatedText text="Xin chào, tôi là" className="block mb-2" />
          <span className="sr-only">Developer</span>
          <AnimatedText
            text="Developer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 inline-block"
            delayOffset={0.5}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6 mb-10 text-balance"
        >
          Chuyên gia phát triển phần mềm với đam mê tạo ra những sản phẩm tuyệt
          vời. Tôi kết hợp thiết kế tinh tế và code chất lượng để xây dựng những
          ứng dụng mang lại giá trị.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition-colors duration-300 bg-primary rounded-lg focus:outline-none hover:bg-opacity-90"
          >
            Xem dự án của tôi
          </motion.a>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary transition-colors duration-300 bg-transparent border border-primary rounded-lg hover:bg-primary/5 focus:outline-none"
          >
            Liên hệ với tôi
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <a
            href="#skills"
            className="flex flex-col items-center text-sm text-muted-foreground"
            aria-label="Scroll to skills section"
          >
            <span className="mb-2">Cuộn xuống</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
