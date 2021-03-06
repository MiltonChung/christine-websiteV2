import * as React from "react";

export type ComponentProps<T> = {
  className?: string;
  children?: React.ReactNode;
} & T;

export type FComponent<T = Record<string, unknown>> = (
  props: ComponentProps<T>
) => JSX.Element;

export type SanityImage = {
  asset: {
    url: string;
    _id: string;
  };
  alt: string;
};
