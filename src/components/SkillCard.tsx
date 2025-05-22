
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  level: number;
  icon: React.ReactNode;
  className?: string;
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  level,
  icon,
  className,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "glass-panel p-6 h-full flex flex-col",
        className
      )}
    >
      <div className="flex items-center mb-3">
        <div className="mr-3 text-primary p-2 rounded-lg bg-primary/10">
          {icon}
        </div>
        <h3 className="text-lg font-display font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="mt-auto">
        <div className="flex justify-between text-xs mb-1">
          <span>Trình độ</span>
          <span>{level * 10}%</span>
        </div>
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level * 10}%` }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
