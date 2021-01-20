import styled from "styled-components";

export const MapContainer = styled.div`
  width: 500px;
  height: 334px;

  @media (max-width: 667px) {
    width: 100%;
    height: 300px;
  }

  @media (min-width: 667px) and (max-width: 768px)  {
    width: 350px;
    height: 234px;
  }

  @media (min-width: 768px) and (max-width: 992px)  {
    width: 400px;
    height: 267px;
  }

  ${(props) =>
    props.formMap &&
    "width: 100%; height: 200px; border-radius: 4px;"};
`