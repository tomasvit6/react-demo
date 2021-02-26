import React from 'react';
import { UseFormMethods } from 'react-hook-form';

import { BaseTextFieldProps, TextField } from '@material-ui/core';

import { PlainText } from '../../shared/PlainText/PlainText';

interface Props extends BaseTextFieldProps {
  formMethods: UseFormMethods;
  readOnly?: boolean;
}

export const TextInputMemo: React.FC<Props> = React.memo((props) => {
  const { formMethods, label, name = '', fullWidth = true, type = 'text', readOnly, InputLabelProps, ...rest } = props;
  const { register, errors, control } = formMethods;
  const inputLabelProps = {
    shrink: true,
    ...InputLabelProps,
  };

  if (readOnly) {
    return (
      <PlainText
        inputLabelProps={inputLabelProps}
        label={label as string}
        value={control.defaultValuesRef.current[name]}
      />
    );
  }

  return (
    <TextField
      name={name}
      error={!!errors[name]}
      label={label as string}
      helperText={errors[name]?.message ?? ''}
      type={type}
      inputRef={register}
      InputLabelProps={inputLabelProps}
      fullWidth={fullWidth}
      {...rest}
    />
  );
}, shouldMemo);

function shouldMemo(
  prevProps: Readonly<React.PropsWithChildren<Props>>,
  nextProps: Readonly<React.PropsWithChildren<Props>>,
): boolean {
  const { formState: prevFormState, errors: prevErrors } = prevProps.formMethods;
  const { formState: nextFormState, errors: nextErrors } = nextProps.formMethods;

  return (
    prevFormState.isDirty === nextFormState.isDirty &&
    prevFormState.isSubmitSuccessful === nextFormState.isSubmitSuccessful &&
    !Object.keys(nextErrors).length &&
    !Object.keys(prevErrors).length
  );
}
