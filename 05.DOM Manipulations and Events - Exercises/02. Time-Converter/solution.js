function attachEventsListeners() {
  let daysInput = document.getElementById('days');
  let hoursInput = document.getElementById('hours');
  let minutesInput = document.getElementById('minutes');
  let secondsInput = document.getElementById('seconds');

  document.querySelector('main').addEventListener('click', onConvert);

  function onConvert(e) {
    if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
      let input = e.target.parentElement.querySelector('input[type="text"]');
      let inputVal = Number(input.value);

      if (isNaN(inputVal)) {
        return;
      }

      let period = convert(inputVal, input.id);

      daysInput.value = period.days;
      hoursInput.value = period.hours;
      minutesInput.value = period.minutes;
      secondsInput.value = period.seconds;
    }
  }
  let ration = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function convert(value, unit) {
    let inDays = value / ration[unit];

    return {
      days: inDays,
      hours: inDays * ration.hours,
      minutes: inDays * ration.minutes,
      seconds: inDays * ration.seconds,
    };
  }
}
