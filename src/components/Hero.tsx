import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-birthday.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          y 
        }}
      >
        <div className="absolute inset-0 bg-gradient-romantic opacity-80"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            <Heart className="w-16 h-16 text-primary heart-beat" fill="currentColor" />
          </motion.div>
          
          <motion.h1 
            className="font-romantic text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Happy Birthday
            <motion.span 
              className="block romantic-text text-7xl md:text-9xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Priyanka
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            Today we celebrate the most amazing person in my life. 
            Every moment with you is a gift, and today is all about you! ✨
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm love-glow px-8 py-6 text-lg font-medium border-2"
                onClick={() => scrollToSection('memories')}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View Our Memories
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/50 text-black hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg font-medium border-2"
                onClick={() => scrollToSection('message')}
              >
                <Heart className="w-5 h-5 mr-2" />
                Read My Letter
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Elements with Enhanced Animation */}
      <motion.div 
        className="absolute top-20 left-10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Heart className="w-8 h-8 text-primary/60" fill="currentColor" />
      </motion.div>
      <motion.div 
        className="absolute top-32 right-16"
        animate={{ 
          y: [0, -25, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Sparkles className="w-6 h-6 text-accent/70" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-20"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
      >
        <Heart className="w-6 h-6 text-primary/50" fill="currentColor" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;