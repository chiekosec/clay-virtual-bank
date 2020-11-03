import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const TopbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 96%;
  height: 98%;
  margin: 10px;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.15s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
`;

export const TopbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const TopbarWrapper = styled.div`
  color: #fff;
`;

export const TopbarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.1s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`;

export const TopBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const TopbarBtn = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in;
  text-decoration: none;

  &:hover {
    /* transition: all 0.1s ease-in; */
    background: #fff;
    color: #010606;
  }
`;
