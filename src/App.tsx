import React from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Top } from "./components/pages/Top";
import { About } from "./components/pages/About";
import { List } from "./components/pages/List";
import { DataProvider } from "./store/storeProvider";

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <DataProvider>
          <Switch>
            <Route exact path="/">
              <Top />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/list">
              <List />
            </Route>
          </Switch>
        </DataProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
