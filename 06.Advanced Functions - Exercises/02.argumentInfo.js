function argumentInfo(...args) {
  const tally = {};

  args.forEach((line) => {
    const type = typeof line;
    console.log(`${type}: ${line}`);

    if (!tally.hasOwnProperty(type)) {
      tally[type] = 0;
    }
    tally[type] += 1;
  });

  Object.entries(tally)
    .sort((arr1, arr2) => arr2[1] - arr1[1])
    .forEach((entry) => {
      console.log(`${entry[0]} = ${entry[1]}`);
    });
}

argumentInfo('cat', 42, function () {
  console.log('Hello world!');
});
