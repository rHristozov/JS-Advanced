function timeToWalk(steps, footprint, speedInH) {
  let distance = steps * footprint;
  let speedInM = speedInH / 3.6;

  let time = distance / speedInM;
  let rest = Math.floor(distance / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time % 60);
  let timeHr = Math.floor(time / 3600);

  let totalMinutes = timeMin + rest;

  if (totalMinutes >= 60) {
    timeHr += Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60;
  }

  console.log(
    (timeHr < 10 ? '0' : '') +
      timeHr +
      ':' +
      (totalMinutes < 10 ? '0' : '') +
      totalMinutes +
      ':' +
      (timeSec < 10 ? '0' : '') +
      timeSec
  );
}

timeToWalk(4000, 0.6, 5);
