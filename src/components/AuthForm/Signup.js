import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
      <Input
        value={inputs.email}
        placeholder="Email"
        fontSize={14}
        type="Email"
        name="email"
        size={"sm"}
        onChange={handleInputChange}
      />
      <Input
        value={inputs.username}
        placeholder="Username"
        fontSize={14}
        type="text"
        name="username"
        size={"sm"}
        onChange={handleInputChange}
      />
      <Input
        value={inputs.fullName}
        placeholder="Full Name"
        fontSize={14}
        type="text"
        name="fullName"
        size={"sm"}
        onChange={handleInputChange}
      />

      <InputGroup>
        <Input
          value={inputs.password}
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          name="password"
          size={"sm"}
          onChange={handleInputChange}
        />

        <InputRightElement h={"full"}>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>

      </InputGroup>

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign Up
      </Button>

    </>
  )
}

export default Signup