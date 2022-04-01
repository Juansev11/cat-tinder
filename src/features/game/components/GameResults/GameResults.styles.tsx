import styled from '@emotion/styled';

export const GameResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  flex: 1;
`;

export const GameResultsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
`;

export const GameResultsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border: ${(props) => props.theme.border.basic};
  border-radius: ${(props) => props.theme.borderRadius.round};
  box-shadow: ${(props) => props.theme.boxShadow.basic};
`;
