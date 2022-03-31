import { ContentLayoutContainer } from './ContentLayout.styles';

type ContentLayoutProps = React.ComponentPropsWithoutRef<'div'>;

export const ContentLayout: React.FC<ContentLayoutProps> = ({ children, ...props }) => (
  <ContentLayoutContainer {...props}>{children}</ContentLayoutContainer>
);
