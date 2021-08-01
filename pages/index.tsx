import dynamic from 'next/dynamic';
import { ReactElement } from 'react';


const ReactAdmin = dynamic(() => import('@/components/ReactAdmin'), {
  ssr: false,
});

const HomePage = () => {
  return <ReactAdmin />;
}

export default HomePage;
