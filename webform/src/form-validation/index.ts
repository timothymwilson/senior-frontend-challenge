export const isEmailValid = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isNumber = (value: string): boolean => {
  return !isNaN(Number(value));
};

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

export const isRequired = (value: string | number): boolean => {
  return value !== '' && value !== null && value !== undefined;
};