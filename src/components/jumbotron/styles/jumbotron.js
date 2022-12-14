import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 90%;
  margin: auto;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;
