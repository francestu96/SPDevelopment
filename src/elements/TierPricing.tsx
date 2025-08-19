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
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa'

interface Props {
    children: React.ReactNode
}

function PriceWrapper(props: Props) {
    const { children } = props

    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    )
}

export default function TierPricing() {
    return (
        <Box py={12}  id='pricing'>
            <VStack spacing={2} textAlign="center">
                <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                    Pacchetti per ogni esigenza
                </Text>
                <Text fontSize="lg" color={'gray.500'}>
                    Ogni pacchetto può essere personalizzato in base alle specifiche esigenze
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
                px={{ base: 10, md: 5, lg: 2 }}>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Basic
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                €
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                1.799
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                + IVA
                            </Text>
                        </HStack>
                        <Text fontSize="md" mt="-2" color="gray.500">
                            Manutenzione € 500/anno
                        </Text>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
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
                        </List>
                        <Box w="80%" pt={7}>
                            <Link href="https://api.whatsapp.com/send?phone=393667748241&text=Ciao Francesco, sarei interessato al *pacchetto Basic* della SPDevelopment" target="_blank">
                                <Button w="full" colorScheme="red" variant="outline">
                                    Scrivici
                                </Button>
                            </Link>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('red.300', 'red.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Most Popular
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Business
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    €
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    2.299
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    + IVA
                                </Text>
                            </HStack>
                            <Text fontSize="md" mt="-2" color="gray.500">
                                Manutenzione € 600/anno
                            </Text>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
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
                            </List>
                            <Box w="80%" pt={7}>
                                <Link href="https://api.whatsapp.com/send?phone=393667748241&text=Ciao Francesco, sarei interessato al *pacchetto Business* della SPDevelopment" target="_blank">
                                    <Button w="full" colorScheme="red">
                                        Scrivici
                                    </Button>
                                </Link>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Premium
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                €
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                1.999
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                + IVA
                            </Text>
                        </HStack>
                        <Text fontSize="md" mt="-2" color="gray.500">
                            Manutenzione € 550/anno
                        </Text>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
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
                        </List>
                        <Box w="80%" pt={7}>
                            <Link href="https://api.whatsapp.com/send?phone=393667748241&text=Ciao Francesco, sarei interessato al *pacchetto Premium* della SPDevelopment" target="_blank">
                                <Button w="full" colorScheme="red" variant="outline">
                                    Scrivici
                                </Button>
                            </Link>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    )
}