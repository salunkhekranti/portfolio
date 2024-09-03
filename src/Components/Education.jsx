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

      <div class="container right">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>Full Stack Web3 Developer</h2>
              <h3>BlockMagix Bengaluru, Karnataka, India</h3>
              <p>Sept 2023 - Present  </p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>JR. Software Engineer </h2>
              <h3>Perpetulblock Pune</h3>
              <p>August 2022 -august 2023, </p>
            </div>
          </Card>
        </div>
        <div class="container right">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>JR. Frontend Developer </h2>
              <h3>Pawar software solutions Pune</h3>
              <p>Jan 2022 -august 2022, </p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>Full Stack Web Developement</h2>
              <h3>Masai School</h3>
              <p>Oct 2021 - June 2022</p>
            </div>
          </Card>
        </div>

        <div class="container right">
          <Card>
            <Card>
              <div class="content" data-aos="flip-up">
                <h2>Masters Of Computer Aplications</h2>
                <h3>JSPM's RSCOE Tathwade,Pune</h3>
                <p>June 2020 - July 2022</p>
              </div>
            </Card>
          </Card>
        </div>
        <div class="container left">
          <Card>
            <Card>
              <div class="content" data-aos="flip-down">
                <h2>Batchelor Of Computer Aplications</h2>
                <h3>DGCC,Satara</h3>
                <p>july 2017 - May 2020</p>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}
