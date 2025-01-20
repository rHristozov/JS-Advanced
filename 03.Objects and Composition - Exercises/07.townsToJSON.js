function towns(arr) {
    let resultArr = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].trim() === '') {
            continue;
        }
      let [empty, town, latitude, longitude] = arr[i].split(/\s*\|\s*/);
      latitude = Number(latitude).toFixed(2);
      longitude = Number(longitude).toFixed(2);
  
      let townObj = {
        Town: town,
        Latitude: Number(latitude),
        Longitude: Number(longitude),
      };
      resultArr.push(townObj);
    }
    console.log(JSON.stringify(resultArr));
    
  }
  
  towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
    );