import { FC } from 'react';
import { Button } from 'antd';
// import data from './../dummy_measurements.json';

export const Measurenes: FC<any> = (measurements) => {
    const data_measurenes = measurements.measurements.data;
    console.log(data_measurenes);

    return (
        <div>
            <span>Measurenes</span>
            <div className='measurenes'>
                {data_measurenes.map((measurenes_type) => {
                    return <div key={measurenes_type.id}>
                        <span>{measurenes_type.title}</span>
                        <span>{measurenes_type.subTitle}</span>
                        <div className='values'>
                            {measurenes_type.values.map((value) => {
                                return(
                                    <div className='r' key={value}>
                                        {value}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
       )
};
