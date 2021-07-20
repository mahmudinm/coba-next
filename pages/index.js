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
  Grid,
  GridItem,
  HStack
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex background="whitesmoke" py="10px" position="fixed" top="0" width="100%" mb="40px">
        <Container maxW="container.xl">
          <Flex>
            <Box display={{ md: 'flex' }}>
              Logo
            </Box>
            <HStack ml="20px" display={{ base: 'none', md: 'flex' }}>
              <Box>Logo</Box>
              <Box>Logo</Box>
              <Box>Logo</Box>
              <Box>Logo</Box>
            </HStack>
            <Spacer />
            <HStack display={{ base: 'none', md: 'flex' }}>
              <Box>Logo</Box>
              <Box>Logo</Box>
            </HStack>
            <Box display={{ base: 'flex', md: 'none' }}>
              Menu
            </Box>
          </Flex>
        </Container>
      </Flex>

      <Container maxW="container.xl" mt="100px">
        <Flex>
          <Box backgroundColor="green.200" p="10" flex="33%">
            1
          </Box>
          <Box backgroundColor="blue.200" p="10" flex="33%">
            1
          </Box>
          <Box backgroundColor="red.200" p="10" flex="33%">
            1
          </Box>
        </Flex>
        <Flex mt="20px">
          <Box backgroundColor="green.200" p="10" flex="66%">
            1
          </Box>
          <Box backgroundColor="red.200" p="10" flex="33%">
            1
          </Box>
        </Flex>

        <Flex mt="10">
          <Box backgroundColor="green.200" p="10" flex="1">
            1
          </Box>
          <Box backgroundColor="blue.200" p="10" flex="1">
            1
          </Box>
          <Box backgroundColor="red.200" p="10" flex="1">
            1
          </Box>
        </Flex>
        <Flex mt="20px">
          <Box backgroundColor="green.200" p="10" flex="2">
            1
          </Box>
          <Box backgroundColor="red.200" p="10" flex="1">
            1
          </Box>
        </Flex>

        <Flex mt="10" overflowX="auto">
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" margin="10px" width="100px" p="10">
            1
          </Box>
        </Flex>

        <HStack overflowX="auto" mt="10">
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
          <Box backgroundColor="blue.600" width="100px" p="10">
            1
          </Box>
        </HStack>

        <Grid
          templateRows={{ md: 'repeat(2, 1fr)' }}
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          mt="10"
          columnGap="10px"
          rowGap="10px"
        >
          <GridItem>
            <Box background="green.100" p="10">
              1
            </Box>
          </GridItem>
          <GridItem>
            <Box background="green.100" p="10">
              1
            </Box>
          </GridItem>
          <GridItem>
            <Box background="green.100" p="10">
              1
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: '1', md: '2' }}>
            <Box background="green.100" p="10">
              1
            </Box>
          </GridItem>
          <GridItem>
            <Box background="green.100" p="10">
              1
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
