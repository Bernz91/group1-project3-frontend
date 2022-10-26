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

// export const extractArr = (arr, function) => {
//   const newArr = [];
//   arr.forEach((item) => {
//       const newItem = function (item)
//       newArr.push(newItem);
//   });
// };
