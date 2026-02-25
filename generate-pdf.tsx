// generate-pdf.js
import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { Resume } from './src/resume'; // Path to your React component

// This will save the file to your current folder
ReactPDF.render(<Resume />, `./resume.pdf`);

console.log('PDF Generated successfully!');