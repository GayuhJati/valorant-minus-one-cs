import { motion } from "framer-motion";
import { Search, MessageSquare, Gamepad2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Rooms",
      description: "Explore active lobbies looking for their last teammate. Filter by rank, region, and playstyle.",
      delay: 0.2,
    },
    {
      icon: MessageSquare,
      title: "Join Chat",
      description: "No login required for guests. Fill a quick form and start chatting with the team instantly.",
      delay: 0.4,
    },
    {
      icon: Gamepad2,
      title: "Play Together",
      description: "Coordinate strategies, share tags, and jump into the game. Your next clutch starts here.",
      delay: 0.6,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
              How It Works
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-card border border-border p-8 clip-corner h-full hover:border-primary/50 transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary clip-corner flex items-center justify-center glow-effect">
                  <span className="text-primary-foreground font-bold text-xl">
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 clip-corner flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
