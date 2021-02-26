import React from 'react';

import { InputLabel, InputLabelProps, Typography } from '@material-ui/core';

export interface Props {
  value: string;
  label?: string;
  inputLabelProps?: InputLabelProps;
}

export const PlainText: React.FC<Props> = (props) => {
  const { label, value, inputLabelProps = {} } = props;

  return (
    <>
      {label && <InputLabel {...inputLabelProps}>{label}:</InputLabel>}
      <Typography>{value || '-'}</Typography>
    </>
  );
};
