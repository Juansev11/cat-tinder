import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

type ButtonVariants = 'icon' | 'solid';

type ButtonProps = {
  variant?: ButtonVariants;
} & React.ComponentPropsWithoutRef<'p'>;

const getPropsByVariant = (variant: ButtonVariants) => {
  const iconVariantProps = {
    main: {
      padding: '0.3rem',
      height: '3.375rem',
      width: '3.375rem',
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.borderRadius.circle,
    },
    hover: { backgroundColor: '#c5c5c54d' },
  };

  const solidVariantProps = {
    main: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  };

  const variants = {
    icon: iconVariantProps,
    solid: solidVariantProps,
  };

  return variants[variant] || variants.solid;
};

export const Button = styled('button')<ButtonProps>(({ variant = 'solid' }) => {
  const propsByVariant = getPropsByVariant(variant);

  return {
    border: 0,
    borderRadius: '1.7rem',
    margin: 0,
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '1rem 3rem',
    transition: 'background-color 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(propsByVariant && propsByVariant.main),
  };
});
