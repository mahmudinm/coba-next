import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import { 
  Container,
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Text,
  Image
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Box backgroundColor="cyan" py="3" width="100%">
        <Container maxW="container.xl">
          <Flex>
            <Box>
              <Button colorScheme="teal" variant="solid">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Button>
            </Box>
            <Spacer />
            <Box>
              <Button colorScheme="teal" variant="solid" mr="2">
                <Link href="/">
                  <a>Login</a>
                </Link>
              </Button>
              <Button colorScheme="teal" variant="solid">
                <Link href="/">
                  <a>Register</a>
                </Link>
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box h="500" backgroundColor="#f5f9fe" py="10" >
        <Container maxW="container.xl">
          <Heading as="h1" mt="24">Website dan Undangan <br/> pernikahan Digital</Heading>
          <Text mt="2">Solusi pernikahan lebih hemat, praktis, dan kekinian <br/>dengan e-invitation yang disebar otomatis untuk memberikan kesan terbaik.</Text>
          <Button mt="3" colorScheme="blue">Buat sekarang</Button>
          <Button mt="3" ml="2" colorScheme="blue" variant="outline" >Buat sekarang</Button>
        </Container>
      </Box>
      <Container maxW="container.lg" mt="10">
        <Flex height="500" flexDirection={{ lg: 'row', sm: 'column' }}>
          <Box flex="1" p="10" >
            <Image src="https://wedew.id/themes/wedew/assets/images/home-feature-1.png"/>
          </Box>
          <Box flex="2" p="10" pt="24">
            <Heading as="h3" size="lg">Undangan Digital yang Berkesan</Heading>
            <Text>90% undangan fisik hanya akan dibuang begitu saja. Kami memberikan website sebagai undangan digital yang dapat dikirim melalui WhatsApp atau email secara otomatis!</Text>
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.xl" mt="10">
        <Flex height="500">
          <Box flex="1" p="10">
            Some informational here
          </Box>
          <Box flex="1" p="10" borderWidth="1px" borderRadius="lg">
            Some card here
          </Box>
        </Flex>
      </Container>
      <Flex backgroundColor="#c3c3c3" p="10" color="#" mt="10">
        <Container maxW="container.xl">
          <Box>
            Footer
          </Box>
        </Container>
      </Flex>
    </>
  )
}
