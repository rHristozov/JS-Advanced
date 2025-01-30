function listProcessor(arr) {
  let innerArr = [];

  for (const element of arr) {
    const [action, str] = element.split(' ');

    if (action === 'add') {
      add(str);
    } else if (action === 'remove') {
      remove(str);
    } else {
      print();
    }
  }

  function add(el) {
    innerArr.push(el);
  }

  function remove(el) {
    innerArr = innerArr.filter((x) => x !== el);
  }

  function print() {
    console.log(innerArr.join(','));
  }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
