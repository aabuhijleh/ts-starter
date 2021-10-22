import { AnotherInterface } from "../types";

export const binarySearch = (value: number, list: AnotherInterface[]) => {
  let first = 0; //left endpoint

  let last = list.length - 1; //right endpoint

  let position = -1;

  let found = false;

  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);

    if (list[middle].id == value) {
      found = true;

      position = middle;
    } else if (list[middle].id > value) {
      //if in lower half

      last = middle - 1;
    } else {
      //in in upper half

      first = middle + 1;
    }
  }

  return position;
};
