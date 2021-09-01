import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Container, IconButton, useColorMode } from '@chakra-ui/react'
import { NextComponentType } from 'next'

const ThemeSwitcher: NextComponentType = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container
      my="40px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      {colorMode === 'light' ? (
        <IconButton
          my="20px"
          isRound
          onClick={toggleColorMode}
          color="gray.800"
          icon={<MoonIcon />}
          variant="outline"
          aria-label="Modo Dark"
        />
      ) : (
        <IconButton
          my="20px"
          isRound
          onClick={toggleColorMode}
          color="yellow.300"
          icon={<SunIcon />}
          variant="solid"
          aria-label="Modo Light"
        />
      )}
    </Container>
  )
}

export default ThemeSwitcher
