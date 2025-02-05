class List {
  list = [];
  size = 0;

  static sort(list) {
    list.sort((a, b) => a - b);
  }

  static checkIndex(index, list) {
    if (index < 0 || index >= list.length) {
      throw new Error('Invalid Index');
    }
  }
  add(element) {
    this.list.push(element);
    List.sort(this.list);
    this.size++;
  }
  remove(index) {
    List.checkIndex(index, this.list);
    this.list.splice(index, 1);
    List.sort(this.list);
    this.size--;
  }
  get(index) {
    List.checkIndex(index, this.list);
    return this.list.at(index);
  }
  get size() {
    return this.size;
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
