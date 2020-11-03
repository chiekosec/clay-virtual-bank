import React from "react";
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
        {/* <VideoBg playsInline autoPlay loop muted src="" type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking made easy</HeroH1>
        <HeroP>
          Sign up for the new account today and receive $250 of free credit
          towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary
            dark
            smooth={true}
            spy={true}
            duration={400}
            exact="true"
            offset={-80}
            to="signup"
          >
            Get Started
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
