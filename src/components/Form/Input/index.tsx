import { FieldError } from 'react-hook-form';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { StyledParagraph } from '../../../styles/typography';

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
      <div>
        <div>
          {label ? <label htmlFor={id}>{label}</label> : null}
          <input ref={ref} id={id} {...rest} />
        </div>
        {error ? <StyledParagraph>erro</StyledParagraph> : null}
      </div>
    );
  }
);
