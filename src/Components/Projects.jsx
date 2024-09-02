import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  let projectsarr = [
    {
      anim: "flip-right",
      image: "https://i.ibb.co/hm40MmC/Whats-App-Image-2024-06-14-at-4-44-46-PM.jpg",
      name: "GamingTheme",
      dis: "Play Earn & Explore",
      tstack: "Web3  | JavaScript | ReactJS| NodeJS | CSS",
      github: "https://web-cf.netlify.app/",
      link: "https://github.com/Blockmagixofficial/CFI/tree/ketan",
    },
    {
      "anim": "flip-right",
      "image": "https://i.ibb.co/hgLq1Vm/Whats-App-Image-2024-06-14-at-4-16-15-PM.jpg",
      "name": "catoncreationstudio",
      "description": "Showing 3D model, images and update portfolio and blogs",
      "pro": "Freelancing - Project",
      "tstack": "JavaScript | ReactJS | NodeJS | CSS | EDC",
      "github": "https://catoncreationstudio.in/",
      "link": "https://catoncreationstudio.in/"
    },
    {
      anim: "flip-right",
      image: "https://i.ibb.co/THBCyNW/game.jpg",
      name: "GameOcrat",
      dis: "GameOcrat Project Web3 nd Gaming",
      tstack: "Web3  | JavaScript | ReactJS| NodeJS | CSS",
      github: "https://github.com/Blockmagixofficial/GameOcrate-Frontend/tree/web3",
      link: "https://gameocrat.netlify.app/",
    },
  




    // {
    //   anim: "flip-right",
    //   image: "https://i.ibb.co/3vmvs02/Whats-App-Image-2024-06-14-at-4-50-04-PM-1.jpg",
    //   name: "Block-Tour",
    //   dis: "Empowering Your Web3 Presence",
    //   tstack: "Web3  | JavaScript | ReactJS| NodeJS | CSS",
    //   github: "https://coinband.netlify.app/",
    //   link: "https://coinband.netlify.app/",
    // },


    

    // {
    //   "anim": "zoom-in",
    //   "image": "https://i.ibb.co/T0dQrYC/Whats-App-Image-2024-06-14-at-3-52-33-PM.jpg",
    //   "name": "3D-Portfolio",
    //   "dis": "A modern and sleek portfolio designed using Next.js, featuring advanced animations and transitions. ",
    //   "pro": "Freelancing - Project",
    //   "tstack": "Next.js | CSS | JS",
    //   "github": "https://github.com/Ashwininagargoje703/ak-portfolio",
    //   "link": "https://ak-portfolio-3d.netlify.app/"
    // },

    // {
    //   "anim": "flip-right",
    //   "image": "https://i.ibb.co/VMyNJt9/Whats-App-Image-2024-06-14-at-3-44-12-PM.jpg",
    //   "name": " PortFolio",
    //   "dis": "A visually appealing and interactive portfolio built using React Spring for smooth animations. This project showcases the power of ReactJS combined with CSS and JavaScript to create a dynamic and engaging user experience.",
    //   "pro": "Freelancing - Project",
    //   "tstack": "ReactJS | CSS | JS",
    //   "github": "https://github.com/Ashwininagargoje703/mk-portfolio",
    //   "link": "https://megha-k-portfolio.netlify.app/"
    // },

    // {
    //   anim: "flip-right",
    //   image:
    //     "https://i.ibb.co/8YBwss5/Whats-App-Image-2023-12-31-at-7-27-03-PM.jpgs",
    //   name: "Ecommarce-Website",
    //   dis: "An e-commerce website for users to buy and sell products.",
    //   pro: "Individuel - Project",
    //   tstack: "ReactTs | TypeScript | Tailwind CSS | RestFull API",
    //   github: "https://github.com/Ashwininagargoje703/Ecommarce-WebSite",
    //   link: "https://ecommarce-web-site.vercel.app/",
    // },

    // {
    //   anim: "zoom-in",
    //   image:
    //     "https://i.ibb.co/XsGpDzw/Whats-App-Image-2023-10-26-at-1-56-40-PM.jpg",
    //   name: "Hiring Farm",
    //   dis: "Hiring Farm is a job platform for job seekers and employers, offering the ability to postand apply for positions.",
    //   pro: "Group Project (2 Members)",
    //   tstack: "ReactJs | HTML | CSS | JS | Axios | MUI | Node.JS | MongoDB",
    //   github: "https://catoncreationstudio.netlify.app/",
    //   link: "https://catoncreationstudio.netlify.app/",
    // },
    // {
    //   anim: "zoom-in",
    //   image:
    //     "https://i.ibb.co/CbhNJvL/Whats-App-Image-2023-12-17-at-4-39-31-PM.jpg",
    //   name: "Fruits Store",
    //   dis: "A responsive fruit store with dynamic product filtering and sorting using ReactJs, Tailwind CSS, and JavaScript.",
    //   pro: "Individuel - Project",
    //   tstack: "React | Tailwind CSS | JSON | Axios | React-Router-Dom",
    //   github: "https://github.com/Ashwininagargoje703/Fruits-Store",
    //   link: "https://fruits-store-three.vercel.app/",
    // },
    // {
    //   anim: "flip-right",
    //   image: "https://i.ibb.co/RpHJXfj/TheBowl.png",
    //   name: "TheBowlCompany Clone",
    //   dis: "This is a clone if The Bowl Company which is about dishes offered by swiggys new platform that offers food in a special Bowl",
    //   pro: "Group Project (5 Members)",
    //   tstack: "HTML | CSS | JavaScript | NodeJS | Bootstrap",
    //   github: "https://github.com/MadhanM282/the-bowl-company",
    //   link: "https://the-bowl-company.vercel.app/",
    // },
    
  ];

  return (
    <DIV className="top" id="projects">
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "5px" }}
      >
        PROJECTS
      </h1>

      <div>
        {projectsarr.map((ele, i) => (
          <div className="animation project-card" data-aos={ele.anim}>
            <div className="pro-img">
              <img src={ele.image} data-aos="fade-up-right" alt="pro_img" />
            </div>
            <div className="pro-dis">
              <h1
                className="title-pro project-title"
                style={{
                  marginBottom: 3,
                }}
              >
                {ele.name}
              </h1>
              <h1 className="project-description" style={{ marginLeft: 2 }}>
                {ele.dis}
              </h1>

              <span style={{ fontSize: "1rem", color: "teal" }}>{ele.pro}</span>

              <h2
                style={{ fontSize: "1rem", color: "#891143", fontWeight: 600 }}
                className="project-tech-stack"
              >
                {ele.tstack}
              </h2>
              <div className="dep-btn">
                <Button data-aos="fade-down-right">
                  <a
                    className="project-github-link"
                    href={ele.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </Button>
                <Button data-aos="fade-down-left">
                  <a
                    className="project-deployed-link"
                    href={ele.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 50px;
  .animation {
    width: 50%;
    height: 100%;
    margin: 20px auto;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;

    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
  }
  /* .animation:hover {
    width: 55%;
    border-radius: 20px;
  } */
  .proj-title {
    font-size: 3rem;
    margin: 5px 0;
  }
  .title-pro {
    font-size: 1.6rem;
  }
  .animation div {
    width: 70%;
  }
  .pro-dis {
    text-align: center;
    justify-content: center;
    line-height: 1.6;
    font-size: 1.1rem;
    margin-left: 10px;
  }
  .dep-btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    gap: 20px;
  }
  img {
    border-radius: 10px;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  img:hover {
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    width: 90%;
    margin: auto;
    .animation {
      display: flex;
      flex-direction: column;
      padding: 0 !important;
      width: 100%;
    }
    .proj-title {
      /* font-size: 1rem; */
      /* margin: 5px 0; */
    }
    .title-pro {
      font-size: 1rem;
    }
    .pro-img {
      width: 95% !important;
      margin-bottom: 15px;
    }
    .pro-img img {
      width: 100%;
    }
    .animation:hover {
      width: 100%;
      border-radius: 20px;
    }
    .pro-dis {
      line-height: 1.2;
      font-size: 0.7rem;
      margin-left: 10px;
    }
  }
`;
// {
//   anim: "",
//   image: "",
//   name: "",
//   dis: "",
//   pro: "",
//   tstack: "",
//   github: "",
//   link: "",
// },
