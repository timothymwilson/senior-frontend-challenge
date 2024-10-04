import React from 'react';
import { InputAtomProps } from '../../types';

const InputAtom: React.FC<InputAtomProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  checked,
  multiple,
  accept,
  min,
  max,
}) => {
  return (
    <input
      className='form__input'
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      checked={checked}
      multiple={multiple}
      accept={accept}
      id={name}
      min={min}
      max={max}
    />
  );
};

export default InputAtom;
