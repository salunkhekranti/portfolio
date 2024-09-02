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
      "https://i.pinimg.com/736x/14/7b/7e/147b7e67367ce66cb5f10886b7120957.jpg",
    name: "Web3",
  },

  
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABZVBMVEX///9WYfczlv8SKD6ZtNB2PRb2hRvkdhuVsc5TX/fq7O1IVff9/f/w9/9QXPctlv/X2v0hkv/e5u9udvjO2uelvNXm8P8AHzlMWPfNYRaPlfntfRvl5/4AJT8AIz8AID+7bCYWFhZ3PRXArZ4AACqNp8IAAACai38AEjDw9Pi0x9x/eXjBxPzv8P5krP+Xxf8AFjLEyM0AACQAChbXwbPIy/xmcPjT5v+nzv+Ei/mbofrL4v/A3P/R3enWaRjD0uNRo//f4f22uvt3f/iWnPqmq/p6tv+hp65faXUlOEzV2NvKztKLUi6coqlqOhuJRxe4YBkdLDyHjvmPwf9Cnf9yfIc3RleBipNkb3pPW2lIMy01Mzt3SS5iOiLHayFtRzOhWypDNziiUxi6bCZUNSm9XRxlSj6uZSrTdB7jrIcvNznLooXiikooJiWxoZeATi/XZQioeVu8noqVVi2HntuQqdVspOGpkFepAAAR9klEQVR4nO2d+UPbRhbH7dggG8vG4rKDI0gJaQwBc2y4Ey5zJ+EOBJKSQNrEu+2m3W3Tv391a0Z6c8ga2SbL94c2IGPr4/fevDdPM1Isdqc73en/SyMdey/3OkaafRpRqWN7Z3dYV2Jnu6PZJxOBOt6o5ULCVKFcePPdMb528GzIc7nZ5yRSU7vlhFeT6lSzT0uY9i7Kqg9Q0/DFXrNPTYhG3ngcFHXVN7d/XJW3y5MEPsNVy6+bfYYhNXXmD0Bc5bPbHI4dO0QHdaUO79zWcJTPOfjMcDy/leG4rdICENekut3s0w2sqQtWAOIqn71s9ikHUsdbTgd1pZZ3bk8hJ58PB+XTVZi+LeE4lQjmoK7KidsQji8vpuvkMxgvWj0cKSUanwrlt63sqrJ3jlQf4+uWnVdBc6R6VN5tzUJOK9HAOVIdUssXLZg5purKECQVhlvOjNvDAvl0TbdY4pgSE4Goyi1lxQ4gAtUgUQm9eLKVYvHCH4OXv1+qA5x4A+/e/+T/deGs2ViupoAyZn/o8OrVuwGmIdXBxIeHV0NDR/5DLTTaACY8GmprO5Ckhx8SgzRIdeDyY61009Y2dAkcvGg2mK09YJi51Ajb2q5KJenjNcmQ6sDRqyupJB1orxzaB15QbpX2xms/obpvEO7fSJJUqkHequF9ONS+AOmwzRDkppOt0ojbgZ3U0MGyzig9fJ8YxGR4p3ZIurFeCLlpoUXcVD7ze+GlTdjWdmiAlJYfovpUkwzVDuyXDe0DvrzbGvOMDv+ZWU5q6saEKbWjMn936L4KdFO1NVJih99JMULTUyUJBTTs6ngokbDQuoQ/o4Sap3qNiHuoSQh4aesSonHoeGoJN+Eh/gowDluY8MhD2DZUQ91UAzzY97zg59tFqHoJdU91jSjVfMeHrv3v0iKEXUmIcN+PeOMa8dB3EBxoEoXRZtPFYiOjqcfAqXmHGlO2EW/8h8CqLaE+Tr5oLp+8kkolIcLENUB4U6KY8CeweH2cTPV2NRHwRTKVTMKEgA3dQJSu/GG4D3mpRphMpkabVdl09ep8BEJfHO5fuflCkpZ9Y23bOxKh9jWuNINPC8Bkkkx41IYz6NkCIZSkAw/hNeSl6mPzI1LJxrtqT8oCTPX2QE2an3BAs3BDCfGSTfs+QC/tTTof01hXtR1U+/weMB8mEiji/gFefFtl9z4TsNDhuEoqtdI4RvRTZTjjo156cCVJGGHJ/rnm2hGaHpoZvyuJfJuN4VuxA9Aa5GAbmoPpwU3NsZmfUD90eGAOpdB7WDVNj8vYgHCUX7iRYX0cTKhF4sGhhBNJ7dDPpasbQq6wqzZ3VIs+c7gBmHJcBiZMHDllqEQkdF7yHm5WOXXpSC8WGJEJ/i4JNnzvB/QROohXg3RCLBwjK+SMEg0YumHCwYc24X1dy4YsZOPfxq8dI4KA2NxCRhJUNOH4ghTvMKHrpKX7jixC52d3tvEBdFN89hRtOHaRAwEkVD84J28RaUZbdn42Lbjszhg/gW7qnR+i4SiWj/rtgYSuk+pxp9H88uF3l/CX6xvdgsisv0TI+N4Pcz0pJdBV0QAE3hb2UrzvdP/zgLrrEC5/UNV3N3hvCnRTYI7POJm6xBrFwC7GZ+TkNSO2S5/e776ybCb9kvj8Z60d7y8+hNwU7GIID8dRViaCCAe/oGffLlmmtH6qGcbDe8QlPi811CWyyJGd2CZ+XyAhBtheKiGgnv/Z+hyk1+YWcqERLUCaz0Md4ct2SCUQzRI0mpJ7bU51HBbRdNFUilZGQISvNLOZQmuXEg5qHrFVC0ToZo5UqFh8YQKOUktBiPCdU5lhmQ/5b8nKkk4B9xG46k/vl5pnl+wNQ2gCMpIrGIc1CUP0XJgxatP71gHLlpfBe94jphFDTBt7UoYFGa+CCAe+uNW1DeIBlHAT1vxvwu55d5kmqJ+w1/iOWLMVOB+6E4hl21TtpZtPh4efbg7b7d+7gNIXaGkKs6tvjDf1DzYjKS4fgLsYyJxp2SAs1f75r38Y+vHX39xf207KW9PgkpM8XkaU6aTMCSdIOHCIIGooGt+zZ//+wdCPX5/9+ltJI0RMKIHtUvaVGTNp1EtopAr2SAXPLX5H5rnSHzrfs2c/WIRPtH//+tsfKOAVuH6KTWhGYr0Jo5djII3Bi9oS6rXrgKXaf3S+Z49+tPTE+PG/h5LzLZRe1Uk4EioQe/mGYmClgo5o9BBLUu3L+6PB8tNHGtLXJ7Z0wCfqoF6AW5Rgy5tnpUIYQpmTEFptogXin1o9c/Xq0lz1Vbj4qjE+sqTb86nu2+qAev3+S017JbzI74ztfo0gjL0FA/Hnj5+PVGctVCHx5BGir2f2pihVHUhc//kKbmLssD+8IYTb4PJZ1bPSa3LHBXyKrydVCWtRebZfNoSQ0DD1WWT3qaULzl1tkxwr9xpCCC1sgxktca4e5lrW1hjCvTAbgcia5tkh1BjC2Fv+zZT84hlnGkY4sitqM4krNcG1mKZBhLE9kdtJTJX5drE1ijC2NymWscC73aJhhLE9Qdu6TE3u8i7xbhxhbIR3czpbhWH+u0k0kFC/w4eYrDF8FmCNfkMJxexADLj7sMGEMfl1IeQu2cmAO0gbTajfLSnERsTCdOC7KzWeUAtH5v1MSCoHCUBLkRLK2WwWdKn6wrG8C26qJH6KqcgI5fxidTadi88urD/wHx0JvqkbvMGJPDdROe1UOk8rE3ONJZTXZzO5dDoej6dzxWJ1xv+Kjp3pIIzqNHSTmvlVRblnSlFWnzeQcCxd1Ols5TLVNf+LXgYIx/IuUIQundp4FuQqZMcoCPPdmbhHueLiuP8NtjnDcRK6HUZfBeczGCvZBhCO92P2s1WMr/vfoeOcw1ULw+f+DJE9UfyAuq9OeINVOOGmNrqAShdn8wDjxTR95qhOQzdtm++E+AzGU084Ciac0WxFVDqzAAyr9Lt9gSWaNwA9jHg4CiVcq2YgB8XC0R8osdcJUo9jUgVKtL4tGp/BuNUXCeH4RpHgoOxwBAs5bY4ELAiaAAPQg9g5HwHhZprioKxwhO6cCJZoz4kBSApHUYQzs1x8BmPmGMgc3nAEA3BulY/PYKzMCSRcW2AEIK5cbtMfXvL2ruOrheHdugIQR1S2soII5UWOAMRVnB0D3nDqfHd4enp6+Ox8CvgGeALQw3hvXgBh8sV6jttBXaUz3UAhF9PvlQx3YJ5TMwSR8XQpzLoog/Av/gD0MvYD4UjQHFCicTKufgtD2PutmgsSgLi0zMHXkCCUaLyq1L9Csfc4FzQAPYyzwLzKp/l7Yfh0/V0n4Vg8HF9cd9UqUMhhopdofILnVSzlq745kp7Pg0LnihtAIecImiPVxYgWclzK9kMsuf6ZaiZw5oAKOVNyuADEEO9NBALMwwGY64/FHmzkwAkiWZqrwiNOnwAHRRhPac7i0RihhEkv6G8ij1UDOmsuDiWOJZF8ujq5o3EGiED7VDeMRJ7vD2bI3Kz/+50TDaghcgbjOO3kc8WqUZBl1+NBIjK34P0U+VQ4oDam8hHO0s9cG08XjRSQXwhgyIx3uAlWZvMinvAAjhF91FExszCjDx7jm7Pchizio00EPmog8vjpLI9dcpnZTX30kLnTR3ET+5RKJIBaXmQD5jkrbc1Zj43Z/INFLmdNx9FP6YvGhNpgw04Z/fzjh2bIdTN9dPO0cNDuxnxUhArc+0ckdwfJAuli2kof7DoAc9MgTqqY4nwx003HgxeeZvoYX2fMJHPHyPfImSo0sNPKycT8/MTJ1iofZYVF+IA9knqlReSmkT4WqYjpqvsp2U4uvNOTJXQEnpuvsCGZtVs+OGFcTx+L+h9XaY6a7nbPto9NqHRuAUVY3wSrlmUONfUR5jL9+h/P0IyIETLb2soE4UxlRkcnCsK0VgCY4yTVxYMQKhVK5pYnaH8tnjBXNHO/SELWkN9H6RyLJsQvcYshVFaZpZdMrmqFEjqDqFBCZZVnJkv0VIGEWkUz5pm7iyBUVvE3leeeT5xoKXHJc+akqkgUYboY7/c3tUUQYoAjzyuKo9MJzHsJVhRDqBekUF9iLHy2UNwrg9qgiV9rU7COGmH+JYDQSA5wa4k68eK0oXuGQOJTkCnuKuvv6yTMFeObhPcYr1JrWt6Rxm62nICvsQdamZQwQhKmi+bkHvpDsMNaB6GJKBNbxUZHLUvMiOEI092EHn12nT3VD5Dx+yiABiIZMCRhrh/8mwcbaY5ZPosQnTYsVRTSIR1i3o1Q32RDPGF2rJuvU8MgVLbm3QmHZ0Hb1oTnte6/TjyHIiDMV4t8PUU6oT5IzsHzYj2BEFKDfsjTOhdLOGPUpOObXM1hKqFiXFcBp41mhgQvAUCHBBJqYMVM3JxXzFSLzIvFNELFunAEINolwBwAaE1BMAMLI8wfZ3TndNL/g0XakjcGoeJcGfNdjnJrHB+iO8eaQ74YMYTj68joYpdw2bE41YwUwk7kCB6LaBHnMbCy5B5CWnciCNc24vjYopfheqKkd7G4bOhpUuFTYYweBUTNG5pQnoGSQzpjNNI26628UVNlkWTnmeujh1BAcXGYXtCGTcAVtZl+nv3H1LEURbQLFpTCRgQARY6lcWh9YjpjXW0LNT/EHNVE9AM6VlSQRqPQfAgIm+mHmQGjl/6MiQMEaCFSAAUTemf6oeb46BUHrfBGAZ/jPoxezPZVAiIJc5luz0w/XBcDR8QCDfPhCmLB5743Ekaopfpj30w/ZJ+GcN1IN5MCr5YB2lGCCPWZPtCoCduJAhFNM4FX6KF+mxBCeKeTAEII0fZD4BDYUAxPqI0ui/DiWBHdRB+HS0E5JJLQvrAdFeE9Bb/CiVJ4EAkt4bCExyTziSLEEXEKyiFRhIQ+jVBC9LqFlwJBjOi6BYuw/roUR5RhQASRfAkxWsINWjODv5uonMowoIMId4v5CNdCEJLXNJqE7isZKxUMR4XNpFRGqIDslQrjtCkelXBtg7HaBFmemGWsNlFWl0gU2iHqor9VQk/e/Wza1RUK4QxzVW1xEXk5c8UQZVkJdcUJx8K2Y8qJkgjHNzmWthXROojmZ6GETqUJol0DBAnlmYUM12o/NEAiWnzJtfwyS+mYAYTj65xLTD1/G8EKYUPMRV8xajvJR5g/5rkmYyiDX7byT+yEiL00UZNM7l7jhFle8+nCxhldhEu4IQF5TEhdqo8Qri3GAyzXT/sW60ezhpZzsf4mCdEhlNnJAQfM+Sv2CBbRcvmooUUCokX4YDOI+XTAIjRjpi5PixZQH21AAp1Qzi9kAm4LKsbhOZdYKypBAEl7t3Mb2QD7D2wDkjeTBtm7zQSkLWeEJK/DJAHNp2UJaH++o3lBm9eUzkAGNDXOWj7CI8rWPOubFLFBTyE0G5nKs+6DwRJje6Wp8Jssg2+vdDXGurBLUxq89RCgcBtltelU3Xya5M3Ae0ZtFeM825xN1R+O6E1A6tT4Ql3hmEszAhBXdqsuRkU5EfGcOeC+UEy+zAb/7QZM1XPTgTABiCvgjSO0AKRlCJJ479zi8J2GCkBc2SA3/wgSgLiC3PzDuO2HSD1Y4Mz14K1beJXl3VmqBWCAnducmunmcFWtRGPdRIGuJa5wVCr13ESBKXm9yGKkl2h8YodjXSUanxg3w8qxSjRObTU2AHFRbmiWzh2negU8InRkNPltldwTN++dFKVI98QqVr/1Cni4tPV4w2+EQi6iAPScw6bfVdPF+F9J1jP2eOQ+ovJvIBwjDEBcvnmVPkfqAJ4UHFTow079dx5S7k1E+ShgXGgnI1fMmXMk/9Oeg8n3bMo+tFhVxJVofFrbnM2YqjrLhkgPDObTCvAF9el3oTVUmW8snyF5LZ/P4/kdNUMwjyI/7LRvaWmpCXREQQ/uZqtRj90WojoeLo14d+SPThciOeDTbHtEPhm2QQridEgAhngWZePlhiP9We/RPkw8UnE9XDpcemm62OYhPo/+1ojyxHnsaFLwk+AbqRfEPH6LAxAXKdIieAR804Qay4KRb2MGpAkJx+ToyspKb+oWlWiccsJRg7Lxbn0A4tIKOQfM5rv9AYhrBGdklDq3U12jScNFdUft7fleAhCX3LUyqmml5zuKvzvd6U53utOd7nSnO93pTnf6XvQ/q63FquvAzgoAAAAASUVORK5CYII=",
    name: "Web3 Wallet Connect",
  },
 
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
      "https://user-images.githubusercontent.com/106812942/255093713-fc4acefd-5ae5-469a-ac28-75fff76f758a.png",
    name: "React Native",
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
      "https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png",
    name: "Chakra UI",
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
      "https://media.licdn.com/dms/image/v2/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675674296261?e=1730937600&v=beta&t=jX9dORCcfckJLrFe-za5u-ZhdcVAGTp-zW9pvDc8COI",
    name: "Next.js",
  },
  {
    image:
      "https://camo.githubusercontent.com/70ec62b59182d7ecbc34f6cfe6f043d6ca17b133c398871ef1cdab0fa4d1e424/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667",
    name: "Antd",
  },
  {
    image:
      "https://iconape.com/wp-content/files/dx/352988/png/jest-logo.png",
    name: "Jest",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Chart.js_logo.svg",
    name: "Chart.js",
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
