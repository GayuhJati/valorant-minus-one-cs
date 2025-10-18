import { motion } from "framer-motion";
import { Zap, UserCheck, Shield, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Chat",
      description: "Instant messaging with your potential teammates. Discuss strategies, share discord tags, and coordinate before the match.",
    },
    {
      icon: UserCheck,
      title: "Guest Join",
      description: "No account needed to join rooms. Just fill in your name and game tag to start connecting with teams immediately.",
    },
    {
      icon: Shield,
      title: "Team Matchmaking",
      description: "Smart filtering by rank, region, and playstyle. Find teammates who match your skill level and competitive goals.",
    },
    {
      icon: Globe,
      title: "Global Lobbies",
      description: "Connect with players from all regions. Whether you're looking for ranked grind or casual play, find your squad here.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
              Built for Competitive Play
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-card border border-border p-6 clip-corner h-full relative overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 clip-corner flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 clip-corner transform rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
