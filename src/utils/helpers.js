export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);

  return newNumber;
};

export const getUniqueValues = (data, type) => {
  // console.log(data);
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  // get unique value
  return ["all", ...new Set(unique)];
};
