import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  padding: 10px 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  margin-left: 100px;
  width: 150px;
`;

export const Menu = styled.ul`
  font-family: 'Anek Latin';
  margin-right: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuItem = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover{
    scale: 1.1;
    color: #EA6927;
  }
`