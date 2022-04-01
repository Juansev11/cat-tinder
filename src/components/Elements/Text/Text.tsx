import styled from '@emotion/styled';

import { TextFontVariants, TextWeightVariants } from '@/typings/emotion';

type TextProps = {
  variant: TextFontVariants;
  weight?: TextWeightVariants;
} & React.ComponentPropsWithoutRef<'p'>;

type TextWeights = {
  [key in TextWeightVariants]: number;
};

const textWeights: TextWeights = {
  light: 300,
  normal: 400,
  bold: 700,
};

export const StyledText = styled.p<TextProps>`
  font-size: ${({ theme, variant }) => variant && theme.typography.fontSizes[variant]};
  font-weight: ${(props) => props.weight && textWeights[props.weight]};
`;

type TextPropsWithStyled = React.ComponentPropsWithoutRef<typeof StyledText>;

export const Text: React.FC<TextPropsWithStyled> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
