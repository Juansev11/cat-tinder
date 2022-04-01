import { Input, InputFieldWrapper, InputLabel, InputWrapper } from './InputField.styles';

type InputFieldProps = {
  label: string;
  id: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const InputField: React.FC<InputFieldProps> = ({ id, label, ...props }) => {
  return (
    <InputFieldWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputWrapper>
        <Input {...props} id={id}>
          {props.children}
        </Input>
      </InputWrapper>
    </InputFieldWrapper>
  );
};
