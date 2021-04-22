import React from "react";
import Select from "../Select";
import { shallow } from "enzyme";

describe(`Select`, () => {
    afterEach(() => {
        jest.restoreAllMocks();
      });
    const SelectComp = ({onHandle}: any) => {
        const ref = React.useRef<HTMLSelectElement | null>(null);
        const handleClick = () => {
            if(!ref.current) return;
            onHandle();
        };

        return (
          <Select onClick={handleClick} selectRef={ref} />
        );
    };
    it(`should do nothing if ref does not exist`, () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
        const component = shallow(<SelectComp />);
        console.log(component.debug());
        component.find('Select').simulate('click');
        expect(useRefSpy).toBeCalledWith(null);
    });
})