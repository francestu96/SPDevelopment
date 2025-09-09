import { VStack } from '@chakra-ui/react';
import Hero from 'elements/Hero';
import { FC } from 'react';
import Testimonials from 'elements/Testimonials';
import About from 'elements/About';
import Numbers from 'elements/Numbers';
import Faq from 'elements/Faq';
import TierPricing from 'elements/TierPricing';

const Home: FC = () => {
  return (
    <VStack gap="0">
      <Hero/>
      <TierPricing/>
      <Numbers/>
      <Testimonials/>
      <About/>
      <Faq/>
    </VStack>
  );
};

export default Home;
