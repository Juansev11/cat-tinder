import styled from '@emotion/styled';

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  appearance: none;
  border: 1px solid var(--gray-500);
  border-radius: var(--border-radius-1);
  background-color: var(--gray-50);
  padding: var(--scale-2) var(--scale-5) var(--scale-2) var(--scale-2);
  width: 100%;
  flex: 1;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.round};
  background: none;
  height: 2rem;
  width: 100%;
  padding-left: 0.5rem;
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.palette.common.grey};
  font-size: 0.875rem;
`;
