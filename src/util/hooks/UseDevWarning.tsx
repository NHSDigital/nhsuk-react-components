import { useEffect } from 'react';
import isDev from '../IsDev';

const useDevWarning = (warning: string) => {
  useEffect(() => {
    if (isDev()) {
      // eslint-disable-next-line no-console
      console.warn(warning);
    }
  }, []);
};

export default useDevWarning;
