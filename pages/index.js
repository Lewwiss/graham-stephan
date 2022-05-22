import Head from 'next/head';
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Graham Stephan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;