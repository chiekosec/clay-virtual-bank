import React from "react";
import {
  CloseIcon,
  Icon,
  TopbarBtn,
  TopbarContainer,
  TopbarLink,
  TopbarMenu,
  TopbarWrapper,
  TopBtnWrap,
} from "./TopbarElements";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink
            onClick={toggle}
            smooth={true}
            spy={true}
            duration={400}
            exact="true"
            offset={-80}
            to="about"
          >
            About
          </TopbarLink>
          <TopbarLink
            onClick={toggle}
            smooth={true}
            spy={true}
            duration={400}
            exact="true"
            offset={-80}
            to="discover"
          >
            Discover
          </TopbarLink>
          <TopbarLink
            onClick={toggle}
            smooth={true}
            spy={true}
            duration={400}
            exact="true"
            offset={-80}
            to="services"
          >
            Services
          </TopbarLink>
          <TopbarLink
            onClick={toggle}
            smooth={true}
            spy={true}
            duration={400}
            exact="true"
            offset={-80}
            to="signup"
          >
            Sign Up
          </TopbarLink>
        </TopbarMenu>
        <TopBtnWrap>
          <TopbarBtn to="/signin">Sign In</TopbarBtn>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
