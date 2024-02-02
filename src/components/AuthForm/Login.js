import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"

const Login = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

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
        type="email"
        name="email"
        size={"sm"}
        onChange={handleInputChange}
      />
      <Input
        value={inputs.password}
        placeholder="Password"
        fontSize={14}
        type="password"
        name="password"
        size={"sm"}
        onChange={handleInputChange}
        />

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>

    </>
  )
}

export default Login