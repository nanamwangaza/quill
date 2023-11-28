import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
children
}:{
    className?:string
    children:ReactNode
})=>{
{
  return (<div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
    {/* here we merge this given className with the className that will be provided when this cpt is used */}
      {children}
      {/* means that we can wrap all of our pages in this component */}
  </div>) 
}
}
export default MaxWidthWrapper