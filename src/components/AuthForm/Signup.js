import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword"

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const { loading, error, signup } = useSignUpWithEmailAndPassword()

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

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4} >
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => signup(inputs)} isLoading={loading}>
        Sign Up
      </Button>

    </>
  )
}

export default Signup