"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EcoTrack",
    description:
      "A sustainable living app with personalized eco-friendly recommendations.",
    repoUrl: "https://github.com/yourusername/ecotrack",
    liveUrl: "https://ecotrack-demo.vercel.app",
  },
  {
    id: 2,
    title: "MindfulAI",
    description:
      "An AI-powered meditation and mindfulness assistant for mental wellness.",
    repoUrl: "https://github.com/yourusername/mindfulai",
    liveUrl: "https://mindfulai-demo.vercel.app",
  },
  {
    id: 3,
    title: "CryptoVault",
    description:
      "A secure and user-friendly cryptocurrency wallet and exchange platform.",
    repoUrl: "https://github.com/yourusername/cryptovault",
    liveUrl: "https://cryptovault-demo.vercel.app",
  },
  {
    id: 4,
    title: "SmartHome Hub",
    description:
      "An IoT solution for seamless smart home device integration and control.",
    repoUrl: "https://github.com/yourusername/smarthomehub",
    liveUrl: "https://smarthomehub-demo.vercel.app",
  },
];

export default function ProjectGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add more project details or images here */}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="cursor-[url('/open-new-tab.png'),_pointer]"
                onClick={() => window.open(project.repoUrl, "_blank")}
              >
                Repository
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="cursor-[url('/open-new-tab.png'),_pointer]"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                Open Live Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
