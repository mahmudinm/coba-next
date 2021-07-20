import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import {
  jsx,
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
  HStack,
  Input,
  Icon,
  VStack
} from '@chakra-ui/react'
import {
  MdInsertEmoticon
} from 'react-icons/md'
import { 
  FiUser, 
  FiBell, 
  FiChevronLeft, 
  FiChevronRight,
  FiHeart,
  FiMessageCircle,
  FiMoreVertical
} from "react-icons/fi";

export default function Kumparan() {
  return (
    <Box 
      minH="100vh"
      backgroundColor="#f7f7f7"
    >
      <Box
        h="auto"
        w="full"
        backgroundColor="white"
        boxShadow="md"
      >
        <Container maxW="container.lg" px="0px">
          <Flex 
            alignItems="center" 
            py="10px"
          >
            <Box>
              <Heading fontSize="3xl">KUMPARAN</Heading>
            </Box>
            <Box ml="30px">
              <Input 
                mt="2px"
                borderRadius="33px"
                placeholder="Cari di sini..." />
            </Box>
            <Spacer/>
            <HStack spacing="38px">
              <Icon
                as={FiBell}
                w={5}
                h={5}
              />
              <Icon
                as={FiUser}
                w={5}
                h={5}
              />
              <Button
                backgroundColor="teal.400"
                color="white"
                fontSize="16px"
                px="10px"
                py="12px"
                h="auto"
              >
                Create Story
              </Button>
            </HStack>
          </Flex>
        </Container>
        <Flex h="auto" alignItems="center" justifyContent="center">
          <Box px="8px">
            <Icon
              as={FiChevronLeft}
              w={7}
              h={7}
              color="gray.500"
            />
          </Box>
          <Flex 
            maxWidth="container.lg"
            overflowX="hidden"
          >
            <HStack spacing="0">
              <Button
                background="white"
                px="12px"
                borderColor="red.600"
                borderBottomWidth="4px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Home
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Trending
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Video
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Kumparan+
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Opini & Cerita
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Kabar Daerah
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Peringkat Penulis
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                News
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Tekno Sains
              </Button>
              <Button
                background="white"
                px="12px"
                borderRadius="0px"
                fontWeight="bold"
              >
                Entertaintment
              </Button>
            </HStack>
          </Flex>
          <Box px="8px">
            <Icon
              as={FiChevronRight}
              w={7}
              h={7}
              color="gray.500"
            />
          </Box>
        </Flex>
      </Box>
      <Container
        maxW="container.lg"
      >
        {/* Slider */}

        <Flex mt="100px">
          <Box flex="65%">
            asdasd
          </Box>
          <Box flex="35%" boxShadow="lg">
            <Flex 
              justifyContent="space-between" 
              alignItems="center" 
              p="10px"
              backgroundColor="white"
              borderColor="gray.200"
              borderBottomWidth="1px"
              borderTopRadius="10px"
            >
              <Text fontSize="xl" fontWeight="bold">
                Trending
              </Text>
              <Text color="blue.500" fontSize="sm" >
                Lihat Lainnya
                <Icon
                  as={FiChevronRight}
                  w={5}
                  h={5}
                />
              </Text>
            </Flex>
            <Box 
              h="553px" 
              borderBottomRadius="10px" 
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '7px',
                },
                '&::-webkit-scrollbar-track': {
                  bacgkround: '#f7f7f7',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#bfbfbf',
                },
                // '&::-webkit-scrollbar-thumb:hover': {
                //   background: '#4A5568',
                // },
              }}
            >
              <VStack spacing="2px">
                <Box backgroundColor="white">
                  <Flex>
                    <Box flex="67%" p="10px">
                      <Heading as="h4" fontSize="16px" fontWeight="500" lineHeight="1.5">
                        Imun Sinovac Turun 6 Bulan, Pemerintah Didorong Segera Cari Vaksin untuk Booster
                      </Heading>
                      <Text color="gray.500">
                        kumparanNews
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center" py="5px">
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiHeart}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            0
                          </Text>
                        </Box>
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiMessageCircle}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            1
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            color="gray.500"
                            fontSize="12px"
                            mt="4px"
                          >
                            4 Jam
                          </Text>
                        </Box>
                        <Box>

                          <Icon
                            color="gray.500"
                            as={FiMoreVertical}
                          />
                        </Box>
                      </Flex>
                    </Box>
                    <Box flex="33%" justifyItems="center" p="10px">
                      <Box backgroundColor="gray.300" borderRadius="10px" w="80px" h="80px" float="right">
                      </Box>
                    </Box>
                  </Flex>
                </Box>
                <Box backgroundColor="white">
                  <Flex>
                    <Box flex="67%" p="10px">
                      <Heading as="h4" fontSize="16px" fontWeight="500" lineHeight="1.5">
                        Imun Sinovac Turun 6 Bulan, Pemerintah Didorong Segera Cari Vaksin untuk Booster
                      </Heading>
                      <Text color="gray.500">
                        kumparanNews
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center" py="5px">
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiHeart}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            0
                          </Text>
                        </Box>
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiMessageCircle}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            1
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            color="gray.500"
                            fontSize="12px"
                            mt="4px"
                          >
                            4 Jam
                          </Text>
                        </Box>
                        <Box>

                          <Icon
                            color="gray.500"
                            as={FiMoreVertical}
                          />
                        </Box>
                      </Flex>
                    </Box>
                    <Box flex="33%" justifyItems="center" p="10px">
                      <Box backgroundColor="gray.300" borderRadius="10px" w="80px" h="80px" float="right">
                      </Box>
                    </Box>
                  </Flex>
                </Box>
                <Box backgroundColor="white">
                  <Flex>
                    <Box flex="67%" p="10px">
                      <Heading as="h4" fontSize="16px" fontWeight="500" lineHeight="1.5">
                        Imun Sinovac Turun 6 Bulan, Pemerintah Didorong Segera Cari Vaksin untuk Booster
                      </Heading>
                      <Text color="gray.500">
                        kumparanNews
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center" py="5px">
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiHeart}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            0
                          </Text>
                        </Box>
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiMessageCircle}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            1
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            color="gray.500"
                            fontSize="12px"
                            mt="4px"
                          >
                            4 Jam
                          </Text>
                        </Box>
                        <Box>

                          <Icon
                            color="gray.500"
                            as={FiMoreVertical}
                          />
                        </Box>
                      </Flex>
                    </Box>
                    <Box flex="33%" justifyItems="center" p="10px">
                      <Box backgroundColor="gray.300" borderRadius="10px" w="80px" h="80px" float="right">
                      </Box>
                    </Box>
                  </Flex>
                </Box>
                <Box backgroundColor="white">
                  <Flex>
                    <Box flex="67%" p="10px">
                      <Heading as="h4" fontSize="16px" fontWeight="500" lineHeight="1.5">
                        Imun Sinovac Turun 6 Bulan, Pemerintah Didorong Segera Cari Vaksin untuk Booster
                      </Heading>
                      <Text color="gray.500">
                        kumparanNews
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center" py="5px">
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiHeart}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            0
                          </Text>
                        </Box>
                        <Box>
                          <Icon
                            color="gray.500"
                            as={FiMessageCircle}
                          />
                          <Text
                            ml="2px"
                            as="span"
                            color="gray.500"
                            fontSize="12px"
                          >
                            1
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            color="gray.500"
                            fontSize="12px"
                            mt="4px"
                          >
                            4 Jam
                          </Text>
                        </Box>
                        <Box>

                          <Icon
                            color="gray.500"
                            as={FiMoreVertical}
                          />
                        </Box>
                      </Flex>
                    </Box>
                    <Box flex="33%" justifyItems="center" p="10px">
                      <Box backgroundColor="gray.300" borderRadius="10px" w="80px" h="80px" float="right">
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
