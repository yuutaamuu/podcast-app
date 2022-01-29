import { ChakraProvider, Text } from "@chakra-ui/react";
import "./styles.css";

import { Top } from "./components/pages/Top";
import { DataProvider } from "./store/storeProvider";

export default function App() {
  return (
    <ChakraProvider>
      <DataProvider>
        <Top />
      </DataProvider>
    </ChakraProvider>
  );
}
