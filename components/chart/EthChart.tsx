import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import { useRecoilValue } from 'recoil';
import { getChartHeight, getChartWidth } from '../../data/utils/getDimensions';
import { WeeklyEthAtom } from '../../state/atoms';

const EthChart: React.FC = () => {
  const data = useRecoilValue(WeeklyEthAtom);

  return (
    <div className='flex'>
      <AreaChart
        height={getChartHeight()}
        width={getChartWidth()}
        data={data}
        margin={{ top: 6, right: 0, left: 25, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis
          type='category'
          ticks={["jan", "feb"]}
          domain={["jan", "feb"]}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip 
          labelStyle={{ color: '#8884d8' }} 
          formatter={value => new Intl.NumberFormat('en-US',
                    { style: 'currency', currency: 'USD',
                      minimumFractionDigits: 2 }).format(value)} />
        <Area dataKey="BTC" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  )
}

export default EthChart;