import React, { useState } from 'react';
import FormInput from '../molecules/FormInput.molecule';
import { InputTypes, FormData } from '../../types';
import data from "../../data/form-data.json";
import { mapInputType } from '../../utils/mapInputType';
import { isNumber, isInRange, isRequired } from '../../form-validation';
import Result from './Result.organism';

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    worstFood: 'Anchovies',
    handicapIndex: 27,
    timeOnline: 0,
    swear: 0,
    trophyWeight: 0,
    loveJob: '',
    scaryAnimal: 'Saltwater Crocodile',
    favoriteSong: '',
    slicesPizza: 1,
    favoriteDrink: '',
    longestDrive: 0
  });
  const [error, setError] = useState<string>("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;

    const isNumeric = ['number', 'range', 'tel'].includes(type);

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox'
        ? checked
        : isNumeric && value === ''
          ? ''
          : isNumeric
            ? Number(value)
            : value
    }));
  };

  const handleNextOrSubmit = () => {
    const currentInput = data.formData.inputs[currentQuestionIndex];
    const value = formData[currentInput.name];

    if (typeof value === 'boolean') {
      if (isLastQuestion()) {
        handleSubmit();
      } else {
        proceedToNextQuestion();
      }
      return;
    }

    if (currentInput.required && !isRequired(value)) {
      setError(`This is required.`);
      return;
    }

    if (currentInput.type === 'number' && (value === '' || !isNumber(value as string))) {
      setError('Please enter a valid number.');
      return;
    }

    if (currentInput.min !== undefined && currentInput.max !== undefined) {
      const numericValue = Number(value);
      if (!isInRange(numericValue, currentInput.min, currentInput.max)) {
        setError(`Value must be between ${currentInput.min} and ${currentInput.max}.`);
        return;
      }
    }

    if (isLastQuestion()) {
      handleSubmit();
    } else {
      proceedToNextQuestion();
    }
  };

  const proceedToNextQuestion = () => {
    if (currentQuestionIndex < data.formData.inputs.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
    setError("")
  };

  const isLastQuestion = () => {
    return currentQuestionIndex === data.formData.inputs.length - 1;
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  if (isSubmitted) {
    return <Result formData={formData} />;
  }
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div>
        {data.formData.inputs.length > 0 && (
          <>
            {/* Render the current question */}
            {data.formData.inputs[currentQuestionIndex] && (
              <FormInput
                type={mapInputType(data.formData.inputs[currentQuestionIndex].type)}
                name={data.formData.inputs[currentQuestionIndex].name}
                label={data.formData.inputs[currentQuestionIndex].label}
                title={data.formData.inputs[currentQuestionIndex].title}
                value={
                  mapInputType(data.formData.inputs[currentQuestionIndex].type) !== InputTypes.Checkbox
                    ? formData[data.formData.inputs[currentQuestionIndex].name] !== undefined
                      ? formData[data.formData.inputs[currentQuestionIndex].name] as string | number | undefined
                      : ''
                    : undefined
                }
                checked={mapInputType(data.formData.inputs[currentQuestionIndex].type) === InputTypes.Checkbox ? !!formData[data.formData.inputs[currentQuestionIndex].name] : undefined}
                onChange={handleInputChange}
                placeholder={data.formData.inputs[currentQuestionIndex].placeholder || ""}
                required={data.formData.inputs[currentQuestionIndex].required}
                min={data.formData.inputs[currentQuestionIndex].min}
                max={data.formData.inputs[currentQuestionIndex].max}
                htmlFor={''} text={''}
                options={data.formData.inputs[currentQuestionIndex].options}
              />
            )}

            {/* Conditionally show value based on input type */}
            {mapInputType(data.formData.inputs[currentQuestionIndex].type) === InputTypes.Range && (
              <div className="Form__InputRangeValue">
                {formData[data.formData.inputs[currentQuestionIndex].name] as number}
              </div>
            )}
          </>
        )}
      </div>
      <div className="Form__Error"><span>{error.length ? error : null}</span></div>
      <div className="Form__ButtonContainer">
        {currentQuestionIndex > 0 && (
          <button type="button" onClick={handleBack} className="Form__Button Form__Button--prev">Go Back</button>
        )}
        {currentQuestionIndex < data.formData.inputs.length - 1 ? (
          <button type="button" onClick={handleNextOrSubmit} className="Form__Button Form__Button--prev" >Next</button>
        ) : (
          <button type="submit" className="Form__Button Form__Button--submit">Submit</button>
        )}
      </div>
    </form>
  );
};

export default Form;
