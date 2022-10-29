import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { MouseEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const handleSignup: MouseEventHandler<HTMLButtonElement> = async (event) => {
    console.log(email);
    console.log(name);
    console.log(password);
    event.preventDefault();
    navigate("/home");
  };

  return (
    <Box
      w="680px"
      borderRadius={15}
      borderWidth={1}
      padding={4}
      marginTop={10}
      marginX="auto"
    >
      <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email"
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

        {/* <FormControl id="pic">
        <FormLabel>Profile Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetail(e.target.files[0])}
          placeholder="Upload Picture"
        ></Input>
      </FormControl> */}
        <Button
          colorScheme="twitter"
          width="100%"
          color="white"
          style={{ marginTop: 25 }}
          onClick={handleSignup}
          /* isLoading={isLoading} */
        >
          Signup
        </Button>
        <div className="mt-3">
          <p className="text-center">
            {" "}
            Don't have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </VStack>
    </Box>
  );
};

export default SignUp;
