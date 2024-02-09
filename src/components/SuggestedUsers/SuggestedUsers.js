import { Box, Flex, Spinner, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import { Link } from "react-router-dom"
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import useSearchUser from "../../hooks/useSearchUser";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers()
  const { setUser } = useSearchUser()

  if (isLoading ) {
    return (
      <Flex justify="center" align="center" h="300px">
        <Spinner  thickness="2px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Flex>
    )
  }

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"} >
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>

          <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
            See All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map(user => (
        <SuggestedUser key={user.id} user={user} setUser={setUser} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link to="https://www.facebook.com/andrearrriaza125/" target="_blank" style={{ color: "#4299E1" }} fontSize={14}>
          Joshua Arriaza
        </Link>

      </Box>

    </VStack>
  )
}

export default SuggestedUsers