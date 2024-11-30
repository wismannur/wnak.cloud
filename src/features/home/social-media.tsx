"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { id: "linkedin", Icon: FaLinkedin, url: "https://www.linkedin.com/" },
  { id: "github", Icon: FaGithub, url: "https://github.com/" },
  {
    id: "stackoverflow",
    Icon: FaStackOverflow,
    url: "https://stackoverflow.com/",
  },
];

export default function SocialMedia() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm shadow-sm py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ id, Icon, url }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="ghost" size="icon" asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{id}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
