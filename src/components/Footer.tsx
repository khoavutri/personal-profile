import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold mb-4">Developer</h3>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Tạo ra những giải pháp phần mềm sáng tạo và chất lượng cao cho các
              doanh nghiệp và cá nhân.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h3 className="text-lg font-display font-bold mb-4">Liên Kết</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" className="hover:underline">
                Trang chủ
              </a>
              <a href="#skills" className="hover:underline">
                Kỹ năng
              </a>
              <a href="#experience" className="hover:underline">
                Kinh nghiệm
              </a>
              <a href="#projects" className="hover:underline">
                Dự án
              </a>
              <a href="#contact" className="hover:underline">
                Liên hệ
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h3 className="text-lg font-display font-bold mb-4">Liên Hệ</h3>
            <div className="space-y-2 text-sm">
              <p>yywm11727@gmail.com</p>
              <p>+84 383 657 503</p>
              <p>Thành phố Hà Nội, Việt Nam</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80"
        >
          <p className="flex items-center justify-center">
            <span>© {currentYear} Developer. All rights reserved.</span>
            <span className="mx-1">|</span>
            <span className="inline-flex items-center">
              Made By <Heart size={14} className="mx-1 text-red-400" /> Khoa Dev
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
