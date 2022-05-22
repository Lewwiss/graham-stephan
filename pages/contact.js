import Head from 'next/head';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Graham Stephan - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;