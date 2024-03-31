// Define labels for times of the day
export const timeLabels = [
  "8:00 AM",
  "8:15 AM",
  "8:30 AM",
  "8:45 AM",
  "9:00 AM",
];

// Use the timeLabels array in your data objects
export const data1 = {
  labels: timeLabels,
  datasets: [
    {
      label: "Blood Pressure",
      data: [70, 72, 75, 73, 76],
      fill: false,
      borderColor: "rgb(0, 71, 171)",
      tension: 0.4,
    },
  ],
};

export const data2 = {
  labels: timeLabels,
  datasets: [
    {
      label: "Heart Rate",
      data: [70, 72, 75, 73, 76],
      fill: false,
      borderColor: "rgb(210, 43, 43)",
      tension: 0.1,
    },
  ],
};

export const data3 = {
  labels: timeLabels,
  datasets: [
    {
      label: "Glucose",
      data: [70, 72, 75, 73, 76],
      fill: false,
      borderColor: "rgb(255, 36, 0)",
      tension: 0.4,
    },
  ],
};

export const data4 = {
  labels: timeLabels,
  datasets: [
    {
      label: "Cholesterol",
      data: [70, 72, 75, 73, 76],
      fill: false,
      borderColor: "rgb(127, 0, 255)",
      tension: 0.4,
    },
  ],
};
