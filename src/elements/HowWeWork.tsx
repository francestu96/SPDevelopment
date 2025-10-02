
import { Box, Text, Card, CardBody, VStack } from '@chakra-ui/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuMonitorCheck } from "react-icons/lu";
import { TiWorld } from "react-icons/ti";

export default function HowWeWork() {
    return (
        <Box py={["5","10", "12"]} w="100%" alignItems="center" borderBottom="1px" borderTop="1px" borderColor="chakra-border-color" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="right">
            <VStack mb="5" spacing={2} textAlign="center" px="10">
                <Text fontSize={["2xl", "3xl", "4xl"]} fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                    Come Lavoriamo
                </Text>
            </VStack>
            <Box width={["90%", "80%", "70%"]} mx="auto" textAlign="center" mb="5" mt="7">
                <Swiper style={{ paddingBottom: "30px" }} modules={[Autoplay, Scrollbar]} spaceBetween={30} slidesPerView={1} scrollbar={{ draggable: true }} autoplay={{ delay: 4000 }} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                    <SwiperSlide>
                        <Card boxShadow="xl" borderRadius="xl" mx="5">
                            <CardBody>
                                <VStack gap="0" fontSize={["md", "lg", "xl"]}>
                                    <FaMagnifyingGlass size="30px"/>
                                    <Text fontWeight="bold" mt="5">Analisi gratuita</Text>
                                    <Text>Richiedi la tua analisi gratuita e scopri subito punti di forza e aree di miglioramento</Text>
                                </VStack>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Card boxShadow="xl" borderRadius="xl" mx="5">
                            <CardBody>
                                <VStack gap="0" fontSize={["md", "lg", "xl"]}>
                                    <LuMonitorCheck size="30px"/>
                                    <Text fontWeight="bold" mt="2">Sito su misura</Text>
                                    <Text>Realizziamo siti web personalizzati per la tua agenzia, pensati per valorizzare al massimo i tuoi immobili</Text>
                                </VStack>
                            </CardBody>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card boxShadow="xl" borderRadius="xl" mx="5">
                            <CardBody>
                                <VStack gap="0" fontSize={["md", "lg", "xl"]}>
                                    <TiWorld size="30px"/>
                                    <Text fontWeight="bold" mt="2">Visibilità online</Text>
                                    <Text>Aumenta le tue opportunità di vendita con un sito ottimizzato per i motori di ricerca e facile da usare</Text>
                                </VStack>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
}
