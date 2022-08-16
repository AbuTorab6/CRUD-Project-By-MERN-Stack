import React from 'react';

import LoadeImage from '../asset/image/animation.svg'
import '../asset/css/custom.css'

const Loader = () => {
    return (
        <div>
            <div className='loding'>
                <img  className='loding-image' src={LoadeImage} />
            </div>
        </div>
    );
};

export default Loader;