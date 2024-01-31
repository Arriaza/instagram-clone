import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false)

  const handleFollowed = () => {
    setIsFollowed(!isFollowed)
  }

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
      </Flex>
      <VStack spacing={2} alignItems={"flex-start"}>
        <Box fontSize={12} fontWeight={"bold"}>
          {name}
        </Box>
        <Box fontSize={11} color={"gray.500"}>
          {followers} followers
        </Box>
      </VStack>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={handleFollowed}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>

    </Flex>
  )
}

export default SuggestedUser