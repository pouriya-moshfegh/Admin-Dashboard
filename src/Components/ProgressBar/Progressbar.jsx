import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from 'prop-types';

export default function ProgressBarComp({color,completed}) {
  const progressMaker = (color, size) => {
    return (
      <ProgressBar
        completed={size}
        height="4px"
        labelSize="10px"
        isLabelVisible={false}
        bgColor={color}
        baseBgColor="#242636"
      ></ProgressBar>
    );
  };
  return (
    <section className="progressContainer mt-[2px]">
      {progressMaker(color, completed)}
    </section>
  );
}
ProgressBarComp.propTypes = {
  color: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired
}
