import styled from "styled-components";

export const StyledFavoritePlace = styled.li`
  list-style: none;
  margin: 30px auto;

  h2 {
    @media (min-width: 667px) and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 10px;

  @media (max-width: 667px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 100px;
  width: 250px;
  text-align: left;

  @media (max-width: 667px) {
    align-items: center;
    margin-left: 0;
  }

  @media (min-width: 667px) and (max-width: 768px) {
    width: 200px;
    margin-left: 50px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 225px;
    margin-left: 80px;
  }
`;
