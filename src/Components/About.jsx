import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
        id="about"
        className="about section"
      >
        About me
      </Text>
      <Flex
        height={{ base: "100%", md: "60vh", lg: "100%" }}
        width="85%"
        margin="auto"
        id="about"
        flexDir={{ base: "column", md: "row", lg: "row" }}
        alignItems={"center"}
      >
        <Box
          data-aos="fade-right"
          width={{ base: "100%", md: "50%", lg: "35%" }}
          marginTop={"30px"}
        >
          <Image
            className="home-img"
            margin="auto"
            // border="1px solid grey"
            borderRadius="50%"
            boxShadow={"-2px -2px 5px #fff, 2px 2px 5px #babecc"}
            // src="https://www.alwin.io/images/wazirx/banner_img.webp"
            src="https://i.ibb.co/MgTvvVN/avtar.jpg"
          />
          {/* https://avatars.githubusercontent.com/u/106812942?v=4 */}
        </Box>
        <Box
          padding={{ base: "0px", md: "40px", lg: "50px" }}
          marginTop={{ base: "30px", md: "20px", lg: "30px" }}
          alignItems="center"
          alignContent="center"
          height="100%"
          width={{ base: "100%", md: "50%", lg: "65%" }}
          fontSize={"1.3rem"}
          data-aos="fade-left"
        >
          A passionate and experienced Full Stack Developer skilled in the MERN
          stack. Passion and diligence are two traits that best reflect me as an
          individual. I believe enthusiasm, patience, and positivity are key to
          bringing about meaningful change. I am actively ready to join a
          dynamic and lively startup team, adapt to any situation and
          environment with ease, and perform at my best. Additionally, I am keen
          to contribute to innovative Web3 projects, leveraging my expertise in
          blockchain development, smart contracts, and decentralized
          applications (dApps). My strong problem-solving abilities and
          dedication to continuous learning make me an ideal fit for developing
          cutting-edge solutions.
        </Box>
      </Flex>
    </>
  );
};

export default About;
//about
