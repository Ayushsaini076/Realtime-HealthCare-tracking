const fs = require("fs");
const { Kafka } = require("kafkajs");
const path = require("path");
require('dotenv').config()

const kafka = new Kafka({
    clientId: `fit-band-server`,
    brokers: [process.env.KAFKA_BROKER],
    ssl: {
        ca: [fs.readFileSync(path.join(__dirname, 'kafka.pem'), 'utf-8')]
    },
    sasl: {
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD,
        mechanism: "plain",
    }
});

const producer = kafka.producer();

async function publishUserData({ key, time, value }) {
  await producer.send({
    topic: "user-data",
    messages: [{ key: key, value: JSON.stringify({ time, value }) }],
  });
}

// store lastHeartRate and then apply probability that 80 that next rate remains in the same range lik (60-100 or 100-180 or 40-60) and 20% that next rate changes its range
function generateHeartRate() {
  const normalHeartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Normal heart rate range: 60 - 100 BPM
  const isNormal = Math.random() < 0.9;

  if (isNormal) {
    return normalHeartRate;
  } else {
    const extremeHeartRate =
      Math.random() < 0.5
        ? Math.floor(Math.random() * (180 - 100 + 1)) + 100
        : Math.floor(Math.random() * (60 - 40 + 1)) + 40;
    return extremeHeartRate;
  }
}

function generateCholesterolLevel() {
  const normalCholesterolLevel =
    Math.floor(Math.random() * (200 - 120 + 1)) + 120;
  const isNormal = Math.random() < 0.9;

  if (isNormal) {
    return normalCholesterolLevel;
  } else {
    const extremeCholesterolLevel =
      Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    return extremeCholesterolLevel;
  }
}

function generateGlucoseLevel() {
  const glucoseLevel = Math.floor(Math.random() * (120 - 70 + 1)) + 70;
  const isNormal = Math.random() < 0.9;

  if (isNormal) {
    return glucoseLevel;
  } else {
    const extremeGlucoseLevel =
      Math.random() < 0.5
        ? Math.floor(Math.random() * (180 - 120 + 1)) + 120
        : Math.floor(Math.random() * (70 - 50 + 1)) + 50;
    return extremeGlucoseLevel;
  }
}

function generateBloodPressure() {
  let systolic, diastolic;
  if (Math.random() < 0.8) {
    //normal
    systolic = Math.floor(Math.random() * (120 - 105 + 1)) + 105;
    diastolic = Math.floor(Math.random() * (82 - 70 + 1)) + 70;
  } else if (0.8 < Math.random < 0.9) {
    //low
    systolic = Math.floor(Math.random() * (105 - 90 + 1)) + 90;
    diastolic = Math.floor(Math.random() * (70 - 60 + 1)) + 60;
  } else {
    //high
    systolic = Math.floor(Math.random() * (135 - 120 + 1)) + 120;
    diastolic = Math.floor(Math.random() * (89 - 82 + 1)) + 82;
  }
  return { systolic, diastolic };
}

async function init() {
  await producer.connect();

  const generateHealthData = async () => {

    const curTime = Date.now();

    const heartRate = generateHeartRate();
    await publishUserData({ key:"heartRate", curTime, heartRate });

    const cholesterolLevel = generateCholesterolLevel();
    await publishUserData({key:"cholesterol", curTime, cholesterolLevel });
    
    const glucoseLevel = generateGlucoseLevel();
    await publishUserData({key:"glucose", curTime, glucoseLevel });
    
    const bloodPressure = generateBloodPressure();
    await publishUserData({key:"bloodPressure", curTime, bloodPressure });

    console.log(curTime, heartRate);
    console.log(curTime, cholesterolLevel);
    console.log(curTime, glucoseLevel);
    console.log(curTime, bloodPressure);
  };

  setInterval(generateHealthData, 5000);
}

init();
