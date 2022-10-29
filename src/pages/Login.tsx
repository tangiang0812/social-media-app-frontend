import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  VStack,
} from "@chakra-ui/react";
import React, { MouseEventHandler, useState } from "react";

const Login: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  const handleClick = () => setShow(!show);

  return (
    <Container centerContent maxW="xl">
      <Box
        width="100%"
        borderRadius={5}
        borderWidth={1}
        padding={4}
        m="40px 0 15px 0"
      >
        <VStack spacing="5px">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter your email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="twitter"
            width="100%"
            color="white"
            style={{ marginTop: 25 }}
            onClick={handleLogin}
            /* isLoading={isLoading} */
          >
            Login
          </Button>
          <div className="mt-3">
            <p className="text-center">
              {" "}
              Don't have an account ? <Link href="/register">Signup</Link>
            </p>
          </div>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;
