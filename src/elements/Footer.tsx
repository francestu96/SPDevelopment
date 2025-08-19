import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  HStack,
  Tooltip,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Logo from './Logo';
import Link from 'next/link';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box color="gray.700" borderTop="1px" borderTopColor="chakra-border-color">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '4fr 3fr 3fr 3fr' }} spacing={8}>
          <Stack spacing={6}>
            <HStack gap="3">
              <Logo/>
              <HStack alignItems="end">
                    <Text fontSize="2xl" px="1" mb="-1" fontFamily="CustomFont" fontWeight="900" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">S<Text as={'span'} fontFamily="arial">&</Text>P Development</Text>
                </HStack>
            </HStack>
            <Text fontSize={'sm'}>
              © 2025 S&amp;P Development. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <Tooltip label="coming soon!" hasArrow>
                <IconButton w={8} h={8} aria-label="Instagram" rounded="full" cursor="not-allowed"  icon={<FaInstagram/>}/>
              </Tooltip>
              <Tooltip label="coming soon!" hasArrow>
                <IconButton w={8} h={8} aria-label="Facebook" rounded="full" cursor="not-allowed"  icon={<FaFacebook/>}/>
              </Tooltip>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contatti</ListHeader>
            <Link href={"mailto:francestu96@gmail.com?subject=Richiesta Informazioni"}>francestu96@gmail.com</Link>
            <Link href={"tel:393667748241"}>+39 366 774 8241</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Informazioni</ListHeader>
            <Text>Viale Bernabò Brea 57, GE</Text>
            <Text>P.IVA da definire</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Rimani aggiornato</ListHeader>
            <Stack direction={'row'}>
              <Input placeholder={'Indirizzo email'} bg="blackAlpha.100" border={0} _focus={{ bg: 'whiteAlpha.300' }}/>
              <Tooltip label="coming soon!" hasArrow>
                <IconButton bg="main" color="white" aria-label="Subscribe" cursor="not-allowed" icon={<BiMailSend />}/>
              </Tooltip>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}