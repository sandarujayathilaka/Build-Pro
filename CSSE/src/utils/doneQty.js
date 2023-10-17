export const calDoneQty = (rest, expectedqun) => {
  if (rest === undefined || expectedqun === undefined) {
    throw new Error("Both parameters must be provided");
  }

  const result = expectedqun - rest; //calculate the rest quntity to deliver for complete the order
  return result;
};

