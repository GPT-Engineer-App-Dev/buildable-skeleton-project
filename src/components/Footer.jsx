import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">FancyApp</h2>
            <p className="mt-2">Making your life easier, one feature at a time.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} FancyApp. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
            <Button variant="outline" size="icon" className="bg-white text-blue-600 hover:bg-blue-100">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white text-blue-600 hover:bg-blue-100">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white text-blue-600 hover:bg-blue-100">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
