import Inferno from "inferno";

export const Hero = ({ className = "", children, ...props }) => (
  <div class={`hero ${className}`} {...props}>
    {children}
  </div>
);

export const HeroHead = ({ className = "", children, ...props }) => (
  <div class={`hero-head ${className}`} {...props}>
    {children}
  </div>
);

export const HeroBody = ({ className = "", children, ...props }) => (
  <div class={`hero-body ${className}`} {...props}>
    {children}
  </div>
);
