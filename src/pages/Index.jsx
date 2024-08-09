import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized app."
  },
  {
    icon: <Shield className="h-8 w-8 text-green-500" />,
    title: "Secure",
    description: "Your data is protected with state-of-the-art security measures."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-500" />,
    title: "Mobile Friendly",
    description: "Access your content seamlessly across all devices."
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Fancy App</h1>
          <p className="text-xl mb-8">Experience the next level of productivity and creativity</p>
          <Button asChild size="lg">
            <Link to="/features">Explore Features <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-6">Join thousands of satisfied users and transform your workflow today.</p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
