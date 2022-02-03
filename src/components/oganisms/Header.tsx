import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";

export const Header = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/"), [history]);
  const onClickAbout = useCallback(() => history.push("/about"), [history]);
  const onClickList = useCallback(() => history.push("/list"), [history]);
  const onClickRegi = useCallback(() => history.push("/register"), [history]);
  return (
    <>
      <Flex justify="space-between" p={6} bg="cyan.600">
        <Button
          onClick={onClickHome}
          as="h1"
          bg="none"
          color="white"
          fontSize="2xl"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          Spotifiy
        </Button>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <Button onClick={onClickHome} bg="none" color="white">
            TOP
          </Button>
          <Button onClick={onClickAbout} bg="none" color="white">
            サービスについて
          </Button>
          <Button onClick={onClickList} bg="none" color="white">
            一覧
          </Button>
          <Button onClick={onClickRegi} bg="none" color="white">
            登録
          </Button>
        </Flex>
        <Button
          bg="none"
          color="white"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        >
          <HamburgerIcon />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton autoFocus={false} />
          <DrawerBody py={12}>
            <Flex flexDirection="column">
              <Button onClick={onClickHome} bg="none" color="gray">
                TOP
              </Button>
              <Button onClick={onClickAbout} bg="none" color="gray">
                サービスについて
              </Button>
              <Button onClick={onClickList} bg="none" color="gray">
                一覧
              </Button>
              <Button onClick={onClickRegi} bg="none" color="gray">
                登録
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
