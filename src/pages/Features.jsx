import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Smartphone, Globe, Cloud, Lock } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-12 w-12 text-yellow-400" />,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized app. Load times are minimal, ensuring a smooth user experience."
  },
  {
    icon: <Shield className="h-12 w-12 text-green-500" />,
    title: "Secure",
    description: "Your data is protected with state-of-the-art security measures. We use end-to-end encryption to keep your information safe."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-blue-500" />,
    title: "Mobile Friendly",
    description: "Access your content seamlessly across all devices. Our responsive design ensures a great experience on desktop, tablet, and mobile."
  },
  {
    icon: <Globe className="h-12 w-12 text-purple-500" />,
    title: "Global Access",
    description: "Connect from anywhere in the world. Our distributed network ensures low latency no matter where you are."
  },
  {
    icon: <Cloud className="h-12 w-12 text-cyan-500" />,
    title: "Cloud Sync",
    description: "Your data is always up to date across all your devices thanks to our real-time cloud synchronization."
  },
  {
    icon: <Lock className="h-12 w-12 text-red-500" />,
    title: "Privacy First",
    description: "We prioritize your privacy. Your personal information is never sold or shared with third parties."
  }
];

const Features = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-4 text-2xl">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Features;
