import React from 'react';

const Images = props => {
    return (
        <React.Fragment>
            {props.imageVal.map((svg, index) => {
                return (
                    <div>
                        <div className="table">
                            <img src={svg} alt="reactLogo" key={index} id="logo" />
                            <img src={svg} alt="reactLogo" key={index + 1} id="logo1" />
                            <img src={svg} alt="reactLogo" key={index + 2} id="logo2" />
                            <img src={svg} alt="reactLogo" key={index + 3} id="logo3" />
                            <img src={svg} alt="reactLogo" key={index + 4} id="logo4" />
                        </div>

                        <div className="bottom">
                            {props.icons.map(icon => {
                                return <img src={icon.icon} alt="icons" key={icon.id} />
                            })}
                        </div>
                    </div>
                );

            })}
        </React.Fragment>
    );

}

export default Images;



