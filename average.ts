import { calculateTotalPrice } from "./total";

const calculateAveragePrice = (courses) =>
  courses.length === 0 ? 0 : calculateTotalPrice(courses) / courses.length;
