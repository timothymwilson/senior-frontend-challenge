import React from 'react';
import ImageAtom from '../atoms/Image.atom'; // Import the Image Atom
import { ImageMoleculeProps } from '../../types/index';
import { createHtml } from '../../utils/createHtml';

const ImageMolecule: React.FC<ImageMoleculeProps> = ({ src, alt, caption, width, height, onClick }) => {
  return (
    <div className="image">
      <ImageAtom src={src} alt={alt} onClick={onClick} width={width} height={height} />

      {caption && (
        <div dangerouslySetInnerHTML={createHtml(caption)} />
      )}
    </div>
  );
};

export default ImageMolecule;
