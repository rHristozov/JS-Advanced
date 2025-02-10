function attachEventsListeners() {
  // getting elements
  const inputEl = document.getElementById('inputDistance');
  const inputOptionEl = document.getElementById('inputUnits');
  const outputOptionEl = document.getElementById('outputUnits');
  const outputEl = document.getElementById('outputDistance');
  const btnEl = document.getElementById('convert');

  btnEl.addEventListener('click', onConvert);

  let units = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };
  function onConvert() {
    const inputUnit = inputOptionEl.value;
    const outputUnit = outputOptionEl.value;
    const inputValue = Number(inputEl.value);

    let convertInM = inputValue * units[inputUnit];
    let result = convertInM / units[outputUnit];

    outputEl.value = result;
  }
}
