import { PhoneIcon } from "@chakra-ui/icons";
import { Center, VStack, Text, Image, Stack, chakra, shouldForwardProp, Button, Card, CardBody, CardFooter, Heading, Link } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import { useRef } from "react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })

    return (
        <VStack id="about" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="center" backdropInvert="">
            <Center py={["5","10", "12", "20"]} width="full">
                <VStack gap="10" width={["90%"]}>
                    <Text fontSize={["2xl", "3xl"]} fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                        Chi Siamo
                    </Text>
                    <VStack ref={ref} gap="10" overflowX="clip">
                        <Text px={["0", "10", "20"]}>
                            S&amp;P Development rappresenta l'eccellenza nel settore del property management a Genova. 
                            Con una consolidata esperienza nel campo, ci impegniamo a offrire soluzioni su misura per soddisfare le esigenze dei nostri clienti.<br/><br/>
                            Il nostro team è composto da professionisti esperti e dedicati, appassionati nel garantire tranquillità, trasparenza e il massimo rendimento per i nostri clienti. 
                            Ci occupiamo integralmente di ogni aspetto della gestione immobiliare dal marketing strategico, alla gestione degli affitti, la pulizia e sanificazione e l'accoglienza degli ospiti. 
                            Ci impegniamo a mantenere gli standard più elevati di trasparenza, affidabilità e servizio clienti.<br/><br/>
                            Affidati a noi per la gestione delle tue proprietà e scopri il vantaggio di avere un partner fidato a Genova. Contattaci oggi stesso per una consulenza personalizzata.
                        </Text>
                        <ChakraBox animate={isInView ? { opacity: [0, 1], translateX: ["150px", "0px"] } : 'none'} transition={{ duration: "2", ease: "easeInOut"}} opacity="0">
                            <Card  boxShadow={'2xl'} backgroundColor="gray.100" mr={["0", "10vw"]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p="5" borderRadius="2xl">
                                <Image objectFit='cover' w={{ base: '100%', sm: '200px' }} src='/francesco.jpg' alt='Francesco' borderRadius="full"/>

                                <Stack>
                                    <CardBody>
                                        <Heading size='md' color="main">Francesco</Heading>

                                        <Text py='2'>
                                            Con una laurea in Informatica e una passione per la programmazione, Francesco è la mente tecnica del team.<br/> 
                                            Si occupa dello sviluppo completo dei siti web, dalla progettazione delle funzionalità fino all&apos;ottimizzazione delle performance.<br/><br/>
                                            La sua attenzione ai dettagli e la capacità di creare soluzioni su misura rendono ogni sito non solo bello da vedere, ma anche efficiente, veloce e funzionale.<br/><br/>
                                            Ama affrontare sfide tecniche e trovare soluzioni innovative che semplifichino il lavoro delle agenzie.
                                        </Text>
                                    </CardBody>

                                    <CardFooter>
                                        <Link href="tel:3890298501">
                                            <Button leftIcon={<PhoneIcon/>} rounded={'full'} bg={'main'} color={'white'}  _hover={{ bg: "gray.200", color: "gray.700" }}>
                                                Chiama
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        </ChakraBox>
                        <ChakraBox animate={isInView ? { opacity: [0, 1], translateX: ["-150px", "0px"] } : 'none'} transition={{ duration: "2", ease: "easeInOut", delay: "1"}} opacity="0">
                            <Card boxShadow={'2xl'} backgroundColor="gray.100" ml={["0", "10vw"]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p="5" borderRadius="2xl">
                                <Image objectFit='cover' display={["flex", "none"]} w="100%" src='/paolo.jpg' alt='Paolo' borderRadius="full"/>
                                
                                <Stack align={["start", "end"]}>
                                    <CardBody>
                                        <Heading size='md' color="main" textAlign={["start", "end"]}>Paolo</Heading>

                                        <Text py='2'>
                                            Laureato in Psicologia, Paolo porta nella nostra attività una visione orientata all&apos;ascolto, alla relazione e all&apos;esperienza utente.<br/>
                                            Si occupa del rapporto con i clienti, curando ogni fase del progetto: dalla prima consulenza fino al supporto post-lancio.<br/><br/>
                                            La sua formazione gli permette di comprendere a fondo le esigenze delle agenzie e di tradurle in progetti concreti, efficaci e pensati davvero per chi li userà.<br/>
                                            È il ponte tra le esigenze del cliente e le soluzioni tecniche, sempre attento a rendere il percorso semplice e chiaro.
                                        </Text>
                                    </CardBody>

                                    <CardFooter>
                                        <Link href="tel:3480944572">
                                            <Button leftIcon={<PhoneIcon/>} rounded={'full'} bg={'main'} color={'white'}  _hover={{ bg: "gray.200", color: "gray.700" }}>
                                                Chiama
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Stack>
                                <Image objectFit='cover' display={["none", "flex"]} w="200px" src='/paolo.jpg' alt='Paolo' borderRadius="full"/>
                            </Card>
                        </ChakraBox>
                    </VStack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default About;
