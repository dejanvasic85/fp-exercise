export const toDecimalValue = (percent: number) => 1 - percent / 100;

export const discountCourses = (courses, discountPercent) => {
  return courses.map((c) => {
    return {
      ...c,
      price: c.price * toDecimalValue(discountPercent),
    };
  });
};

export const discountCoursesByPercent =
  (discountPercent: number) => (courses) => {
    return courses.map((c) => {
      return {
        ...c,
        price: c.price * toDecimalValue(discountPercent),
      };
    });
  };
