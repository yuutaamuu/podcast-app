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
import { memo } from "react";

export const Header = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex justify="space-between" p={6} bg="cyan.600">
        <Button
          as="h1"
          bg="none"
          color="white"
          fontSize="2xl"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          Spotifiy
        </Button>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <Button bg="none" color="white">
            TOP
          </Button>
          <Button bg="none" color="white">
            サービスについて
          </Button>
          <Button bg="none" color="white">
            一覧
          </Button>
          <Button bg="none" color="white">
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
              <Button bg="none" color="gray">
                TOP
              </Button>
              <Button bg="none" color="gray">
                サービスについて
              </Button>
              <Button bg="none" color="gray">
                一覧
              </Button>
              <Button bg="none" color="gray">
                登録
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
