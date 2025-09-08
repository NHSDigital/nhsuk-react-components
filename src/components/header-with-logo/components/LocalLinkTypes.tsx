import React from 'react';
export interface AsElementLink<T extends HTMLElement> extends React.HTMLProps<T> {
    asElement?: React.ElementType;
    to?: string;
}
