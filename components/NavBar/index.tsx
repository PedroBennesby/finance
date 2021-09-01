import { Flex, Button, IconButton, Icon, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ThemeSwitcher from '../ThemeSwitcher'

const Navbar = () => {
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex pos="fixed" top="1rem" right="1rem"></Flex>
      <Flex display={['none', 'none', 'flex', 'flex']}>
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
        </NextLink>
        <NextLink href="/sobre" passHref>
          <Button as="a" variant="ghost" aria-label="Sobre" my={5} w="100%">
            Sobre
          </Button>
        </NextLink>
        <NextLink href="/contato" passHref>
          <Button as="a" variant="ghost" aria-label="Contato" my={5} w="100%">
            Contato
          </Button>
        </NextLink>
        <ThemeSwitcher />
      </Flex>
      <IconButton
        aria-label="Abrir Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay('flex')}
      />
      <Flex
        w="100vw"
        bgColor={'useColorMode'}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Fechar Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>
          <NextLink href="/sobre" passHref>
            <Button as="a" variant="ghost" aria-label="Sobre" my={5} w="100%">
              Sobre
            </Button>
          </NextLink>
          <NextLink href="/contato" passHref>
            <Button as="a" variant="ghost" aria-label="Contato" my={5} w="100%">
              Contato
            </Button>
          </NextLink>
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
