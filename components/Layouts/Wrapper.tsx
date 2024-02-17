import { cn } from "@/lib/utils";
import React, { HtmlHTMLAttributes } from "react";

interface WrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div {...props} className={cn("container ", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
