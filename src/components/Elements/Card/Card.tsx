import { CardContainer, CardContent, CardDescription, CardImage, CardTitle } from './Card.styles';

type CardProps = {
  title: string;
  description: string;
  image: string;
} & React.ComponentPropsWithoutRef<'article'>;

export const Card: React.FC<CardProps> = ({ title, description, image, ...props }) => (
  <CardContainer {...props}>
    <CardImage src={image} alt="" />
    <CardContent>
      <CardTitle variant="lg" weight="bold">
        {title}
      </CardTitle>
      <CardDescription variant="sm" weight="normal">
        {description}
      </CardDescription>
    </CardContent>
  </CardContainer>
);
