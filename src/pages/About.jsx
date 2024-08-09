import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About This App</h1>
        <p className="text-xl mb-4">This is a bare-bones React application that you can use as a starting point for your projects.</p>
        <p className="mb-4">It includes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>React for building user interfaces</li>
          <li>React Router for navigation</li>
          <li>Tailwind CSS for styling</li>
          <li>A basic layout with header and footer</li>
        </ul>
        <p>Feel free to modify and expand upon this structure to suit your needs!</p>
      </div>
    </Layout>
  );
};

export default About;
