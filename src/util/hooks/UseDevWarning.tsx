import { useEffect } from 'react';
import isDev from '../IsDev';

const useDevWarning = (warning: string): void => {
  useEffect(() => {
    if (isDev()) {
      // eslint-disable-next-line no-console
      console.warn(warning);
    }
  }, [warning]);
};

export default useDevWarning;
