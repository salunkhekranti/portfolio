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
              <h2>Full Stack Developer and Web3</h2>
              <h3>BlockMagix Bengaluru, Karnataka, India</h3>
              <p>Jan 2024 - Present  </p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>Frontend Developer </h2>
              <h3>AskFundU Delhi, NCR</h3>
              <p>August 2022 -December 2023, </p>
            </div>
          </Card>
        </div>
        <div class="container right">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>Full Stack Web Developement</h2>
              <h3>Masai School</h3>
              <p>Oct 2021 - June 2022</p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card>
            <Card>
              <div class="content" data-aos="flip-up">
                <h2>BTech in Electrical Engineering</h2>
                <h3>Dr. Babasaheb Ambedkar Technological University</h3>
                <p>June 2018 - July 2021</p>
              </div>
            </Card>
          </Card>
        </div>
        <div class="container right">
          <Card>
            <Card>
              <div class="content" data-aos="flip-down">
                <h2>Diploma in Electrical Engineering</h2>
                <h3>MSBTE, Mumbai</h3>
                <p>july 2015 - May 2018</p>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}
