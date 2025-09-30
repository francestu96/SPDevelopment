import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Text, Button, Heading, Stack, Image, Box, Link, HStack, CardHeader, Card } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Stack borderBottom="1px" borderBottomColor="chakra-border-color" minH={["unset", "91vh"]} direction={["column", "column", "column", "column", "row" ]} width="100%" overflow="hidden" gap={["5", "0"]} backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="right" >
            <Stack px={["10", "15", "20", "20", "20", "40"]} py={["5","10", "12"]} gap={["0", "0", "5", "5", "5", "10"]} w={["100%", "100%", "100%", "100%", "40%"]} justifyContent="center" className="animated-hero-text">
                <Heading fontSize={["xl", "2xl", "3xl", "4xl", "3xl", "5xl" ]}>
                    <Text as={"span"}>
                        Benvenuti in
                    </Text>
                    <br/>
                    <Text backgroundImage={"linear-gradient(to right, #9945FF, #14F195)"} backgroundClip="text" fill="transparent" as={"span"} fontFamily="CustomFont" position={"relative"}>
                        S<Text as={"span"} fontFamily="arial">&</Text>P Development
                    </Text>
                </Heading>
                <Text m="2" fontSize={["xs", "sm", "md", "lg", "md", "lg"]} display={["none", "none", "unset"]}>
                    Hai un&apos;agenzia immobiliare e vuoi <b>distinguerti online</b>?<br/><br/>

                    Noi di <b>S&P Development</b>, attivi dal 2023, realizziamo siti web professionali pensati per <b>semplificare la gestione</b> dei tuoi immobili, gestire <b>documentazione</b>, attrarre <b>nuovi clienti</b> in modo efficace e molto altro!<br/><br/>

                    Ti offriamo soluzioni digitali veloci, responsive e completamente personalizzate, con strumenti avanzati per la pubblicazione degli annunci, la gestione delle schede immobile e la raccolta dei contatti.<br/><br/>
                    
                    Dimentica i modelli generici: il tuo sito sarà <b>costruito su misura</b> per valorizzare davvero la tua agenzia.
                </Text>
                <Text m="2" fontSize={["xs", "sm", "md", "lg", "md", "lg"]} display={["unset", "unset", "none"]}>
                    Hai un&apos;agenzia immobiliare e vuoi <b>distinguerti online</b>?<br/><br/>

                    Noi di <b>S&P Development</b>, attivi dal 2023, realizziamo siti web professionali pensati per <b>semplificare la gestione</b> dei tuoi immobili, gestire <b>documentazione</b>, attrarre <b>nuovi clienti</b> in modo efficace e molto altro!
                </Text>
                <HStack>
                    <Link href="mailto:francestu96@gmail.com?cc=pgiambarrasi96@gmail.com&subject=Richiesta Consulenza gratuita&body=Ciao Francesco,%0D%0A%0D%0AVorrei fissare una consulenza gratuita per discutere delle mie esigenze e capire come potreste aiutarmi a migliorare la presenza online della mia agenzia.%0D%0A%0D%0AGrazie,%0D%0A[Tuo Nome]" >
                        <Button leftIcon={<EmailIcon/>} fontSize={["xs", "md"]} rounded={"full"} bg={"main"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Consulenza Gratuita
                        </Button>
                    </Link>
                    <Link href="tel:3667748241">
                        <Button leftIcon={<PhoneIcon/>} fontSize={["xs", "md"]} rounded={"full"} bg={"gray.700"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Chiamaci
                        </Button>
                    </Link>
                </HStack>
            </Stack>
            <Box className="animated-hero-border" w={["100%", "100%", "100%", "100%", "60%"]} display={["none", "flex"]} position="relative" justifyContent="end" clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 60%)">
                <Image className="animated-hero-img" w="99.2%" h="98%" objectFit="cover" src="hero-bg.png" alt="background" clipPath={["polygon(0 0, 100% 0, 100% 96%, 0 57.5%)", "polygon(0 0, 100% 0%, 100% 100%, 0 60.5%)"]}/>
            </Box>
        </Stack>
    );
};

export default Hero;
