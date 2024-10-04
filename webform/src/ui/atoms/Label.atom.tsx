import React from 'react';
import { LabelAtomProps } from '../../types';

const LabelAtom: React.FC<LabelAtomProps> = ({ htmlFor, text }) => (
  <label className='Form__Label' htmlFor={htmlFor}>{text}</label>
);

export default LabelAtom;
