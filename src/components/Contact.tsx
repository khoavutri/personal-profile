import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Twitter,
  Facebook,
} from "lucide-react";
import AnimatedText from "./AnimatedText";
import { toast } from "sonner";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully! I'll get back to you soon.");
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-background"
      style={{ padding: 0 }}
    >
      <div className="content-container">
        <motion.div
          style={{ y }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-subheading animate-on-scroll">Liên Hệ</p>
          <h2 className="section-heading animate-on-scroll">
            <AnimatedText
              text="Kết Nối Với Tôi"
              animationType="highlight"
              highlightClassName="h-[4px] -bottom-0.5 rounded-full"
            />
          </h2>
          <p className="text-muted-foreground mt-4 animate-on-scroll">
            Bạn có dự án hoặc cơ hội hợp tác? Hãy liên hệ với tôi ngay hôm nay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold mb-6">
              Thông Tin Liên Hệ
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:yywm11727@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    yywm11727@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Điện Thoại</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +84 383 657 503
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Địa Chỉ</h4>
                  <p className="text-muted-foreground">
                    Thành phố Hà Nội, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-display font-bold mb-4">
                Mạng Xã Hội
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/khoa.tri.365.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://github.com/khoavutri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    pointerEvents: "none",
                    opacity: 0.5,
                    cursor: "not-allowed",
                  }}
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold mb-6">
              Gửi Tin Nhắn
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Tên của bạn
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Lời nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                  placeholder="Nội dung tin nhắn của bạn..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition-colors duration-300 bg-primary rounded-lg hover:bg-opacity-90 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Đang gửi...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send size={16} className="mr-2" />
                    Gửi tin nhắn
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
