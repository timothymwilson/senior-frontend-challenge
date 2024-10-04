export enum InputTypes {
  Text = 'text',
  Email = 'email',
  Date = 'date',
  Hidden = 'hidden',
  Image = 'image',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Phone = 'tel',
  Week = 'week',
  Reset = 'reset',
  Radio = 'radio',
  Checkbox = 'checkbox',
  Range = 'range',
  Select = 'select',
}

export interface ImageAtomProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  loading?: 'eager' | 'lazy';
  onClick?: () => void;
}

export interface ImageMoleculeProps extends ImageAtomProps {
  caption?: string;
}

export interface LabelAtomProps {
  htmlFor: string;
  text: string;
}

export interface InputAtomProps extends LabelAtomProps {
  type: InputTypes;
  name: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  checked?: boolean;
  multiple?: boolean;
  accept?: string;
  min?: number;
  max?: number;
  title?: string;
  required: boolean;
  options?: string[];
  label?: string;
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface RadioAtomProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export interface SelectAtomProps {
  name: string;
  value: string | number | undefined;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

export interface FormData {
  worstFood: string;
  handicapIndex: number;
  timeOnline: number;
  swear: number;
  trophyWeight: number;
  loveJob: string;
  scaryAnimal: string;
  favoriteSong: string;
  slicesPizza: number;
  favoriteDrink: string;
  longestDrive: number;
  [key: string]: string | boolean | number;
}

export interface ResultProps {
  formData: FormData;
}
