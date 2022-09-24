import React from 'react';
import ImagesSlider from './ImageSlider/ImagesSlider'

import img11 from '../../img/beforeafter/11.jfif';
import img12 from '../../img/beforeafter/12.jfif';

import img21 from '../../img/beforeafter/21.jfif';
import img22 from '../../img/beforeafter/22.jfif';

import img31 from '../../img/beforeafter/31.jfif';
import img32 from '../../img/beforeafter/32.jfif';

import img41 from '../../img/beforeafter/41.jfif';
import img42 from '../../img/beforeafter/42.jfif';


const BeforeAfter = (props) => {
    return (
        <ImagesSlider image11={img11}
                      image12={img12}

                      image21={img21}
                      image22={img22}

                      image31={img31}
                      image32={img32}

                      image41={img41}
                      image42={img42}
                      />
    )

}

export default BeforeAfter;