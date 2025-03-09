import './ActivityStats.css';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Lundi',
        uv: 4,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Mardi',
        uv: 3,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mercredi',
        uv: 5,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Jeudi',
        uv: 7,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Vendredi',
        uv: 5,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Samedi',
        uv: 5,
        pv: 3800,
        amt: 2500,
    }
];

function CustomBar(props) {
    const { x, y, width, height} = props;
    return <Rectangle x={x} y={y} width={width} height={height} radius={[50, 50, 50, 50]} fill="#4361EE" />;
}


function ActivityStats(props) {
    return(
        <div className="activity-stats-base rounderCorn dropShadow">
            <p className="activity-stats-title">Activity Focus</p>
            <div className="activity-chart-container">
                <ResponsiveContainer className="activity-stats-container" height={250} width={450}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                    >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#F72585" shape={<CustomBar/>} activeBar={<CustomBar fill="#F72585" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default ActivityStats;