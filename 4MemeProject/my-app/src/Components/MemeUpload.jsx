// src/components/MemeUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './MemeUpload.css';

const MemeUpload = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onUpload(acceptedFiles[0]);
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="meme-upload">
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image here, or click to select one</p>
    </div>
  );
};

export default MemeUpload;
