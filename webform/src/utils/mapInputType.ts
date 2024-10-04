import { InputTypes } from "../types";

export const mapInputType = (type: string): InputTypes => {
  switch (type) {
    case "text":
      return InputTypes.Text;
    case "email":
      return InputTypes.Email;
    case "password":
      return InputTypes.Password;
    case 'range':
      return InputTypes.Range;
    case 'radio':
      return InputTypes.Radio;
    case 'select':
      return InputTypes.Select;
    case 'number':
      return InputTypes.Number;
    default:
      throw new Error(`Unknown input type: ${type}`);
  }
};