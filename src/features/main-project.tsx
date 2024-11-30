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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function MainProject() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Featured Project</CardTitle>
          <CardDescription>
            An innovative web application showcasing modern technologies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-semibold mb-2">Project Nexus</h3>
          <p className="text-muted-foreground mb-4">
            A cutting-edge platform that leverages AI and blockchain to
            revolutionize data management and analysis.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "Framer Motion",
              "AI",
              "Blockchain",
            ].map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            className="cursor-[url('/open-new-tab.png'),_pointer]"
          >
            Repository
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button className="cursor-[url('/open-new-tab.png'),_pointer]">
            Open Live Site
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.section>
  );
}
