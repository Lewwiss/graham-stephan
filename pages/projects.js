import Head from 'next/head';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Graham Stephan - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="min-h-screen mx-auto container flex items-center max-w-7xl">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;