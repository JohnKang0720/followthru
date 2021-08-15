import React from 'react'
import ReactPlayer from 'react-player'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Goalhelp() {

    const data = [
        {
            name: 'Jan',
            postcovid: 4000,
            precovid: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            postcovid: 3000,
            precovid: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            postcovid: 2000,
            precovid: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            postcovid: 2780,
            precovid: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            postcovid: 1890,
            precovid: 4800,
            amt: 2181,
        },
        {
            name: 'June',
            postcovid: 2390,
            precovid: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            postcovid: 3490,
            precovid: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="goal-outer">
            <div className="goals-container">
            <h1 style={{fontSize: '48px', textDecoration:'underline'}}> Helping you plan your goals</h1>
                <div className="goals-visuals">
                    <ReactPlayer url='youtube.com/watch?v=XpKvs-apvOs' controls={true} />
                 
                    
            <ResponsiveContainer width="55%" height="90%">
    
                        <LineChart
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
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="precovid" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="postcovid" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                    
                </div>
                <div className="goals">
                    <div className="goal"> <h1> Tip #1 </h1> </div>
                    <div className="goal"> <h1> Tip #2 </h1> </div>
                    <div className="goal"> <h1> Tip #3 </h1> </div>
                    <div className="goal"> <h1> Tip #4 </h1> </div>
                </div>
                <div className="blog-container">
                    <h1> Title </h1>
                    <h6> Zac Waite - Project Lead</h6>
                    <p> Description</p>
                </div>
            </div>
        </div>
    )
}
