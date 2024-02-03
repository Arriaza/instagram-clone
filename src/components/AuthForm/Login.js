import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"

const Login = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  const { loading, error, login } = useLogin()

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

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4} >
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} isLoading={loading} onClick={() => login(inputs)}>
        Log in
      </Button>

    </>
  )
}

export default Login