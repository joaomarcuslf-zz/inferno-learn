import Inferno from "inferno";

export const Container = ({ className = "", children, ...props }) => (
  <div class={`container ${className}`} {...props}>
    {children}
  </div>
);

export const Link = ({ className = "", children, ...props }) => (
  <a class={`title ${className}`} {...props}>
    {children}
  </a>
);
