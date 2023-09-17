import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import GraphButton from "./GraphButton";

interface DataPoint {
  x: string;
  y: number;
}

const generateRandomData = (numPoints: number): DataPoint[] => {
  const data: DataPoint[] = [];
  for (let i = 0; i < numPoints; i++) {
    data.push({ x: `${i + 1}`, y: Math.floor(Math.random() * 100) }); // Modify the range as needed
  }
  return data;
};

const ProgressGraph: React.FC = () => {
  const [duration, setDuration] = useState<number>(0);

  const data: DataPoint[][] = [
    generateRandomData(7), // 1W
    generateRandomData(30), // 1M
    generateRandomData(180), // 6M
    generateRandomData(365), // 1Y
    generateRandomData(730), // MAX (approx 2 years)
  ];

  const renderButtons = () => {
    const durationLabels: string[] = ["1W", "1M", "6M", "1Y", "MAX"];
    return durationLabels.map((label, index) => (
      <GraphButton
        key={index}
        label={label}
        active={duration === index}
        onPress={() => {
          setDuration(index);
        }}
      />
    ));
  };

  return (
    <View>
      {/* {fun()} */}
      <View style={styles.progressionCheckList}>{renderButtons()}</View>

      <View>
        <VictoryChart
          theme={VictoryTheme.material}
          height={300}
          domainPadding={10}
        >
          <VictoryAxis
            crossAxis
            style={{
              grid: { stroke: "none" },
              axis: { stroke: "none", padding: 20 },
              axisLabel: { padding: 30 },
              ticks: { stroke: "transparent" },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              grid: {
                stroke: "#33404D",
                strokeDasharray: "2.5, 2.5",
                strokeWidth: 1,
              },
              axis: { stroke: "none" },
              axisLabel: { padding: 30 },
              ticks: { stroke: "transparent" },
            }}
          />
          <VictoryLine
            animate
            style={{
              data: {
                stroke: "#457BB9",
                strokeWidth: 5,
                strokeLinecap: "round",
              },
            }}
            interpolation="natural"
            data={data[duration]}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressionCheckList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
  },
});

export default ProgressGraph;
