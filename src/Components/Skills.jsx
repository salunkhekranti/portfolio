import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Box, Card, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import next from "../assets/next-js.svg"
const sliderData1 = [
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255094159-1381596d-06ae-422b-9321-94903c9c6cb3.png",
    name: "JavaScript",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255093713-fc4acefd-5ae5-469a-ac28-75fff76f758a.png",
    name: "ReactJs",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTyuFXQDDOUPdafq8kkiBQ1Ai-ovU_avXecDIkszkPTeOxZ5R8H8g99xl6vRfQH-w4BA&usqp=CAU",
    name: "Axios",
  },
  {
    image:
      "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
    name: "Redux",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086458-7f6be61d-ffe1-4096-af30-2a39e7b3ed6f.png",
    name: "Type-Script",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLq7oAaEf0OSnwEjISs6UZbZBkbkwIUV7Rw&usqp=CAU",
    name: "React Router",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255087494-28073997-96d4-48ce-9bb6-c46f9cbe48b9.png",
    name: "Node.js",
  },
  {
    image:
      "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    name: "Express.js",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086972-9cb90d62-a556-474f-920f-aba5a0e9684d.png",
    name: "Mongo DB",
  },


  {
    image:
      "https://user-images.githubusercontent.com/106812942/255088544-e2550044-1df8-440b-baf1-6dca2ba9165e.png",
    name: "Telwind CSS",
  },

  {
    image:
      "https://user-images.githubusercontent.com/106812942/255094909-ccb4d46c-a531-42e1-8d6a-300641127a91.png",
    name: "HTML",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255088314-35bd02cd-4771-4156-9409-5f5a4c74155a.png",
    name: "CSS",
  },

  {
    image:
      "https://iconape.com/wp-content/files/dx/352988/png/jest-logo.png",
    name: "Jest",
  },

];

export default function Skills() {
  return (
    <DIV id="skills">
      <h1>Skills</h1>
      <div class="skill-section">
        <div class="skill-list">
          {sliderData1.map((el, index) => {
            return (
              <div
                key={index}
                class="skill-card"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <img src={el.image} alt="CSS" class="skill-image" />
                <Text>{el.name}</Text>
              </div>
            );
          })}
        </div>
      </div>

      <hr />
    </DIV>
  );
}

const DIV = styled.div`
  margin: auto;
  margin-top: 10px;
  height: 100%;
  width: 80%;

  h1 {
    font-size: 3rem;
  }

  .skills-card {
    margin-top: 25px;
  }

  /*  */
  .skill-section {
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    margin: 20px;
    display: inline-block;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 0;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .skill-card {
    border-radius: 10px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    width: 180px;
  }
  .skill-card:hover {
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  }
  .skill-image {
    max-width: 100px;
    height: auto;
    margin: 0 auto 10px;
    border-radius: 20px;
  }

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    .skill-card {
      text-align: center;
      width: calc(50% - 10px);
    }
    .skill-image {
      max-width: 75px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .skill-card {
      width: calc(33.33% - 10px);
    }
  }
`;
