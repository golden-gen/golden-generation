import React from "react";

type TextProps = {
  children: string;
};

export const Text: React.FC<
  Partial<TextProps> &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
> = (props) => {
  const { children } = props;
  return <p {...props}>{children}</p>;
};
