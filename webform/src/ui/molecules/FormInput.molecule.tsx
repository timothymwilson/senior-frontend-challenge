import React from 'react';
import InputAtom from '../atoms/Input.atom';
import LabelAtom from '../atoms/Label.atom';
import Radio from '../atoms/Radio.atom';
import SelectAtom from '../atoms/Select.atom';
import { InputAtomProps, InputTypes } from '../../types';

const FormInput: React.FC<InputAtomProps> = ({
  type,
  name,
  value,
  onChange = () => { },
  placeholder,
  checked,
  multiple,
  accept,
  min,
  max,
  title,
  options,
  label
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="Form__InputBlock">
        <LabelAtom htmlFor={name} text={label as string} />

        {type === InputTypes.Radio && options ? (
          <div className="Form__RadioGroup">
            {options.map((option, index) => (
              <Radio
                key={index}
                name={name}
                value={option}
                checked={value === option}
                onChange={onChange}
                label={option}
              />
            ))}
          </div>
        ) : type === InputTypes.Select && options ? (
          <SelectAtom
            name={name}
            value={value}
            options={options}
            onChange={onChange}
          />
        ) : (
          <InputAtom
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            checked={checked}
            multiple={multiple}
            accept={accept}
            min={min}
            max={max}
            required={false}
            htmlFor={''}
            text={''}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
