import { Container } from './MainLayout.styles';

type MainLayoutProps = React.ComponentPropsWithoutRef<'div'>;

export const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);
