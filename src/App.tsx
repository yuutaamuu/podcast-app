import { ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

import { Top } from "./components/pages/Top";

export default function App() {
  return (
    <ChakraProvider>
      <Top />
    </ChakraProvider>
  );
}
