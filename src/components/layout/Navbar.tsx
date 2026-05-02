"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "@/i18n/routing";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("skills"), href: "#skills" },
  ];

  if (!mounted) return null;

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 font-black text-2xl tracking-tighter">
            <a href="#" className="text-foreground hover:text-accent transition-colors">yujiseto</a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-foreground/70 hover:text-accent font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Theme & i18n */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Switcher */}
            <div 
              className="relative"
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 p-2 rounded-lg hover:bg-secondary text-foreground/80 hover:text-foreground transition-all"
                onClick={() => setIsLangOpen(!isLangOpen)}
                onMouseEnter={() => setIsLangOpen(true)}
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase text-sm font-bold hidden sm:inline">{locale}</span>
              </button>
              <div className={`absolute right-0 top-full pt-2 w-40 bg-card rounded-xl shadow-2xl transition-all transform border border-border py-2 z-50 ${isLangOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
                {['en', 'jp', 'pt'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLanguage(lang);
                      setIsLangOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-all uppercase font-bold ${locale === lang ? 'bg-accent/10 text-accent' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                  >
                    {lang === 'en' ? 'English' : lang === 'jp' ? '日本語' : 'Português'}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary text-foreground/80 hover:text-foreground transition-all"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-card border-b border-border shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-foreground/70 hover:text-accent hover:bg-secondary rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
