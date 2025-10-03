import { useEffect } from 'react';
import { isDev } from '#util/tools';

type ConditionFn = () => boolean;

export const useDevWarning = (warning: string, condition: ConditionFn = () => true): void => {
  useEffect(() => {
    if (isDev() && condition()) {
      console.warn(warning);
    }
  }, [warning, condition]);
};
