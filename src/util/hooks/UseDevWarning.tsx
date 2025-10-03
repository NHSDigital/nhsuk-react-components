import { useEffect } from 'react';
import { isDev } from '#util/tools';

type ConditionFn = () => boolean;

export const useDevWarning = (warning: string, condition: ConditionFn = () => true): void => {
  useEffect(() => {
    if (isDev() && condition()) {
      // eslint-disable-next-line no-console
      console.warn(warning);
    }
  }, [warning]);
};
