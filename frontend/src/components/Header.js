import React, { useState } from 'react';

import { fetchFileFromBucket } from '../api';
import logo from '../logo.png';
import Button from './Button';

export default function Header() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const data = await fetchFileFromBucket();

      const jsonStr = JSON.stringify(data);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'regulation-data.json');
      document.body.appendChild(link);
      link.click();

      // Clean up and revoke the URL
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);

      setIsDownloading(false);
    } catch (error) {
      console.error('Error initiating file download', error);
      setIsDownloading(false);
    }
  };

  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='https://mancomm.com/'>
          <img
            src={logo}
            width='200'
            height='50'
            className='d-inline-block align-top me-5'
            alt='logo'
          />
        </a>
        <Button handleDownload={handleDownload} disabled={isDownloading} />
      </div>
    </nav>
  );
}
