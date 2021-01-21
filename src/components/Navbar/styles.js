import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  height: 50px;
  margin-bottom: 100px;

  a {
    text-decoration: none;
  }
`;

export const Brand = styled.img`
  margin-top: 40px;
  width: 350px;

  @media (max-width: 400px) {
    width: 175px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 225px;
  }

  @media (min-width: 500px) and (max-width: 768px) {
    width: 275px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    margin-top: 40px;
    width: 325px;
  }
`;

export const Logout = styled.div`
  position: absolute;
  right: 20px;
  top: 40px;
  font-size: 34px;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 24px;
  }

  @media (min-width: 500px) and (max-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 32px;
  }
`;
