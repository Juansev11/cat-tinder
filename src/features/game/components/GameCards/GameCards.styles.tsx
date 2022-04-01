import styled from '@emotion/styled';

import { CardImage } from '@/components/Elements/Card/Card.styles';

export const GameCountdownContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 9999;
`;

export const GameCardImageList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const GameCardImage = styled(CardImage)`
  position: absolute;
  right: 0;
  top: 0;
`;
export const GameCardImageTop = styled(GameCardImage)`
  z-index: 1;
`;
