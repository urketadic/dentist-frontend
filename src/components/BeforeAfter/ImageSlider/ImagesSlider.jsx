import React from 'react';
import ImageSlider from "react-image-comparison-slider";
import './ImagesSlider.scss';

const ImagesSlider = (props) => {
    return (
        <div className='bamain'>

            <div style={{ width: '30em', height: '25em' }}>
                <ImageSlider
                    image2={props.image11}
                    image1={props.image12}
                    sliderColor="#FF518F"
                    handleColor="#FF518F"
                    rightLabelText="metalo keramički most"
                />

            </div>

            <div style={{ width: '30em', height: '25em' }}>
                <ImageSlider
                    image2={props.image21}
                    image1={props.image22}
                    sliderColor="#FF518F"
                    handleColor="#FF518F"
                    rightLabelText="metalo keramički most"
                />
            </div>

            <div style={{ width: '30em', height: '25em' }}>
                <ImageSlider
                    image2={props.image31}
                    image1={props.image32}
                    sliderColor="#FF518F"
                    handleColor="#FF518F"
                    rightLabelText="most + beljenje"
                />
            </div>

            <div style={{ width: '30em', height: '25em' }}>
                <ImageSlider
                    image2={props.image41}
                    image1={props.image42}
                    sliderColor="#FF518F"
                    handleColor="#FF518F"
                    rightLabelText=" lasersko beljenje zuba"
                    // onSlide={() => {
                    // console.log("sliding");
                    // }}
                />
            </div>

            

        </div>
    )

}


export default ImagesSlider;