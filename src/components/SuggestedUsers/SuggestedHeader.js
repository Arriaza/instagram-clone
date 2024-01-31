import { Avatar, Flex, Text } from "@chakra-ui/react"
import { Link, Link as RouterLink } from "react-router-dom"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} >
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          Joshua Arriaza
        </Text>
      </Flex>

      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        style={{ textDecoration: "none", color: "#4299E1" }}
        cursor={"pointer"}>
          Log out
      </Link>

    </Flex>
  )
}

export default SuggestedHeader