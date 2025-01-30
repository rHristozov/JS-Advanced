function filterEmployees(jsonArr, str) {
  const employeesArr = JSON.parse(jsonArr);
  const [data, criteria] = str.split('-');

  const filteredEmployees = employeesArr.filter(
    (employee) => employee[data] === criteria
  );

  for (let i = 0; i < filteredEmployees.length; i++) {
    console.log(
      `${i}. ${filteredEmployees[i].first_name} ${filteredEmployees[i].last_name} - ${filteredEmployees[i].email}`
    );
  }
}

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  'gender-Female'
);
