import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Graham Stephan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;