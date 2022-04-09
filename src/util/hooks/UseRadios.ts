import { useRef, useState } from 'react';
import { generateRandomName } from '../RandomID';

const useRadios = (id: string, idPrefix: string) => {
  const [conditionalRadios, setConditionalRadios] = useState<string[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const radioReferences = useRef<string[]>([]);
  const radioCount = useRef<number>(0);
  const radioIds = useRef<Record<string, string>>({});

  const leaseReference = () => {
    const reference = generateRandomName();
    if (radioReferences.current.includes(reference)) {
      return leaseReference();
    }
    radioReferences.current.push(reference);
    return reference;
  };

  const unleaseReference = (reference: string) => {
    radioReferences.current = radioReferences.current.filter((ref) => ref !== reference);
  };

  const setConditional = (reference: string, hasConditional: boolean) => {
    setConditionalRadios((radios) => {
      const currentHasConditional = conditionalRadios.includes(reference);
      if (currentHasConditional && !hasConditional)
        return radios.filter((ref) => ref !== reference);
      if (!currentHasConditional && hasConditional) return [...radios, reference];
      return radios;
    });
  };

  const setSelected = (reference: string) => {
    if (radioReferences.current.includes(reference)) {
      setSelectedRadio(reference);
    }
  };

  const getRadioId = (reference: string): string => {
    if (reference in radioIds.current) return radioIds.current[reference];
    radioCount.current += 1;
    radioIds.current[reference] = `${idPrefix || id}-${radioCount.current}`;
    return radioIds.current[reference];
  };

  const resetRadioIds = () => {
    radioCount.current = 0;
    radioIds.current = {};
  };

  return {
    selectedRadio,
    leaseReference,
    unleaseReference,
    setConditional,
    setSelected,
    conditionalRadios,
    getRadioId,
    resetRadioIds,
  };
};

export default useRadios;
