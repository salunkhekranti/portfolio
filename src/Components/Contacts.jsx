import {
  Box,
  Button,
  Center,
  HStack,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
export default function Contacts() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div id="contact" style={{ textAlign: "center" }}>
      <h1 className="proj-title" style={{ fontSize: "3rem", marginTop: "5px" }}>
        Contact
      </h1>

      <Box
        py={{ base: 5, sm: 5, md: 8, lg: 10 }}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <HStack
          pl={0}
          spacing={3}
          alignItems="flex-start"
          textAlign={"center"}
          justifyContent={"center"}
        >
          <SimpleGrid columns={[1, null, 3]} spacing="40px">
            <Button
              size="md"
              id="contact-phone"
              height="48px"
              variant="ghost"
              // color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdPhone color="green" size="20px" />}
              data-aos="zoom-in-up"
            >
              +91-9156626051
            </Button>
            <Button
              size="md"
              height="48px"
              variant="ghost"
              // color="#DCE2FF"
              id="contact-email"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdEmail color="#1970F1" size="20px" />}
              data-aos="zoom-in-up"
            >
              salunkhekr2112@gmail.com
            </Button>
            <Button
              size="md"
              height="48px"
              variant="ghost"
              // color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdLocationOn color="red" size="20px" />}
              data-aos="zoom-in-up"
            >
              Pune Maharashtra, India
            </Button>
          </SimpleGrid>
        </HStack>

        <Center>
          <HStack
            mt={{ lg: 10, md: 10 }}
            spacing={5}
            px={5}
            alignItems="flex-start"
          >
            <Link
              id="contact-linkedin"
              href="https://www.linkedin.com/in/ashwini-nagargoje-259b5122b/"
              isExternal
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <ImLinkedin fontSize={"1.6rem"} />
            </Link>
            <Link
              id="contact-github"
              href="https://github.com/Ashwininagargoje703"
              isExternal
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <FaGithub fontSize={"1.6rem"} />
            </Link>
            <Link
              id="contact-email"
              href="https://ashwininagargoje703@gmail.com"
              isExternal
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <HiOutlineMail fontSize={"1.6rem"} />
            </Link>
          </HStack>
        </Center>
      </Box>
    </div>
  );
}
