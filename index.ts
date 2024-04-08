import { courses } from "./courses";
import { filterByMinPrice, filterByMinPrice2 } from "./filter";
import { discountCourses, discountCoursesByPercent } from "./discount";
import { calculateTotalPrice } from "./total";

import { flow, pipe } from "fp-ts/lib/function";

const coursesUpTo80Dollars = filterByMinPrice(courses, 80);
const discountedCourses = discountCourses(coursesUpTo80Dollars, 10);

const result = pipe(
  courses,
  filterByMinPrice2(80),
  discountCoursesByPercent(10)
);

console.log("result", result);
//console.log("flowResult", flowResult);
