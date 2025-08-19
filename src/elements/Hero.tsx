import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Text, Button, Heading, Stack, Image, Box, Link, HStack } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Stack borderBottom="1px" borderBottomColor="chakra-border-color" minH={"91vh"} direction={["column", "column", "column", "column", "row" ]} width="100%" overflow="hidden" gap={["5", "0"]} backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="right" >
            <Stack px={["10", "15", "20", "20", "20", "40"]} py="10" gap={["5", "5", "5", "5", "5", "10"]} w={["100%", "100%", "100%", "100%", "40%"]} justifyContent="center" className="animated-hero-text">
                <Heading fontSize={["xl", "2xl", "3xl", "4xl", "3xl", "5xl" ]}>
                    <Text as={"span"}>
                        Benvenuti in
                    </Text>
                    <br/>
                    <Text backgroundImage={"linear-gradient(to right, #9945FF, #14F195)"} backgroundClip="text" fill="transparent" as={"span"} fontFamily="CustomFont" position={"relative"}>
                        S<Text as={"span"} fontFamily="arial">&</Text>P Development
                    </Text>
                </Heading>
                <Text m="2" fontSize={["xs", "s", "md", "lg", "md", "lg"]}>
                    Hai un&apos;agenzia immobiliare e vuoi distinguerti online?<br/>
                    Noi di <b>S&P Development</b>, attivi dal 2023, realizziamo siti web professionali pensati per semplificare la gestione dei tuoi immobili e attrarre nuovi clienti in modo efficace.<br/><br/>

                    Ti offriamo soluzioni digitali veloci, responsive e completamente personalizzate, con strumenti avanzati per la pubblicazione degli annunci, la gestione delle schede immobile e la raccolta dei contatti.<br/><br/>
                    Dimentica i modelli generici: il tuo sito sarà costruito su misura per valorizzare davvero la tua agenzia.
                </Text>
                <HStack>
                    <Link href="mailto:francestu96@gmail.com?subject=Richiesta Valutazione immobile&body=< per cortesia, indicare via dell'immobile, metratura, vani e, ove possibile, qualche fotografia. Grazie >">
                        <Button leftIcon={<EmailIcon/>} rounded={"full"} bg={"main"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Valutazione Gratuita
                        </Button>
                    </Link>
                    <Link href="tel:3667748241">
                        <Button leftIcon={<PhoneIcon/>} rounded={"full"} bg={"gray.700"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Chiamaci
                        </Button>
                    </Link>
                </HStack>
            </Stack>
            <Box className="animated-hero-border" w={["100%", "100%", "100%", "100%", "60%"]} display="flex" position="relative" justifyContent="end" clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 60%)">
                <Image className="animated-hero-img" w="99.2%" h="98%" objectFit="cover" src="hero-bg.png" alt="background" clipPath={["polygon(0 0, 100% 0, 100% 96%, 0 57.5%)", "polygon(0 0, 100% 0%, 100% 100%, 0 60.5%)"]}/>
            </Box>
        </Stack>
    );
};

export default Hero;
