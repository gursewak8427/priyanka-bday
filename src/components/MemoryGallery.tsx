import { Card } from "@/components/ui/card";
import { Heart, Camera } from "lucide-react";
import memoryFrames from "@/assets/memory-frames.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MemoryGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const memories = [
    {
      title: "Our First Date",
      description: "That magical evening when everything felt perfect",
      date: "The beginning of forever"
    },
    {
      title: "Adventure Together",
      description: "Every journey is better with you by my side",
      date: "Making memories"
    },
    {
      title: "Quiet Moments",
      description: "The simple times that mean the most",
      date: "Just us two"
    },
    {
      title: "Celebrations",
      description: "All our special occasions together",
      date: "Milestones of love"
    },
    {
      title: "Everyday Magic",
      description: "You make ordinary moments extraordinary",
      date: "Every single day"
    },
    {
      title: "Future Dreams",
      description: "All the adventures still to come",
      date: "Forever and always"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="memories" 
      className="py-20 px-6 bg-gradient-soft"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          >
            <Camera className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h2 
            className="font-romantic text-5xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our Beautiful Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Every photo tells a story, every moment a treasured memory. 
            Here's to all the wonderful times we've shared together.
          </motion.p>
        </motion.div>

        {/* Background Image with Animation */}
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <img 
            src={memoryFrames} 
            alt="Memory frames" 
            className="w-full h-64 object-cover rounded-2xl shadow-soft"
          />
          <div className="absolute inset-0 bg-primary/20 rounded-2xl flex items-center justify-center">
            <motion.p 
              className="text-white text-2xl font-romantic font-semibold text-center px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              "Every picture tells our love story"
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                delay: 1.4 + (index * 0.1), 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className="p-6 bg-card hover:shadow-romantic transition-all duration-300 border-0 love-glow h-full"
              >
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-4 heart-beat" fill="currentColor" />
                  <h3 className="font-romantic text-2xl font-semibold text-foreground mb-3">
                    {memory.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {memory.description}
                  </p>
                  <span className="text-sm text-primary font-medium">
                    {memory.date}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MemoryGallery;