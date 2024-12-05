import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
//import img from "../assets/ketanImage.jpeg";
import img from "../assets/kranti.jpeg";
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
            src={img}
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
          I am a passionate and experienced Full Stack Developer with expertise
          in the MERN stack. Known for my enthusiasm, patience, and positivity,
          I believe these qualities are essential for driving meaningful change.
          I am eager to join a dynamic startup team where I can adapt quickly to
          new environments and deliver my best work. I am particularly excited
          about contributing to innovative Web3 projects, using my skills in
          blockchain development, smart contracts, and dApps. My strong
          problem-solving abilities and commitment to continuous learning make
          me an excellent fit for developing cutting-edge solutions.
        </Box>
      </Flex>
    </>
  );
};

export default About;
//about
