import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Link, VStack } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const Faq = () => {
  return (
    <VStack id="faq" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="center" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin">
      <Center py={["5","10", "12", "20"]} backgroundPosition="center" backgroundSize="cover" width="full">
        <VStack gap="10" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} width={["90%", "80%", "70%"]}>
          <Text textAlign="center" fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
            Domande Frequenti
          </Text>
          <Accordion width="full" allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Quanto costa realizzare un sito per la mia agenzia<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Il costo varia in base alle funzionalità richieste e al livello di personalizzazione. Offriamo soluzioni scalabili, pensate sia per piccole agenzie sia per realtà più strutturate.<br/>
                Contattaci per un preventivo gratuito e senza impegno.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Quanto tempo ci vuole per avere pronto il sito<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Dipende dalla complessità del progetto, ma in media un sito base viene consegnato entro 3-4 settimane. Ti aggiorniamo costantemente durante tutto il processo.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Il sito  facile da usare per me e il mio team<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Assolutamente sì. Realizziamo interfacce semplici e intuitive. Inoltre, ti forniamo una breve guida e, se vuoi, una sessione formativa per mostrarti come gestire i contenuti.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Posso gestire gli immobili in autonomia<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Sì. Potrai aggiungere, modificare e rimuovere gli immobili facilmente tramite un pannello di controllo pensato proprio per le agenzie immobiliari.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Posso visualizzare il sito anche da smartphone<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Certo. Tutti i nostri siti sono responsive, quindi perfettamente ottimizzati per smartphone, tablet e desktop.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Offrite anche assistenza dopo la consegna<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Sì. Restiamo a disposizione anche dopo il lancio del sito per eventuali aggiornamenti, supporto tecnico o nuove funzionalità.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Posso affidarmi a voi senza competenze tecniche<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Sì. Ci occupiamo noi di tutto: analisi, design, sviluppo e messa online. Tu dovrai solo raccontarci le tue esigenze, al resto pensiamo noi.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Center>
    </VStack>
  );
};

export default Faq;