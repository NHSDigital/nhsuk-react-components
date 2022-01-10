import { useRef, useState } from 'react';
import { generateRandomName } from '../RandomID';

type LeaseReferenceFunc = () => string;
type UnleaseReferenceFunc = (reference: string) => void
type SetConditionalFunc = (reference: string, hasConditional: boolean) => void
type GetBoxIdFunc = (reference: string) => string;
type ResetBoxIdsFunc = () => void;

type UseCheckboxesHook = (
  id: string | undefined,
  idPrefix: string | undefined
) => {
  conditionalBoxes: string[],
  leaseReference: LeaseReferenceFunc;
  unleaseReference: UnleaseReferenceFunc;
  setConditional: SetConditionalFunc,
  getBoxId: GetBoxIdFunc,
  resetBoxIds: ResetBoxIdsFunc,
}

const useCheckboxes: UseCheckboxesHook = (id, idPrefix) => {
  const [conditionalBoxes, setConditionalBoxes] = useState<string[]>([]);
  const boxIds = useRef<Record<string, string>>({});
  const boxReferences = useRef<string[]>([]);
  const boxCount = useRef<number>(0);

  const leaseReference: LeaseReferenceFunc = () => {
    const reference = generateRandomName();
    if (boxReferences.current.includes(reference)) {
      return leaseReference();
    }
    boxReferences.current.push(reference);
    return reference;
  };

  const unleaseReference: UnleaseReferenceFunc = (reference) => {
    const boxRefIndex = boxReferences.current.findIndex((ref) => ref === reference);
    if (boxRefIndex !== -1) {
      delete boxReferences.current[boxRefIndex];
    }
  };

  const setConditional: SetConditionalFunc = (reference, hasConditional) => {
    setConditionalBoxes((boxes) => {
      const currentHasConditional = boxes.includes(reference);
      if (currentHasConditional && !hasConditional) return boxes.filter((ref) => ref !== reference);
      if (!currentHasConditional && hasConditional) return [...boxes, reference];
      return boxes;
    });
  };

  const getBoxId: GetBoxIdFunc = (reference) => {
    if (reference in boxIds.current) {
      return boxIds.current[reference];
    }
    boxCount.current += 1;
    boxIds.current[reference] = `${idPrefix || id}-${boxCount.current}`;
    return boxIds.current[reference];
  };

  const resetBoxIds: ResetBoxIdsFunc = () => {
    boxCount.current = 0;
    boxIds.current = {};
  };

  return {
    conditionalBoxes,
    leaseReference,
    unleaseReference,
    setConditional,
    getBoxId,
    resetBoxIds,
  };
};

export default useCheckboxes;
