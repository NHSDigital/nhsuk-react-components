import { HTMLProps } from "react";

export interface AsElementLink<T extends HTMLElement> extends HTMLProps<T> {
    asElement?: React.ElementType;
    to?: string;
}