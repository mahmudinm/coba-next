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
      <Flex backgroundColor="blue.100" px="10">
        <Box flex="20%" m="10px" textAlign="center" backgroundColor="grey">1</Box>
        <Box flex="70%" m="10px" textAlign="center" backgroundColor="grey">1</Box>
        {/* <Box flex="20%" m="10px" textAlign="center" backgroundColor="grey">1</Box> */}
      </Flex>
    </>
  )
}
