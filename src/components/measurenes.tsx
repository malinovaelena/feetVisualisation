import { FC } from 'react';
// import data from './../dummy_measurements.json';

export const Measurenes: FC<any> = (measurements) => {
    const data_measurenes = measurements;
    console.log(data_measurenes, measurements);
    return <div>
            <span>Measurenes</span>
            <div className='measurenes'>
                {() => data_measurenes.measurements.forEach((measurenes_type) => {
                    return<div>
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
            </div>
        </div>
};
