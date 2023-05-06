import ProgressBar from "@ramonak/react-progress-bar";

export default function ProgressBarComp(props) {
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
   <section className="progressContainer mt-[2px]">{progressMaker(props.color, props.completed)}
    </section>
  );
}
