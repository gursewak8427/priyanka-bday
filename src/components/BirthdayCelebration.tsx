import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cake, PartyPopper, Heart, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const BirthdayCelebration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [age, setAge] = useState(25); // You can adjust this
  const [showCelebration, setShowCelebration] = useState(false);

  const handleCelebrate = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  const birthdayWishes = [
    "May this year bring you endless joy and happiness! 🌟",
    "You deserve all the love and celebration in the world! 💕",
    "Here's to another year of being absolutely amazing! ✨",
    "May all your dreams and wishes come true! 🎊",
    "You make the world brighter just by being in it! 🌈"
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-20 px-6 bg-gradient-romantic relative overflow-hidden"
    >
      {/* Enhanced Celebration Animation */}
      {showCelebration && (
        <motion.div 
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="text-8xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 0.6, repeat: 3 }}
          >
            🎉
          </motion.div>
          <motion.div 
            className="absolute top-1/4 left-1/4 text-6xl"
            animate={{ 
              scale: [0, 1, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 1, repeat: 2, delay: 0.2 }}
          >
            🎊
          </motion.div>
          <motion.div 
            className="absolute bottom-1/4 right-1/4 text-6xl"
            animate={{ 
              scale: [0, 1.5, 1],
              opacity: [0, 1, 0.5, 0]
            }}
            transition={{ duration: 1.5, repeat: 2, delay: 0.5 }}
          >
            ✨
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-1/3 text-5xl"
            animate={{ 
              y: [100, -100],
              x: [0, 50, -50, 0],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: 1, delay: 0.8 }}
          >
            🎈
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", bounce: 0.6 }}
          >
            <Cake className="w-16 h-16 text-white heart-beat" />
          </motion.div>
          
          <motion.h2 
            className="font-romantic text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Celebrating
            <motion.span 
              className="block text-6xl md:text-8xl mt-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: 1, duration: 1, type: "spring" }}
            >
              {age} Years of You!
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            Another year older, another year more wonderful. 
            You just keep getting more amazing with each passing year!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {birthdayWishes.slice(0, 4).map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
              transition={{ 
                delay: 1.7 + (index * 0.2), 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className="p-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 h-full"
              >
                <Heart className="w-6 h-6 mx-auto mb-3 heart-beat" fill="currentColor" />
                <p className="text-lg font-medium">{wish}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              onClick={handleCelebrate}
              className="bg-white text-primary hover:bg-white/90 love-glow px-8 py-6 text-lg font-semibold"
            >
              <PartyPopper className="w-6 h-6 mr-2" />
              Let's Celebrate! 🎉
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/50 text-black hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <p className="text-white/80 text-lg font-light">
            Made with ❤️ for the most incredible person -- <b>Gursewak Singh</b>
          </p>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div 
        className="absolute top-10 left-10 opacity-60"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Sparkles className="w-8 h-8 text-white" />
      </motion.div>
      <motion.div 
        className="absolute top-20 right-16 opacity-60"
        animate={{ 
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotate: [0, -20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Heart className="w-6 h-6 text-white" fill="currentColor" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-20 opacity-60"
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 25, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <PartyPopper className="w-10 h-10 text-white" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 right-10 opacity-60"
        animate={{ 
          y: [0, -20, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
      >
        <Cake className="w-8 h-8 text-white" />
      </motion.div>
    </motion.section>
  );
};

export default BirthdayCelebration;