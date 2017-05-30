import Inferno from "inferno";

export const Table = ({ className = "", children, ...props }) => (
  <table class={`table ${className}`} {...props}>
    {children}
  </table>
);

export const Thead = ({ className = "", children, ...props }) => (
  <thead class={`thead ${className}`} {...props}>
    {children}
  </thead>
);

export const Tfoot = ({ className = "", children, ...props }) => (
  <tfoot class={`tfoot ${className}`} {...props}>
    {children}
  </tfoot>
);

export const Tbody = ({ className = "", children, ...props }) => (
  <tbody class={`tbody ${className}`} {...props}>
    {children}
  </tbody>
);

export const Tr = ({ className = "", children, ...props }) => (
  <tr class={`tr ${className}`} {...props}>
    {children}
  </tr>
);

export const Th = ({ className = "", children, ...props }) => (
  <th class={`th ${className}`} {...props}>
    {children}
  </th>
);

export const Td = ({ className = "", children, ...props }) => (
  <td class={`td ${className}`} {...props}>
    {children}
  </td>
);
