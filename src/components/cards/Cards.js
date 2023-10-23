import React from 'react';
import { Link } from 'react-router-dom';
import Jorge from '../images/img-main-jorge.jpg';
import Majo from '../images/img-main-majo.jpg';
import './Cards.css';

function Cards(data, onClick) {
  const { types } = data;

  const colorType = !types ? [] : types.map((type) => {
    return getComputedStyle(document.body).getPropertyValue('--' + type.type.name);
  });

  return (
    <div className='card-container'>
        <Link to="/majo">
            <li
                className='card'
                onClick={onClick}
                style={{
                backgroundImage: 'linear-gradient(to right, ' +
                    (colorType.length > 0
                    ? colorType.length === 1
                        ? colorType[0] + ', ' + colorType[0]
                        : colorType.join(', ')
                    : 'white, white') + ')',
                }}
            >
                <div className='white-cover'>
                <div className='image-container'>
                    <div className='image' style={{ backgroundImage: `url(${Majo})` }}></div>
                </div>
                <h1>Majo</h1>
                </div>
            </li>
        </Link>

        <Link to="/jorge">
            <li
                className='card'
                onClick={onClick}
                style={{
                backgroundImage: 'linear-gradient(to right, ' +
                    (colorType.length > 0
                    ? colorType.length === 1
                        ? colorType[0] + ', ' + colorType[0]
                        : colorType.join(', ')
                    : 'white, white') + ')',
                }}
            >
                <div className='white-cover'>
                <div className='image-container'>
                    <div className='image' style={{ backgroundImage: `url(${Jorge})` }}></div>
                </div>
                <h1>Jorge</h1>
                </div>
            </li>
        </Link>
    </div>
  );
}

export default Cards;

