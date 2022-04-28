import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import {
  Button,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

export default function TopBarComponent() {
  return (
    <div>
      <Flex>
        <Center bg="#021E43" w="100%" h="5em" color="black" pl="2em" pr="2em">
          <Box>
            {" "}
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<ChevronDownIcon />}
                background="transparent"
                color="white"
              >
                Linguagem
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>Português</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/120/120"
                    alt="Simon the pensive"
                    mr="12px"
                  />
                  <span>English</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box>
            <Icon as={SearchIcon} color="white" />
          </Box>
        </Center>
      </Flex>
    </div>
  );
}
