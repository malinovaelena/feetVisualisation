import * as React from 'react';
// import data from './../dummy_measurements.json';

export const Measurenes: React.FC<any> = (measurements) => {
    const data_measurenes = measurements;
    return (
        <div className='test'>
            {/* <span>Measurenes</span>
            <div className='measurenes'>
                {() => data_measurenes.measurements.forEach((measurenes_type) => {
                    return <div>
                        <span>{measurenes_type.title}</span>
                        <span>{measurenes_type.subTitle}</span>
                        <div className='values'>
                            {() => measurenes_type.values.forEach((value) => {
                                return(
                                    <div className='r'>
                                        {value}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                })}
            </div> */}
        </div>
    )
};
