import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
        <p className="text-xl mb-4">This is a simple starting point for your project. Feel free to modify and expand upon it!</p>
        <Link to="/about" className="text-blue-500 hover:underline">Learn more about this app</Link>
      </div>
    </Layout>
  );
};

export default Index;
