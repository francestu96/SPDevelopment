'use client'

import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    Link,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa'

interface PriceWrapperProps {
    title: string;
    fakePrice: string;
    price: string;
    maintanance: string;
    isPopular?: boolean;
    children: React.ReactNode;
}

function PriceWrapper({ title, fakePrice, price, maintanance, isPopular, children }: PriceWrapperProps) {
    return (
        <Box position="relative" mb={4} shadow="base" borderWidth="1px" alignSelf={{ base: 'center', lg: 'flex-start' }} borderColor={useColorModeValue('gray.200', 'gray.500')} borderRadius={'xl'}>
            {isPopular && (
                <Box position="absolute" top="-16px" left="50%" style={{ transform: 'translate(-50%)' }}>
                    <Text textTransform="uppercase" bg={useColorModeValue('red.300', 'red.700')} px={3} py={1} color={useColorModeValue('gray.900', 'gray.300')} fontSize="sm" fontWeight="600" rounded="xl">
                        Most Popular
                    </Text>
                </Box>
            )}
            <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                     {title}
                </Text>
                <HStack justifyContent="center">
                    <Text fontSize={["lg", "xl", "2xl"]} mt="-2" textDecoration={'line-through'} color={'red.500'}>
                        €{fakePrice}
                    </Text>
                    <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="600">
                        €
                    </Text>
                    <Text fontSize={["2xl", "3xl", "5xl"]} fontWeight="900">
                        {price}*
                    </Text>
                    <Text fontSize={["xl", "2xl", "3xl"]} color="gray.500">
                        +IVA
                    </Text>
                </HStack>
                <Text fontSize="md" mt="-2" color="gray.500">
                    Manutenzione € {maintanance}/anno
                </Text>
            </Box>
            <VStack bg={useColorModeValue('gray.50', 'gray.700')} py={4} borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                    {children}
                </List>
                <Box w="80%" pt={7}>
                    <Link href={`https://api.whatsapp.com/send?phone=393667748241&text=Ciao Francesco, sarei interessato al *pacchetto ${title}* della SPDevelopment`} target="_blank">
                        <Button w="full" colorScheme="red" variant={isPopular ? "solid" : "outline"}>
                            Scrivici
                        </Button>
                    </Link>
                </Box>
            </VStack>
        </Box>
    )
}

export default function TierPricing() {
    const [showCountdown, setShowCountdown] = useState(false);

    const now = new Date();

    const missingDays = 7 - now.getDay(); 
    const daysToAdd = missingDays == 0 ? 7 : missingDays;
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysToAdd, 0, 0, 0, -1);

    const renderer = ({ days, hours, minutes, seconds }: any) => {
        return (
            <HStack color="white">
                <VStack gap="0">
                    <Text fontWeight="bold" fontSize={["md", "lg", "xl"]}>{String(days).padStart(2, '0')}</Text>
                    <Text fontSize={["xs", "sm"]} mt="-1">Giorni</Text>
                </VStack>
                <VStack gap="0">
                    <Text fontWeight="bold" fontSize={["md", "lg", "xl"]}>{String(hours).padStart(2, '0')}</Text>
                    <Text fontSize={["xs", "sm"]} mt="-1">Ore</Text>
                </VStack>
                <VStack gap="0">
                    <Text fontWeight="bold" fontSize={["md", "lg", "xl"]}>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</Text>
                    <Text fontSize={["xs", "sm"]} mt="-1">minutes</Text>
                </VStack>
            </HStack>
        )
    };

    useEffect(() => {
        setShowCountdown(true);
    }, []);
    
    return (
        <Box pt={["5","10", "12"]}  id='pricing'>
            <VStack spacing={2} textAlign="center" px="10" display={["none", "none", "unset"]}>
                <Text fontSize="4xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                    Pacchetti per ogni esigenza
                </Text>
                <Text fontSize="lg" color={'gray.500'}>
                    Ogni pacchetto può essere personalizzato in base alle specifiche esigenze
                </Text>
            </VStack>
            <VStack textAlign="center" px="10" display={["unset", "unset", "none"]} paddingInline="0" marginBlock="0">
                <Text fontSize={["2xl", "3xl"]} fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                    Soluzioni su misura
                </Text>
                <Text fontSize={["md", "lg"]} color={'gray.500'}>
                    Servizi personalizzati per ogni esigenza
                </Text>
            </VStack>
            <Stack direction={{ base: 'column', md: 'row' }} textAlign="center" justify="center" spacing={{ base: 4, lg: 10 }} py={[5, 7, 10]} px={{ base: 10, md: 5, lg: 2 }}>
                <PriceWrapper title="Basic" fakePrice="3.499" price="1.799" maintanance="500">
                    <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Gestione <b>centralizzata</b> degli immobili<br/>sui principali aggregatori (immobiliare.it, idealista.it ...)  
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Design <b>logo</b> e personalizzazione
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Compatibilità per dispositivi <b>mobile</b>
                    </ListItem>
                </PriceWrapper>

                <PriceWrapper title="Premium" fakePrice="3.999" price="1.999" maintanance="550" isPopular>
                    <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Pacchetto <b>Basic</b>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaPlusCircle} color="green.500" />
                        Dominio <b>e-mail</b> personalizzato
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaPlusCircle} color="green.500" />
                        Notifiche via e-mail ai clienti con<br/><b>filtri di ricerca</b> personalizzati
                    </ListItem>
                </PriceWrapper>

                <PriceWrapper title="Business" fakePrice="3.499" price="2.299" maintanance="600">
                    <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Pacchetto <b>Premium</b>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaPlusCircle} color="green.500" />
                        <b>Supporto</b> prioritario
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaPlusCircle} color="green.500" />
                        Gestione di più <b>utenti</b> e <b>ruoli</b>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaPlusCircle} color="green.500" />
                        <b>Firma</b> e gestione dei <b>documenti</b> per i clienti
                    </ListItem>
                </PriceWrapper>
            </Stack>

            <Stack direction={["column", "row"]} justifyContent="center" w="100vw" justifyItems="center" alignItems="center" px="10" py="3" backgroundColor="red.500" gap={[0, 2]}>
                <Text fontSize={["sm", "ms", "lg"]} fontWeight="bold">
                    * la promozione finisce in
                </Text>
                { showCountdown && <Countdown date={targetDate} renderer={renderer}/> }
            </Stack>
        </Box>
    )
}