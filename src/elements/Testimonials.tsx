
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Heading, Text, Stack, Container, Avatar, Card, Image, HStack, CardBody } from '@chakra-ui/react';

export default function Testimonials() {
    return (
        <Container maxW={'7xl'} py={["5", "10", "12", "20"]} px="10" gap="5">
            <Card mt="5" mb="10" display={["flex", "flex", "none"]} boxShadow="xl" borderRadius="xl">
                <CardBody  bgColor="gray.100" borderRadius="xl">
                    <Stack gap="2" alignItems="center" fontWeight="bold" color="black">
                        <Text fontSize={["xs", "sm"]}>Con Noi</Text>
                        <HStack w="100%" justifyContent="space-around">
                            <Image src="/demo.ico" alt="demo" boxSize="50px"/>
                            <Image src="/casasavino.ico" alt="casasavino" boxSize="50px"/>
                            <Image src="/chat.png" alt="chat" boxSize="50px"/>
                        </HStack>
                        <Text fontSize="xl">+30% richieste in 90 giorni</Text>
                    </Stack>
                </CardBody>
            </Card>
            <Swiper style={{ paddingBottom: "30px" }} modules={[Autoplay, Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 40000 }} loop breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                <SwiperSlide>
                    <Stack bgColor="gray.100" borderRadius="xl" p="5" gap="2">
                        <HStack w="100%" gap="5">
                            <Avatar src={"/alessio_rossi.jpg"} />
                            <Heading as={'h3'} fontSize={["sm", "md", "lg", "lg", "lg", "xl"]}>Servizio Impeccabile!</Heading>
                        </HStack>
                        <Text textAlign="center">
                            S&P Development ha capito fin da subito cosa ci serviva. Il sito è intuitivo, moderno e facilissimo da aggiornare.
                            In pochi giorni abbiamo iniziato a ricevere più contatti direttamente dal web.
                        </Text>
                    </Stack>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Stack bgColor="gray.100" borderRadius="xl" p="5" gap="2">
                        <HStack w="100%" gap="5">
                            <Avatar src={"/giorgia_levi.jpg"} />
                            <Heading as={'h3'} fontSize={["sm", "md", "lg", "lg", "lg", "xl"]}>Professionisti Affidabili</Heading>
                        </HStack>
                        <Text textAlign="center">
                            Francesco ha fatto un ottimo lavoro lato tecnico e Paolo ci ha guidati in ogni fase con grande chiarezza.
                            Non avevamo mai pensato che un sito potesse semplificare così tanto la gestione degli immobili.
                        </Text>
                    </Stack>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Stack bgColor="gray.100" borderRadius="xl" p="5" gap="2">
                        <HStack w="100%" gap="5">
                            <Avatar src={"/luca_grasso.jpg"} />
                            <Heading as={'h3'} fontSize={["sm", "md", "lg", "lg", "lg", "xl"]}>Risultati Eccezionali</Heading>
                        </HStack>
                        <Text textAlign="center">
                            Grazie al nuovo sito abbiamo visto un aumento concreto di richieste da parte di potenziali acquirenti.
                            Il team di S&P Development ci ha seguiti con professionalità anche dopo il lancio, rendendo tutto semplice e senza stress.
                        </Text>
                    </Stack>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}
