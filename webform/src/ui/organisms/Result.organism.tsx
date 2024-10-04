import React, { useEffect, useState } from 'react';
import resultContent from "../../data/result-content.json";
import { ResultProps } from '../../types';

const Result: React.FC<ResultProps> = ({ formData }) => {
  const [content, setContent] = useState<string[]>([]);

  useEffect(() => {
    const populatedContent = resultContent.content.map((html: string) => {
      return html
        .replace(/{{handicapIndex}}/g, formData.handicapIndex.toString())
        .replace(/{{worstFood}}/g, `${formData.worstFood}${formData.handicapIndex > 1 && formData.worstFood.charAt(formData.worstFood.length - 1) !== 's' ? 's' : ''}`)
        .replace(/{{swear}}/g, formData.swear.toString())
        .replace(/{{trophyWeight}}/g, formData.trophyWeight.toString())
        .replace(/{{loveJob}}/g, formData.loveJob)
        .replace(/{{scaryAnimal}}/g, `${formData.scaryAnimal}s`)
        .replace(/{{favoriteSong}}/g, formData.favoriteSong)
        .replace(/{{slicesPizza}}/g, formData.slicesPizza.toString())
        .replace(/{{timeOnline}}/g, formData.timeOnline.toString())
        .replace(/{{favoriteDrink}}/g, `${formData.favoriteDrink}${formData.timeOnline > 1 || formData.timeOnline < 1 ? 's' : ''}`)
        .replace(/{{longestDrive}}/g, formData.longestDrive.toString());
    });

    setContent(populatedContent);
  }, [formData]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="Result">
      <div className="Result__Content">
        <h2>{resultContent.title}</h2>
        {content.map((html, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </div>
      <div className="Result__ButtonContainer">
        <button onClick={handleReload} className="Form__Button">
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Result;
