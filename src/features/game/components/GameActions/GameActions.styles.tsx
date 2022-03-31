import styled from '@emotion/styled';

import { Button } from '@/components/Elements';

export const GameActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const GameActionsButton = styled(Button)`
  border: ${(props) => props.theme.border.basic};
  box-shadow: ${(props) => props.theme.boxShadow.basic};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
