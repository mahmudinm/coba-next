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
  Image,
  HStack,
  Center
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Box py="5" flex="1">
        <Container maxW="1200">
          <Flex>
            <HStack>
              <Link href="/">
                <a>Wedew</a>
              </Link>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/">
                <a>Portofolio</a>
              </Link>
              <Link href="/">
                <a>Harga</a>
              </Link>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </HStack>
            <Spacer />
            <HStack>
              <Link href="/">
                <a>Login</a>
              </Link>
              <Link href="/">
                <a>Daftar</a>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Box background="#f6f8ff" height="650px" mt="-100px" overflow="hidden">
        <Container maxW="1200">
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box flex="2" mt="270px">
              <Heading as="h1">
                Website dan Undangan <br/> Pernikahan Digital
              </Heading>
              <Text mt="3">
                Solusi pernikahan lebih hemat, praktis, dan kekinian dengan e-invitation yang <br/>disebar otomatis untuk memberikan kesan terbaik.
              </Text>
              <HStack mt="5">
                <Button width="200px" backgroundColor="#4299E1" color="white" boxShadow="lg">
                  <Center>Buat Sekarang</Center>
                </Button>
                <Button width="200px" variant="outline" borderColor="#4299E1" color="#4299E1">
                  <Center>Lihat Video</Center>
                </Button>
              </HStack>
            </Box>
            <Box flex="1" mt="270px">
              <Image src="/images/wedew/hero-image.png" ml="150" transform="rotate(-25deg) scale(2)"/>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Container maxW="1200" >
        <Flex mt="60px" justifyItems="center">
          <Box flex="1">
            <Image src="/images/wedew/home-feature-1.png"/>
          </Box>
          <Box flex="2" mt="80px" ml="60px">
            <Heading size="lg">Undangan Digital yang Berkesan</Heading>
            <Text mt="10px">
              90% undangan fisik hanya akan dibuang begitu saja. Kami memberikan website sebagai undangan digital yang dapat dikirim melalui WhatsApp atau email secara otomatis!
            </Text>
          </Box>
        </Flex>
        <Flex mt="60px" px="130px">
          <Box flex="2" mt="80px" ml="60px">
            <Heading size="lg">Lebih Dekat dengan Para Tamu</Heading>
            <Text mt="10px">Tamu undangan dapat melakukan konfirmasi kedatangan (RSVP), memberi doa atau ucapan yang semua akan tercatat secara online.</Text>
          </Box>
          <Box flex="1">
            <Image src="/images/wedew/home-feature-2.png"/>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
