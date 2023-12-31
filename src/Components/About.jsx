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
          A passionate experienced Full Stack Developer skilled in MERN stack,
          moulded and shaped by Masai School's numerous training. Passion and
          diligence are two traits that I believe most reflect me as an
          individual. I’ve been faced with many challenges. Without enthusiasm,
          patience and some degree of positivity, we cannot bring about the
          change that is needed to a better life! Actively ready to join in a
          great lively team of a good start-up to adapt me in any situation and
          environment with ease and perform the best
        </Box>
      </Flex>
    </>
  );
};

export default About;
//about
