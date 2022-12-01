import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPartExercise from './BodyPartExercise';


const HorizontalScroll = (props) => {
    const { bodyPart, bodypartClicked } = props

const imgarr=[
    "../assets/images/back.png",
    "../assets/images/treadmill.png",
    "../assets/images/body.png",
    "../assets/images/arm-muscle.png",
    "../assets/images/Lower Leg.png",
    "../assets/images/neck.png",
    "../assets/images/arm-muscle.png",
    "../assets/images/Lower Leg.png",
    "../assets/images/waist.png"
]
    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
        return (
            <p onClick={() => scrollPrev()} className="right-arrow">
                <img src={LeftArrowIcon} alt="right-arrow" style={{marginTop: '215px',cursor:'pointer'}} />
            </p>
        );
    };

    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
        return (
            <p onClick={() => scrollNext()} className="left-arrow">
                <img src={RightArrowIcon} alt="right-arrow" style={{marginTop: '215px',cursor:'pointer'}} />
            </p>
        );
    };

    return (
        <div >
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {bodyPart.map((element, index) =>
                    <div className='col-md-12' >
                        <div key={index}>
                            <BodyPartExercise element={element} imgr={imgarr[index]} bodypartClicked={bodypartClicked} />
                        </div>
                    </div>
                )}
            </ScrollMenu>


        </div>
    );

}
export default HorizontalScroll