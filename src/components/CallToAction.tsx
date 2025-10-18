import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-card border border-primary/30 clip-corner p-12 md:p-16 relative overflow-hidden border-glow">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary" />

            <div className="relative z-10 space-y-8">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 clip-corner"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Your Next Clutch Moment{" "}
                  <span className="text-primary text-glow">Starts Here</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of players finding their perfect squad. Whether you're pushing for Radiant or just having fun, your team is waiting.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button variant="hero" size="lg" className="gap-2 group">
                  Join Timeline
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Active Rooms
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>500+ Online Now</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Free to Join</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
