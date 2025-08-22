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
            Dil Se Birthday Letter
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Bas kuch simple shabdon mein, aap se apni feeling share kar raha hoon...
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
                Aapke Birthday Par
              </p>
            </div>

            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-xl font-light">
                Meri pyaari jaan,
              </p>

              <p>
                Happy Birthday meri sabse special ladki! Aap meri zindagi ki sabse badi khushi hain. Aapki smile dekh ke din ban jaata hai, aur aap saath ho toh sab kuch perfect lagta hai.
              </p>

              <p>
                Aapki hasi, aapki baatein, aapka pyaar – sab kuch mere liye priceless hai. Aap na ho toh sab kuch adhoora lagta hai. Aapke saath har moment ek nayi yaad ban jaata hai.
              </p>

              <div className="flex items-center justify-center my-8">
                <Star className="w-6 h-6 text-primary mx-2" fill="currentColor" />
                <Star className="w-8 h-8 text-primary mx-2" fill="currentColor" />
                <Star className="w-6 h-6 text-primary mx-2" fill="currentColor" />
              </div>

              <p>
                Aap sabse alag hain, sabse pyaari hain. Aapki care, aapka support, sab kuch mere liye bahut important hai. Main hamesha chahta hoon ki aap hasti rahen, khush rahen.
              </p>

              <p>
                Aaj aapke birthday par sirf yahi wish karta hoon ki aapki life hamesha khushiyon se bhari rahe. Main hamesha aapke saath hoon, har ek pal mein, har ek muskurahat mein.
              </p>

              <div className="text-center mt-12 mb-8">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4 float-gentle" />
                <p className="text-2xl font-romantic font-semibold romantic-text">
                  Happy Birthday meri jaan! 🎂❤️
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Aapki smile sabse pyaari gift hai mere liye. Love you so much!
                </p>
              </div>

              <p className="text-right text-xl font-light">
                Hamesha aapka,<br />
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