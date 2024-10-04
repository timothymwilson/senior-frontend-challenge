import React from 'react';
import { SelectAtomProps } from '../../types';

const SelectAtom: React.FC<SelectAtomProps> = ({
  name,
  value,
  options,
  onChange,
  placeholder,
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="form__select"
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectAtom;
