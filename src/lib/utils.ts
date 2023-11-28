import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){
    // here cn is a shortform for className
    return twMerge(clsx(inputs))
    // tailwind merge helps to merge the className inputs(resolve conflicts)
}