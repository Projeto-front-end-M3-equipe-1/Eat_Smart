import { FieldError } from 'react-hook-form';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { StyledParagraph } from '../../../styles/typography';
import { StyledInputContainerDark } from '../../../styles/form';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}
export const Input = forwardRef(
  (
    { label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInputContainerDark>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input ref={ref} id={id} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </StyledInputContainerDark>
    );
  }
);
