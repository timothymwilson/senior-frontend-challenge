import React from 'react';
import { Radio as MuiRadio, FormControlLabel } from '@mui/material';
import { RadioAtomProps } from '../../types';

const Radio: React.FC<RadioAtomProps> = ({ name, value, checked, onChange, label }) => {
  return (
    <FormControlLabel
      control={
        <MuiRadio
          className="form__input"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          id={`${name}-${value}`}
        />
      }
      label={label}
    />
  );
};

export default Radio;
