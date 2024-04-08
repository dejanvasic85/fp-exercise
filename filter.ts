export const filterByMinPrice = (courses, minPrice) => {
  return courses.filter((c) => c.price >= minPrice);
};

export const filterByMinPrice2 = (minPrice: number) => (courses) =>
  courses.filter((c) => c.price >= minPrice);
