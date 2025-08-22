import { Card } from "@/components/ui/card";
import { Heart, Star, Gift } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LoveLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section 
      ref={ref}
      id="message" 
      className="py-20 px-6 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            <Heart className="w-12 h-12 text-primary heart-beat" fill="currentColor" />
          </motion.div>
          <motion.h2 
            className="font-romantic text-5xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A Letter From My Heart
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Words can never fully express how I feel, but here's my attempt...
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Card className="p-8 md:p-12 bg-gradient-soft border-0 love-glow">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-8">
              <p className="text-sm text-primary font-medium uppercase tracking-wider">
                On Your Special Day
              </p>
            </div>

            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-xl font-light">
                My Dearest Beautiful,
              </p>

              <p>
                Today marks another year of your incredible existence, and I can't help but feel 
                overwhelmed with gratitude for having you in my life. You bring so much joy, 
                laughter, and love into every single day.
              </p>

              <p>
                Your smile lights up my world, your laugh is my favorite sound, and your 
                presence makes everything better. You have this amazing ability to turn 
                ordinary moments into extraordinary memories.
              </p>

              <div className="flex items-center justify-center my-8">
                <Star className="w-6 h-6 text-primary mx-2" fill="currentColor" />
                <Star className="w-8 h-8 text-primary mx-2" fill="currentColor" />
                <Star className="w-6 h-6 text-primary mx-2" fill="currentColor" />
              </div>

              <p>
                I love how you see the beauty in everything, how you care for others, 
                and how you make me want to be the best version of myself. Your kindness, 
                intelligence, and incredible spirit inspire me every day.
              </p>

              <p>
                As you celebrate another year of life, I want you to know that you are 
                cherished, adored, and loved beyond measure. I'm so excited to see what 
                this new year brings for you and for us together.
              </p>

              <div className="text-center mt-12 mb-8">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4 float-gentle" />
                <p className="text-2xl font-romantic font-semibold romantic-text">
                  Happy Birthday, Beautiful!
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Here's to another year of adventures, laughter, and love.
                </p>
              </div>

              <p className="text-right text-xl font-light">
                With all my love,<br />
                <span className="font-romantic text-2xl text-primary">Gursewak Singh</span>
              </p>
            </div>
          </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LoveLetter;