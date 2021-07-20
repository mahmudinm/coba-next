
import { 
    Container,
    Flex,
    Spacer,
    Box,
    Button,
    Heading,
    Text,
    Image,
    Icon,
    chakra
} from '@chakra-ui/react'

export default function Coba () {
    return (
        <Flex
            w="full"
            bg="gray.600"
            p={50}
            alignItems="center"
            justifyContent="center"
            >
            <Flex
                maxW="sm"
                w="full"
                mx="auto"
                bg="white"
                shadow="md"
                rounded="lg"
                overflow="hidden"
            >
                <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
                <Icon as="i" color="white" boxSize={6} />
                </Flex>

                <Box mx={-3} py={2} px={4}>
                <Box mx={3}>
                    <chakra.span
                    color="green"
                    fontWeight="bold"
                    >
                    Success
                    </chakra.span>
                    <chakra.p
                    color="gray"
                    fontSize="sm"
                    >
                    Your account was registered!
                    </chakra.p>
                </Box>
                </Box>
            </Flex>
        </Flex>
    )
}