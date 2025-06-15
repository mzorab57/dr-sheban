import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          {...item.animation} // Spread the animation properties here
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card icon={item.icon} link={item.link}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children, icon, link }) => {
  return (
    <div
      className={cn(
        "rounded-2xl w-full h-32 lg:h-full p-4 overflow-hidden bg-slate-900 border border-transparent group-hover:border-slate-700 relative",
        className
      )}
    >
      <a href={link} className="relative z-50 flex items-center space-x-4">
        {icon && (
          <div className="text-4xl bg-slate-700 rounded-xl">
            <p className="p-4 rounded-xl">{icon}</p>
          </div>
        )}
        <div className="md:p-4">{children}</div>
      </a>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 tracking-wide text-2xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "lg:pt-4 text-zinc-400 tracking-wide lg:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};
