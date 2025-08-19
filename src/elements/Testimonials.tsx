
import { ReactNode } from 'react';
import { Box, Flex, Heading, Text, Stack, Container, Avatar } from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box flex="1">{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack bg="gray.100" boxShadow={'lg'} p={8} rounded={'xl'} align={'center'} pos={'relative'} _after={{ content: `""`, w: 0, h: 0, borderLeft: 'solid transparent', borderLeftWidth: 16, borderRight: 'solid transparent', borderRightWidth: 16, borderTop: 'solid', borderTopWidth: 16, pos: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)' }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={'center'} color="gray.600" fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color="gray.600">
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center" textAlign="center">
            <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                Cosa dicono di Noi
            </Text>
          <Text>Scopri cosa dicono i nostri clienti della loro esperienza con noi!</Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Servizio Impeccabile!</TestimonialHeading>
              <TestimonialText>
                S&P Development ha capito fin da subito cosa ci serviva. Il sito è intuitivo, moderno e facilissimo da aggiornare.
                In pochi giorni abbiamo iniziato a ricevere più contatti direttamente dal web.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={"/alessio_rossi.jpg"} name={'Alessio'} title={'Catania'} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Professionisti Affidabili</TestimonialHeading>
              <TestimonialText>
                Francesco ha fatto un ottimo lavoro lato tecnico e Paolo ci ha guidati in ogni fase con grande chiarezza.
                Non avevamo mai pensato che un sito potesse semplificare così tanto la gestione degli immobili.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={"/giorgia_levi.jpg"} name={'Giorgia'} title={'Genova'} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Risultati Eccezionali</TestimonialHeading>
              <TestimonialText>
                Grazie al nuovo sito abbiamo visto un aumento concreto di richieste da parte di potenziali acquirenti.
                Il team di S&P Development ci ha seguiti con professionalità anche dopo il lancio, rendendo tutto semplice e senza stress.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={"/luca_grasso.jpg"} name={'Luca'} title={'Perugia'} />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
