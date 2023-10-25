/**
 * @stolen from someone lol
 */

import { useState } from 'react';

interface CopyFieldProps {
  label?: string;
  text: string;
}

export default function CopyField({ text, label, ...porps }: CopyFieldProps) {
  const [textToCopy, setTextToCopy] = useState(text);
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyClick = () => {
    // Create a new text area element to hold the text you want to copy
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Append the text area to the document
    document.body.appendChild(textArea);

    // Select the text in the text area
    textArea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary text area
    document.body.removeChild(textArea);

    setCopySuccess('Copied!');
  };

  return (
    <div className='flex items-center  border border-gray-200 rounded dark:border-gray-700'>
      {!!label && (
        <label
          htmlFor={label}
          className='pl-4 mr-4 w-1/4'>
          {label}
        </label>
      )}
      <div className='relative w-full'>
        <input
          className='bg-transparent block w-full before:placeholder:text-gold
        checked:bg-blue-600 checked:border-transparent focus:border-transparent focus:outline-none focus:ring-2'
          type='text'
          value={textToCopy}
          onChange={e => setTextToCopy(e.target.value)}
        />
        <p className='absolute right-4 top-1/2 -translate-y-1/2'>{copySuccess}</p>
      </div>
      <button
        type='button'
        className='w-1/4 flex justify-center items-center'
        onClick={handleCopyClick}>
        Copy
      </button>
    </div>
  );
}
