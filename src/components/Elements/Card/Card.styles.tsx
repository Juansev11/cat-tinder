import styled from '@emotion/styled';

import { Text } from '../Text/Text';

export const CardContainer = styled.article`
  position: relative;
  display: flex;
`;

export const CardImage = styled.img`
  aspect-ratio: 3 / 4;
  border-radius: ${(props) => props.theme.borderRadius.round};
  object-position: center;
  object-fit: cover;
`;

export const CardContent = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  border-radius: ${(props) => props.theme.borderRadius.round};
  padding: 0.75rem 1rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.common.white};
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: ${(props) => props.theme.boxShadow.cards};
`;

export const CardTitle = styled(Text)`
  color: ${(props) => props.theme.palette.common.black};
  line-height: 1rem;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled(Text)`
  color: ${(props) => props.theme.palette.common.grey};
  line-height: 1rem;
`;
