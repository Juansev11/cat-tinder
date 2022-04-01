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
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius.round};
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme.palette.common.white};
  border: ${(props) => props.theme.border.basic};
  box-shadow: ${(props) => props.theme.boxShadow.basic};
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
