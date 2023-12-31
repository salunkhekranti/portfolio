import React from "react";
import styled from "styled-components";

import "animate.css/animate.min.css";
import AOS from "aos";
import {
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
export default function MiniPro() {
  let arr = [
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253805221-728fdb9e-b7e2-489c-9364-8cc527fd1a4e.png",
      name: "Cobra's Revenge",
      show: true,
      live: "https://snackf.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253805544-cd5ef2f3-2bf2-47b4-a157-6f85bc6645d6.png",
      name: "User Management System",
      show: true,
      live: "https://usermanagementsystemfaizan.netlify.app/",
      github: "",
    },
    {
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/106812942/265500903-014dd368-21f0-4c72-8686-ad70aa52d036.png",
      name: "Github User Search",
      show: true,
      live: "https://githubusersearchfz.netlify.app/",
      github: "",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "5px" }}
      >
        React Native Projects
      </h1>
      <SimpleGrid columns={[2, 3, 5]} spacing="40px">
        {arr.map((ele, i) => (
          <Card key={i} maxW="100%" className="animation" data-aos="zoom-out">
            <CardBody>
              <Image
                className="img"
                src={ele.image}
                alt={ele.name}
                borderRadius="lg"
              />
            </CardBody>
            <Text fontSize={"xl"}>{ele.name}</Text>
            <Divider />
            <HStack p={"5"} justifyContent={"center"}>
              <Button variant="solid">
                <a href={ele.live} rel="noreferrer" target="_blank">
                  Live
                </a>
              </Button>
            </HStack>
          </Card>
        ))}
      </SimpleGrid>
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 50px;
  width: 95%;

  margin: auto;
  .img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
