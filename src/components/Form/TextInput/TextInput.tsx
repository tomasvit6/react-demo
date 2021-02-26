import React from 'react';
import { useFormContext } from 'react-hook-form';

import { BaseTextFieldProps } from '@material-ui/core';

import { TextInputMemo } from './TextInputMemo/TextInputMemo';

interface PropsParent extends BaseTextFieldProps {
  readOnly?: boolean;
}

export const TextInput: React.FC<PropsParent> = (props) => {
  const formMethods = useFormContext();

  return <TextInputMemo formMethods={formMethods} {...props} />;
};
