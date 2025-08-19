import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, VStack, useDisclosure, Text, Slide, Link, Image, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { ISubNav } from './SubNav';
;
import Logo from './Logo';
import NavItem from './NavItem';
import { FaArrowRight } from 'react-icons/fa';

const NAV_LINKS: ISubNav[] = [
    { label: "Prezzi", href: "/#pricing" },
    { label: "Chi Siamo", href: "/#about" },
    { label: "I Nostri Numeri", href: "/#numbers" },
    { label: "F.A.Q.", href: "/#faq" }
];

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box borderBottom="1px" borderBottomColor="chakra-border-color" p='10px 10%'>
            <Flex justify="space-between" display={['none', 'none', 'none', 'flex']}>
                <HStack>
                    <Logo />
                    <Text fontSize="xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">S<Text as={'span'} fontWeight="bold" fontFamily="arial">&</Text>P Development</Text>
                </HStack>
                <HStack gap={'15px'} alignItems="center">
                    {NAV_LINKS.map((link) => (
                        <NavItem key={`link-${link.label}`} onToggle={onToggle} {...link} />
                    ))}
                    <Link target='_blank' href="https://realestateagency-demo.vercel.app/">
                        <Button rounded={"full"} bg={"main"} color={"white"} _hover={{ bg: "gray.200" }}>
                            Guarda la demo
                            <Icon ml="2" as={FaArrowRight}></Icon>
                        </Button>
                    </Link>
                </HStack>
            </Flex>
            <Flex align="center" justify="space-between" display={['flex', 'flex', 'flex', 'none']}>
                <Logo />
                <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon />} onClick={onToggle} />
            </Flex>


            <Slide in={isOpen} transition={{ "enter": { duration: 0.5 }, "exit": { duration: 0.5 } }} style={{ zIndex: 10 }}>
                <Flex w='100vw' h="100vh" flexDir="column" backgroundColor="white">
                    <Flex justify="flex-end">
                        <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon />} onClick={onToggle} />
                    </Flex>
                    <VStack gap={'15px'}>
                        {NAV_LINKS.map((link) => (
                            <NavItem key={`link-${link.label}`} onToggle={onToggle} {...link} />
                        ))}
                        <Link target='_blank' href="https://realestateagency-demo.vercel.app/" onClick={onToggle}>
                            <Button rounded={"full"} bg={"main"} color={"white"} _hover={{ bg: "gray.200" }}>
                                Guarda la demo
                                <Icon ml="2" as={FaArrowRight}></Icon>
                            </Button>
                        </Link>
                    </VStack>
                </Flex>
                <Link href="https://api.whatsapp.com/send?phone=393667748241" target="_blank">
                    <Image src="/whatsapp-button.png" position="fixed" bottom="15px" right="15px" alt="wp-logo" />
                </Link>
            </Slide>
        </Box>
    );
};

export default Header;
