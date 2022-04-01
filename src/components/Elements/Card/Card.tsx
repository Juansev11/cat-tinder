import { CardContainer } from './Card.styles';

type CardProps = React.ComponentPropsWithoutRef<'article'>;

export const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <CardContainer {...props}>{children}</CardContainer>
);
