import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Edu.css";
import { Card } from "@chakra-ui/react";
export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "15px" }}
      >
        EXPERIENCE & EDUCATION
      </h1>
      <div class="timeline">

        <div class="container left">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>JR. Software Engineer </h2>
              <h3>Breathvein Technologies Software Solution</h3>
              <p>August 2024- Present, </p>
            </div>
          </Card>
        </div>
        <div class="container right">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2> React Js Developer </h2>
              <h3> Sky It Solution LLP</h3>
              <p>August 2022 -March 2024, </p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2> Internship / Frontend Developer</h2>
              <h3>Numetry Technology</h3>
              <p> April 2022 - Jule 2022</p>
            </div>
          </Card>
        </div>

        <div class="container right">
          <Card>
            <Card>
              <div class="content" data-aos="flip-down">
                <h2>Batchelor Of Computer Science</h2>
                <h3>Punyshlok Ahilyadevi Holkar Solapur Univercity Solapur ,Solapur</h3>
                <p>july 2019 - sep 2022</p>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}
