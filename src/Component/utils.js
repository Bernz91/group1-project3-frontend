export const extractObj = (obj, keysToExtract = []) => {
  const newObj = {};
  for (let i = 0; i < keysToExtract.length; i++) {
    if (keysToExtract[i] in obj) {
      const objKey = keysToExtract[i];
      newObj[objKey] = obj[objKey];
    //   console.log(newObj);
    }
  }
  return newObj;
};


export const extractArr = (arr, keysToExtract = []) => {
  const newArr = [];
  arr.forEach((item) => {
    const line = extractObj (item, keysToExtract) 
    newArr.push(line)
  });
  return newArr
};

// export const calcSum = (arr) => {
//   let sum = 0;
//   arr.forEach ((item) => {
//     sum += Object.keys(item).reduce ((prev, key) => 
//       prev + item[key].cost, 0
//     )   
//   })
//   return sum
// }

export const calcSum = (obj) => {
  let sum = 0;
  sum += Object.keys(obj).reduce ((prev, key) => 
    prev + obj[key].cost, 0
  )   

  return sum
}


