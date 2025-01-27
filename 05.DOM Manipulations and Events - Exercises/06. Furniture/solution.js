function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName('button');
  let [generateTextarea, resultTextarea] = document.getElementsByTagName('textarea');
  let table = document.querySelector('.table tbody');

  generateBtn.addEventListener('click', generate)

  function generate() {
    let furnitureList = JSON.parse(generateTextarea.value);
    for (let furniture of furnitureList) {
      let {name, img, price, decFactor} = furniture;
      price = Number(price);
      decFactor = Number(decFactor);

      let tr = document.createElement('tr');

      // Adding image
      let tdImg = document.createElement('td');
      let image = document.createElement('img');
      image.src = img;
      tdImg.appendChild(image);
      tr.appendChild(tdImg);

      // Adding name
      let tdName = document.createElement('td');
      let nameF = document.createElement('p');
      nameF.textContent = name;
      tdName.appendChild(nameF);
      tr.appendChild(tdName);

      // Adding price
      let tdPrice = document.createElement('td');
      let priceF = document.createElement('p');
      priceF.textContent = price;
      tdPrice.append(priceF);
      tr.appendChild(tdPrice);

      // Adding Decoration factor
      let tdDecoration = document.createElement('td');
      let deFactorF = document.createElement('p');
      deFactorF.textContent = decFactor;
      tdDecoration.append(deFactorF);
      tr.appendChild(tdDecoration);

      // Adding checkbox
      let tdCheckbox = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      tdCheckbox.appendChild(checkbox);
      tr.appendChild(tdCheckbox);

      table.appendChild(tr);
    }
    
  }

  buyBtn.addEventListener('click', buy)

  function buy() {
    let furnitures = document.querySelectorAll('tbody tr');
    furnitures = Array.from(furnitures).slice(1);

    let resultFurniture = [];
    let resultPrice = 0;
    let resultDecfactor = 0;
    let count = 0;
    
    for (const furniture of furnitures) {
      let isChecked = furniture.childNodes[4].childNodes[0].checked;

      if(isChecked) {
        let name = furniture.childNodes[1].childNodes[0].textContent;
        let price = furniture.childNodes[2].childNodes[0].textContent;
        let decFactor = furniture.childNodes[3].childNodes[0].textContent;

        price = Number(price);
        decFactor = Number(decFactor)

        if(!resultFurniture.includes(name)){
          resultFurniture.push(name);
        }
        resultPrice += price;
        resultDecfactor += decFactor;
        count++;
      }
    }
    resultDecfactor = resultDecfactor / count;
    resultTextarea.value = `Bought furniture: ${resultFurniture.join(', ')}\nTotal price: ${resultPrice.toFixed(2)}\nAverage decoration factor: ${resultDecfactor}`
  }
  
}