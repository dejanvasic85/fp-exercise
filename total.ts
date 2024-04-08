export const calculateTotalPrice = (courses) =>
  courses.reduce((prev, curr) => prev + curr.price, 0);
