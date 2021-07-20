import { useState } from 'react';
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
  HStack,
  VStack,
  Icon,
  Collapse,
  useColorModeValue,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { FiMenu, FiSearch } from "react-icons/fi";

export default function Dashboard() {

  const integrations = useDisclosure();
  const menu = useDisclosure();
  const sidebar = useDisclosure();
  
  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="5"
        py="2"
        cursor="pointer"
        _hover={{
          bg: "gray.700",
          color: "gray.100",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        fontWeight="semibold"
        {...rest}
      >
        {children}
      </Flex>
    )
  }

  return (
    <Box 
      minH="100vh"
      backgroundColor="gray.300"
    >
      <Box>
        <Box
          as="nav"
          pos="fixed"
          backgroundColor="gray.600"
          borderColor="gray.500"
          borderRightWidth="1px"
          zIndex="sticky"
          height="100vh"
          top="0"
          left="0"
          overflowX="hidden"
          overflowY="auto"
          pb="10"
          w="60"
          display={{ base: 'none', md: 'block' }}
          transform={sidebar.isOpen ? 'translateX(-15rem)' : ''}
          transition="all .5s ease"
        >
          <Flex align="center" mt="5" pl="4">
            <Heading textColor="whiteAlpha.900">
              Choc UI
            </Heading>
          </Flex>

          <Flex
            mt="5"
            direction="column"
            as="nav"
            fontSize="sm"
            color="whiteAlpha.900"
            aria-label="Main Navigation"
          >
            <NavItem>Home</NavItem>
            <NavItem>Article</NavItem>
            <NavItem>Users</NavItem>
            <NavItem>Checklist</NavItem>
            <NavItem onClick={integrations.onToggle}>
              Integrations
              <Icon
                as={MdKeyboardArrowRight}
                ml="auto"
              />
            </NavItem>
            <Collapse in={integrations.isOpen} animateOpacity>
              <NavItem pl="8" py="2">
                Shopify
              </NavItem>
              <NavItem pl="8" py="2">
                Slack
              </NavItem>
              <NavItem pl="8" py="2">
                Zapier
              </NavItem>
            </Collapse>
            <NavItem>Users</NavItem>
            <NavItem onClick={menu.onToggle}>
              Menu
              <Icon
                as={MdKeyboardArrowRight}
                ml="auto"
              />
            </NavItem>
            <Collapse in={menu.isOpen} animateOpacity>
              <NavItem pl="8" py="2">
                Add Users
              </NavItem>
            </Collapse>
            <NavItem>Checklist</NavItem>
          </Flex>
        </Box>
      </Box>
      <Box 
        ml={{ base: 0, md: sidebar.isOpen ? 0 : 60 }}
        // transition=".3s ease"
        // transform={sidebar.isOpen ? 'margin-right(-15rem)' : ''}
        transition="all .5s ease"
      >
        <Flex
          as="header"
          w={sidebar.isOpen ? 'calc(100% + 15rem)' : 'full'}
          backgroundColor="gray.600"
          borderColor="gray.500"
          borderBottomWidth="1px"
          px="4"
          h="14"
          alignItems="center"
          transition="all .5s ease"
        >
          <Flex>
            <IconButton
              onClick={sidebar.onToggle}
              aria-label="Menu"
              icon={<FiMenu />}
              size="sm"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Flex>
            <Box
              p="10"
              flex="1"
              backgroundColor="teal.300"
            >
              1
            </Box>
            <Box
              p="10"
              flex="1"
              backgroundColor="teal.600"
            >
              1
            </Box>
          </Flex>
        </Box>
        
      </Box>
    </Box>
  )
}
