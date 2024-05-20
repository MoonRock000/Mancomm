import React, { useState, useEffect } from 'react';

import Subtitle from '../components/Subtitle';
import { fetchRegulationData } from '../api';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetchRegulationData();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!data) return <p>Nothing to show.</p>;

  return (
    <div className='container'>
      {data && (
        <div className='d-flex justify-content-between my-5'>
          <h1>{data.title || 'No Title'}</h1>{' '}
        </div>
      )}

      {data && data.subtitles && data.subtitles.length > 0 ? (
        data.subtitles.map((subtitle, index) => (
          <Subtitle key={index} subtitle={subtitle} />
        ))
      ) : (
        <p>No subtitles available.</p>
      )}
    </div>
  );
};

export default App;
