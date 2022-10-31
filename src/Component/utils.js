import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
    const line = extractObj(item, keysToExtract);
    newArr.push(line);
  });
  return newArr;
};

export const calcQuantity = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    sum += Object.keys(item).reduce((prev) => prev + item.quantity, 0);
  });
  return sum;
};

export const calcTotalCost = (obj) => {
  let sum = 0;
  sum += Object.keys(obj).reduce((prev, key) => prev + obj[key].cost, 0);

  return sum;
};

export const postOrderDetails = (orderId, orders) => {
  orders.map((order) => {
    return axios.post(`${BACKEND_URL}/orders/${orderId}/orderDetails`, {
      orderId: orderId,
      fabricId: order["back"].id,
      collarId: order["collar"].id,
      cuffId: order["cuff"].id,
      frontId: order["front"].id,
      pocketId: order["pocket"].id,
      backId: order["back"].id,
      quantity: order["quantity"],
      singleprice: order["price"],
      totalprice: order["subtotal"],
    });
  });
};

export const deleteWishlist = (userId, wishlistId) => {
  return axios.delete(`${BACKEND_URL}/users/${userId}/wishlists/${wishlistId}`);
};

// export const updateCartlength = (userId) => {
//   axios
//     .get(`${BACKEND_URL}/users/${userId}/wishlists/`)
//     .then((res) => res.data)
//     .then((res) => {
//       console.log("length", res.length);
//       return res.length;
//     });
// };

export const concatStr = (array = []) => {
  let str = ""
  for (let i = 0; i < array.length; i++) {
    str += array[i]
    str += " "
  }
  return str
}