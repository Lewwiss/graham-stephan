import Head from 'next/head';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Graham Stephan - Featured</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="min-h-screen mx-auto container flex items-center justify-center max-w-7xl">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;