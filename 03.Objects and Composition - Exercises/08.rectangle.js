function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.substring(1);
    let rectangleObj = {width,
        height,
        color, 
        calcArea() {
            return rectangleObj.width * rectangleObj.height
        }

    }
    return rectangleObj
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
