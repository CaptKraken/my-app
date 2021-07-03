import "./Chart.scss";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

/* {props.dataPoints.map((dataPoint) => {
        {
          <p>hi</p>;
        }
        // console.log(dataPoint.label, dataPoint.value, totalMax);
        // <ChartBar
        //   key={dataPoint.label}
        //   value={dataPoint.value}
        //   maxValue={totalMax}
        //   label={dataPoint.label}
        // />;
      })} */
