import React from 'react';
import { ImageAtomProps } from '../../types';

const ImageAtom: React.FC<ImageAtomProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  onClick
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      onClick={onClick}
    />
  );
};

export default ImageAtom;
