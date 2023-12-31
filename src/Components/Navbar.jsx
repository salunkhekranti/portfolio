import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
  Link,
  Divider,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { animateScroll as scroll } from "react-scroll";
import Resume from "./Resume/UpdatedResume-31Dec.pdf";
import Sidebar from "./Sidebar";
import "animate.css/animate.min.css";
import AOS from "aos";
import styled from "styled-components";

const Logo = styled.div`
  //   font-family: "Philosopher", sans-serif;
  color: ${(props) => props.theme.fontColorPrimary};
  &:hover {
    color: ${(props) => props.theme.socialIconColor};
  }

  span:nth-child(1) {
    font-weight: bold;
    // font-size: 2rem;
    font-size: 24px;
  }
  span:nth-child(2) {
    font-family: "Agustina Regular";
    font-weight: bold;
    font-variant-ligatures: no-common-ligatures;
    -webkit-font-variant-ligatures: no-common-ligatures;
    padding: 0 10px;
    // font-size: 1.2rem;
    font-size: 24px;
    cursor: pointer;
    color: ${(props) => props.theme.fontColorPrimary};
    letter-spacing: 0.2em;
  }
  span:nth-child(3) {
    font-weight: bold;
    // font-size: 2rem;
    font-size: 24px;
  }
  line-height: 1.5em;

  @media (max-width: 768px) {
    span:nth-child(1) {
      font-size: 24px;
    }
    span:nth-child(2) {
      font-size: 24px;
    }
    span:nth-child(3) {
      font-size: 24px;
    }
    line-height: 1.5em;
  }
  @media (max-width: 640px) {
    span:nth-child(1) {
      font-size: 20px;
    }
    span:nth-child(2) {
      font-size: 20px;
    }
    span:nth-child(3) {
      font-size: 20px;
    }
    line-height: 1.2em;
  }

  @media (max-width: 445px) {
    span:nth-child(1) {
      font-size: 16px;
    }
    span:nth-child(2) {
      font-size: 16px;
    }
    span:nth-child(3) {
      font-size: 16px;
    }
    line-height: 1.1em;
  }
`;
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <>
      <div>
        <Helmet>
          <title>{`Ashwini | ${title}`}</title>
        </Helmet>
      </div>
      <Box
        id="nav-menu"
        pos={"sticky"}
        zIndex="7"
        top="0"
        textTransform={"capitalize"}
        // bg={"white"}
        opacity={"0.8"}
      >
        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >
          <Box marginLeft={{ base: "2px", lg: "2rem" }}>
            <Logo onClick={() => scroll.scrollToTop()}>
              <span class="grey-color"> &lt;</span>
              <span class="logo-name">Ashwini Nagargoje</span>
              <span class="grey-color">/&gt;</span>
            </Logo>
          </Box>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"50%"}
            justify="space-around"
            align={"center"}
            marginRight="2rem"
          >
            <Link
              onClick={() => setTitle("Home")}
              href="#home"
              className="nav-link home"
            >
              home
            </Link>
            <Link
              onClick={() => setTitle("About")}
              href="#about"
              className="nav-link about"
            >
              about
            </Link>
            <Link
              onClick={() => setTitle("Skills")}
              href="#skills"
              className="nav-link skills"
            >
              skills
            </Link>
            <Link
              onClick={() => setTitle("Projects")}
              href="#projects"
              className="nav-link projects"
            >
              projects
            </Link>
            <Link
              onClick={() => setTitle("Contact")}
              href="#contact"
              className="nav-link contact"
            >
              contact
            </Link>

            <Button
              width="max-content"
              colorScheme={"red"}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1GHjBaSgCKpSB73A50-bNVYulySYCpWNx?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
                href={Resume}
                target="_blank"
                download="Md_Faizan_Resume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: "none" }} marginRight="10px">
            <Sidebar />
          </Box>
        </Flex>
        <Divider borderColor="grey.500" />
      </Box>
    </>
  );
};

export default Navbar;
