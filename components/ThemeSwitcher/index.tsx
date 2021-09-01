import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Container, IconButton, useColorMode } from '@chakra-ui/react'
import { NextComponentType } from 'next'

const ThemeSwitcher: NextComponentType = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      {colorMode === 'light' ? (
        <IconButton
          my={1}
          isRound
          onClick={toggleColorMode}
          color="gray.800"
          icon={<MoonIcon />}
          variant="outline"
          aria-label="Modo Dark"
          size="sm"
        />
      ) : (
        <IconButton
          my={1}
          isRound
          onClick={toggleColorMode}
          color="yellow.300"
          icon={<SunIcon />}
          variant="solid"
          aria-label="Modo Light"
          size="sm"
        />
      )}
    </Container>
  )
}

export default ThemeSwitcher
