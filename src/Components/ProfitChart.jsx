
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, CartesianAxis } from 'recharts';


export default function ProfitChart({ data }) {

  const getPath = (x, y, width, height) => {
    const radius = 15
    return `M${x + radius},${y}
    H${x + width - radius}
    A${radius},${radius} 0 0 1 ${x + width},${y + radius}
    V${y + height - radius}
    A${radius},${radius} 0 0 1 ${x + width - radius},${y + height}
    H${x + radius}
    A${radius},${radius} 0 0 1 ${x},${y + height - radius}
    V${y + radius}
    A${radius},${radius} 0 0 1 ${x + radius},${y}
    Z`;
  };

  const Rectangle = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <>
    <div className='h-full w-full bg-indigo-50 dark:bg-neutral-800 p-5 pt-[50px] rounded-lg shadow-md'>

    
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="order" />
          <YAxis />
          <Tooltip  />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
        
          <Bar dataKey="profit" fill="#3b82f6" shape = {<Rectangle />}  />
         
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>
  )
}