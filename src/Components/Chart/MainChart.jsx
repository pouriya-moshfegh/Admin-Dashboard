import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MainChart(props) {
let dataInfo =props.infoData

  return (
    <>
  <section className="h-[80%]">
  <ResponsiveContainer>
        <LineChart
          width={600}
          height={300}
          data={dataInfo}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
  </section>
    </>
  );
}
