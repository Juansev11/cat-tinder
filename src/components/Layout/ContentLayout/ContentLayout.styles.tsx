import styled from '@emotion/styled';

export const ContentLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
  @media only screen and (min-width: 30rem) {
    max-width: 24rem;
  }
`;
