import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { Center, Flex, Spacer } from "@chakra-ui/layout";
import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo_MEPS.png";

export default function NavComponent() {
  return (
    <div>
      <Menu id="menu-mobile">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T">
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex position="absolute" zIndex={2} width="100%" mt="3em" id="navbar">
        <Spacer />
        <Center
          w="170px"
          h="10"
          fontWeight="bold"
          color="#021E43"
          id="navbar-item"
        >
          <Link to="/">História</Link>
        </Center>
        <Spacer />
        <Center
          w="170px"
          h="10"
          fontWeight="bold"
          color="#021E43"
          id="navbar-item"
        >
          <Link to="/produtos">Produtos</Link>
        </Center>
        <Spacer />
        <Center
          w="170px"
          h="10"
          fontWeight="bold"
          color="#021E43"
          id="navbar-item"
        >
          <Link to="/">
            <Image src={logo} alt="Logo MEPS" />
          </Link>
        </Center>
        <Spacer />
        <Center
          w="170px"
          h="10"
          fontWeight="bold"
          color="#021E43"
          id="navbar-item"
        >
          Receitas
        </Center>
        <Spacer />
        <Center
          w="170px"
          h="10"
          fontWeight="bold"
          color="#021E43"
          id="navbar-item"
        >
          Contactos
        </Center>
        <Spacer />
      </Flex>
    </div>
  );
}
