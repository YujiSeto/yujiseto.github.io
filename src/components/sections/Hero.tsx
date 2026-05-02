"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();

  const getCvPath = () => {
    switch (locale) {
      case 'en': return '/cv/Rodrigo_Yuji_Seto_Soma_CV.pdf';
      case 'pt': return '/cv/Rodrigo_Yuji_Seto_Soma_Curriculo.pdf';
      case 'jp': return '/cv/履歴書セトソウマロドリゴユウジ.pdf';
      default: return '/cv/Rodrigo_Yuji_Seto_Soma_CV.pdf';
    }
  };

  const cvPath = getCvPath();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-500/3 dark:bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-purple-500/2 dark:bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center px-4 max-w-4xl mx-auto"
      >
        <motion.p variants={item} className="text-accent font-bold tracking-widest mb-2 uppercase text-sm sm:text-base">
          {t("greeting")}
        </motion.p>
        
        <motion.h1 
          variants={item} 
          className="text-5xl sm:text-7xl md:text-8xl font-black text-foreground mb-4 tracking-tighter leading-[0.9]"
        >
          {t("titlePart1")}<br />{t("titlePart2")}
        </motion.h1>

        {locale === 'jp' && (
          <motion.p 
            variants={item} 
            className="text-blue-600 dark:text-blue-400 font-bold tracking-widest mb-6 text-sm sm:text-base"
          >
            と申します。
          </motion.p>
        )}
        
        <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-8 max-w-2xl mx-auto">
          {t("subtitle")}
        </motion.h2>

        <motion.p variants={item} className="text-base sm:text-lg text-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          {t("valueProposition")}
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:shadow-xl transition-all group"
          >
            {t("viewProjects")}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={cvPath}
            download
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border-2 border-foreground/10 hover:border-foreground text-foreground rounded-full font-bold text-lg transition-all group"
          >
            <Download className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            {t("downloadCV")}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Hidden on mobile to avoid overlap */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};
