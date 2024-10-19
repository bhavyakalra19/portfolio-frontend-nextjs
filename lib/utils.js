// import clsx, {ClassValue} from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(classNames(...inputs));
}