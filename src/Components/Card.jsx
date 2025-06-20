import React from 'react';

const Card = ({ data }) => {
  const readMore = (url) => {
    window.open(url,); // Open in new tab
  };

  return (
    <div className='cardContainer'>
      {Array.isArray(data) &&
        data.map((curltem, index) => {
          if (!curltem.urlToImage) {
            return null;
          }

          return (
            <div className='card' key={index}>
              <img src={curltem.urlToImage} alt={curltem.title} />
              <div className='content'>
                <a className='title' onClick={() => readMore(curltem.url)}>
                  {curltem.title}
                </a>
                <p>{curltem.description}</p>
                <button onClick={() => readMore(curltem.url)}>Read More</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
