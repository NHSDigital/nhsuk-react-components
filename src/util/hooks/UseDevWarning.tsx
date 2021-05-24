import { useEffect } from 'react';
import isDev from '../IsDev';

type ConditionFn = () => boolean;

const useDevWarning = (warning: string, condition: ConditionFn = () => true): void => {
  useEffect(() => {
    if (isDev() && condition()) {
      // eslint-disable-next-line no-console
      console.warn(warning);
    }
  }, [warning]);
};

export default useDevWarning;
