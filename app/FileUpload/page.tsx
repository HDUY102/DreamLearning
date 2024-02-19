'use client'

import React from 'react';

export default function FileUpload() {
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }

    const file = event.target.files[0];

    await fetch('/api/uploadFile', {
      method: 'POST',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });
  }
  async function MultiFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }
  
    const files = event.target.files;
    const formData = new FormData();
  
    for (const file of Array.from(files)) {
      formData.append('files', file);
    }
  
    formData.append('otherData', 'some data');
  
    await fetch('/api/uploadFile', {
      method: 'POST',
      body: formData,
    });
  }
  return (
    // <input
    //   type="file"
    //   onChange={handleFileUpload}
    // />
    <input
    type="file"
    onChange={MultiFileUpload}
    multiple={true}
    />
  );
}