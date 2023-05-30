import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export default function MainChart({ infoData }) {
  return (
    <>
      <section className="h-[80%] dark:text-secondary ">
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={infoData}
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
MainChart.propTypes = {
  infoData: PropTypes.array.isRequired,
};
