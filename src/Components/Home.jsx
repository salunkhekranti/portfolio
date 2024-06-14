import { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "./Home.css";
import "aos/dist/aos.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineDownload } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Resume from "./Resume/AshwiniResume.pdf";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <>
      <Flex
        height={{ base: "80vh", lg: "100vh" }}
        maxHeight={"750px"}
        className="background"
        id="home"
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={"center"}
        justify="center"
        fontSize={"1.3rem"}
        gap={{ base: "4", md: "6", lg: "8" }}
        marginBottom={["40px", "0px", "0px"]}
      >
        <Flex
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          padding={5}
        >
          <Heading id="user-detail-name" fontSize={"2rem"} textAlign={"start"}>
            Hi I am Ashwini Nagargoje
          </Heading>
          <Text fontSize={"1.4rem"} textAlign={"start"}>
            <Typewriter
              options={{
                strings: ["Full stack web developer", "Software developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <Text textAlign={"start"} fontSize={"1.1rem"}>
            I am an experienced full stack and Web3 developer skilled in the
            MERN stack , Wallet integration (MetaMask, WalletConnect), Web3.js / Ethers.js, with a strong foundation in blockchain development,
            smart contracts, and dApps. My freelancing background showcases my
            adaptability and expertise. I am eager to join a forward-thinking
            startup to contribute to innovative Web3 projects and help shape the
            future of the decentralized web.
          </Text>
          <Flex gap={"8"} align="center">
            <Button
              width="max-content"
              colorScheme={"red"}
              id="resume-button-2"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1GHjBaSgCKpSB73A50-bNVYulySYCpWNx?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-2"
                href={Resume}
                target="_blank"
                rel="noreferrer"
                download="AshwiniResume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            {/* "https://drive.google.com/drive/folders/1GHjBaSgCKpSB73A50-bNVYulySYCpWNx?usp=sharing" */}
            <Flex gap="3">
              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/ashwini-nagargoje-259b5122b/"
                isExternal
              >
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-github"
                href="https://github.com/Ashwininagargoje703"
                isExternal
              >
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-email"
                href="https://ashwininagargoje703@gmail.com"
                isExternal
              >
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
            <Link href="#about" className="nav-link about">
              <Flex align={"center"} gap="2">
                <span>
                  <BsMouse fontSize={"1.4rem"} />
                </span>
                <Text>scroll down</Text>
                <span>
                  <AiOutlineArrowDown />
                </span>
              </Flex>
            </Link>
          </Box>
        </Flex>
        <Box
          data-aos="fade-up-left"
          height={{ base: "200px", md: "300px", lg: "400px" }}
          overflow="hidden"
          className="profile"
        >
          <Image
            className="animated-image"
            src="https://www.alwin.io/images/wazirx/banner_img.webp"
            borderRadius="1.5rem"
            height="100%"
            marginTop={"5px"}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
