import { CardContainer, CardImage } from './Card.styles';

type CardProps = {
  image: string;
} & React.ComponentPropsWithoutRef<'article'>;

export const Card: React.FC<CardProps> = ({ image, children, ...props }) => (
  <CardContainer {...props}>
    <CardImage src={image} alt="" />
    {children}
  </CardContainer>
);
