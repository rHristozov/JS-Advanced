function extensibleObject() {
  let obj = {
    extend: function (template) {
      for (let parentProp of Object.keys(template)) {
        // is function or else
        if (typeof template[parentProp] === 'function') {
          Object.getPrototypeOf(this)[parentProp] = template[parentProp];
        } else {
          this[parentProp] = template[parentProp];
        }
      }
    },
  };
  return obj;
}
const myObj = extensibleObject();
console.log(myObj);

const template = {
  extensionMethod: function () {},
  extensionProperty: 'someString',
};
myObj.extend(template);
console.log(myObj);
