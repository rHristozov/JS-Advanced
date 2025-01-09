function pieceOfPie(arr, firstFlavor, secondFlavoer) {
    let startIndex = arr.indexOf(firstFlavor);
    let endIndex = arr.indexOf(secondFlavoer);
    
    let result = arr.slice(startIndex, endIndex + 1);
    return result
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie'
   )