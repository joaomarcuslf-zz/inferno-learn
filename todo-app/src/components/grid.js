import Inferno from "inferno";

export const Columns = ({ className = "", children, ...props }) => (
  <div class={`columns ${className}`} {...props}>
    {children}
  </div>
);

export const Column = ({ className = "", children, ...props }) => (
  <div class={`column ${className}`} {...props}>
    {children}
  </div>
);
