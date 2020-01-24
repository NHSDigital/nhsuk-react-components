/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  SmallEmdashIcon,
  CrossIcon,
  EmdashIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  TickIcon,
} from '../src';

const stories = storiesOf('Icons', module);

stories
  .addDecorator(centered)
  .add('ArrowLeft', () => <ArrowLeftIcon />)
  .add('ArrowRight', () => <ArrowRightIcon />)
  .add('ArrowRightCircle', () => <ArrowRightCircleIcon />)
  .add('ChevronLeft', () => <ChevronLeftIcon />)
  .add('ChevronRight', () => <ChevronRightIcon />)
  .add('Close', () => <CloseIcon />)
  .add('Cross', () => <CrossIcon />)
  .add('SmallEmdash', () => <SmallEmdashIcon />)
  .add('Emdash', () => <EmdashIcon />)
  .add('Minus', () => <MinusIcon />)
  .add('Plus', () => <PlusIcon />)
  .add('Search', () => <SearchIcon />)
  .add('Tick', () => <TickIcon />);
