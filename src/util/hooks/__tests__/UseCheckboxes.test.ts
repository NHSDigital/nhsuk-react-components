import { act, renderHook } from "@testing-library/react-hooks";
import { generateRandomName } from "../../RandomID";
import useCheckboxes from "../UseCheckboxes";

jest.mock("../../RandomID", () => ({
    generateRandomName: jest.fn().mockImplementation(jest.requireActual("../../RandomID").generateRandomName)
}))

describe("UseCheckboxes", () => {
    it("can lease and unlease references", () => {
        const {result} = renderHook(() => useCheckboxes(undefined, undefined))

        const ref1 = result.current.leaseReference();
        const ref2 = result.current.leaseReference();

        expect(typeof ref1).toEqual("string");
        expect(ref1).toHaveLength(5);
        expect(typeof ref2).toEqual("string")
        expect(ref2).toHaveLength(5);
        expect(ref1).not.toEqual(ref2);

        result.current.unleaseReference(ref1);
        result.current.unleaseReference(ref2);
    });

    it("does not throw an error when unleasing an unknown reference", () => {
        const {result} = renderHook(() => useCheckboxes(undefined, undefined))
        result.current.unleaseReference("idonotexist");
    })

    it("leaseReference is unique", () => {
        const {result} = renderHook(() => useCheckboxes(undefined, undefined))
        const allRefs = [];
        Array.from(Array(10000)).forEach(() => {
            const ref = result.current.leaseReference();
            expect(allRefs.includes(ref)).toBeFalsy();
            allRefs.push(ref);
        });
    });

    it("sets conditional checkboxes", () => {
        const {result} = renderHook(() => useCheckboxes(undefined, undefined))
        const ref1 = result.current.leaseReference();
        const ref2 = result.current.leaseReference();

        expect(result.current.conditionalBoxes).toEqual([]);

        act(() => result.current.setConditional(ref1, true));

        expect(result.current.conditionalBoxes).toEqual([ref1]);

        // Adding a duplicate ref should not add another into the array
        act(() => result.current.setConditional(ref1, true));
        expect(result.current.conditionalBoxes).toEqual([ref1]);

        // Can have multiple items in the array
        act(() => result.current.setConditional(ref2, true));
        expect(result.current.conditionalBoxes).toEqual([ref1, ref2]);

        act(() => result.current.setConditional(ref1, false));
        expect(result.current.conditionalBoxes).toEqual([ref2]);

        act(() => result.current.setConditional(ref2, false));
        expect(result.current.conditionalBoxes).toEqual([]);

        act(() => result.current.setConditional(ref2, false));
        expect(result.current.conditionalBoxes).toEqual([]);
    });

    it("getBoxId will use idPrefix for generated IDs", () => {
        const {result} = renderHook(() => useCheckboxes("id", "testprefix"))

        const ref1 = result.current.leaseReference()
        const ref2 = result.current.leaseReference()

        const id1 = result.current.getBoxId(ref1)
        const id2 = result.current.getBoxId(ref2)

        expect(id1).toEqual("testprefix-1")
        expect(id2).toEqual("testprefix-2")
    });

    it("getBoxId returns the same id for references", () => {
        const {result} = renderHook(() => useCheckboxes("testid", undefined))

        const boxRef = result.current.leaseReference()

        const id1 = result.current.getBoxId(boxRef)
        const id2 = result.current.getBoxId(boxRef)


        expect(id1).toEqual("testid-1")
        expect(id2).toEqual("testid-1")
    });

    it("resetBoxIds resets box count and IDs", () => {
        const {result} = renderHook(() => useCheckboxes("testid", undefined))

        const boxRef1 = result.current.leaseReference()
        const boxRef2 = result.current.leaseReference()

        expect(result.current.getBoxId(boxRef1)).toEqual("testid-1")
        expect(result.current.getBoxId(boxRef2)).toEqual("testid-2")

        result.current.resetBoxIds()

        // ID is given in the order of execution
        expect(result.current.getBoxId(boxRef2)).toEqual("testid-1")
        expect(result.current.getBoxId(boxRef1)).toEqual("testid-2")
    });

    it("will not allow the same name for two boxes", () => {
        const {result} = renderHook(() => useCheckboxes("testid", undefined))

        let callCount = 0;
        const returnNames = ["random-1", "random-1", "random-2"]
        const generateRandomNameMock = () => {
            const name = returnNames[callCount]
            callCount += 1;
            return name
        }

        (generateRandomName as jest.Mock).mockReset().mockImplementation(generateRandomNameMock)
        const boxRef1 = result.current.leaseReference();
        const boxRef2 = result.current.leaseReference();

        expect(boxRef1).toEqual("random-1");
        expect(boxRef2).toEqual("random-2");

        expect(generateRandomName).toHaveBeenCalledTimes(3);
    })

})
