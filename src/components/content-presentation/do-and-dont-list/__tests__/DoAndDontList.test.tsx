import { render } from '@testing-library/react';
import { createRef } from 'react';

import { DoAndDontList } from '..';

import { renderClient, renderServer } from '#util/components';

describe('DoAndDontList', () => {
  describe('list type "do"', () => {
    it('matches snapshot', async () => {
      const { container } = await renderClient(<DoAndDontList listType="do" />, {
        className: 'nhsuk-do-dont-list',
      });

      expect(container).toMatchSnapshot('DoDontList-Do');
    });

    it('matches snapshot (via server)', async () => {
      const { container, element } = await renderServer(<DoAndDontList listType="do" />, {
        className: 'nhsuk-do-dont-list',
      });

      expect(container).toMatchSnapshot('server');

      await renderClient(element, {
        className: 'nhsuk-do-dont-list',
        hydrate: true,
        container,
      });

      expect(container).toMatchSnapshot('client');
    });

    it('forwards refs', async () => {
      const ref = createRef<HTMLDivElement>();

      const { container } = await renderClient(<DoAndDontList listType="do" ref={ref} />, {
        className: 'nhsuk-do-dont-list',
      });

      const listEl = container.querySelector('div');

      expect(ref.current).toBe(listEl);
      expect(ref.current).toHaveClass('nhsuk-do-dont-list');
    });

    it('adds the correct headings', () => {
      const { container } = render(<DoAndDontList listType="do" />);

      expect(container.querySelector('h3.nhsuk-do-dont-list__label')?.textContent).toEqual('Do');
    });

    it('adds the correct classes', () => {
      const { container } = render(<DoAndDontList listType="do" />);

      expect(container.querySelector('ul.nhsuk-list--tick')).toBeTruthy();
      expect(container.querySelector('ul.nhsuk-list--cross')).toBeFalsy();
    });

    describe('dev warning', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should not warn when using do list', () => {
        render(<DoAndDontList listType="do" />);

        expect(console.warn).not.toHaveBeenCalled();
      });
    });
  });

  describe('list type "dont"', () => {
    it('matches snapshot', async () => {
      const { container } = await renderClient(<DoAndDontList listType="dont" />, {
        className: 'nhsuk-do-dont-list',
      });

      expect(container).toMatchSnapshot('DoDontList-Dont');
    });

    it('matches snapshot (via server)', async () => {
      const { container, element } = await renderServer(<DoAndDontList listType="dont" />, {
        className: 'nhsuk-do-dont-list',
      });

      expect(container).toMatchSnapshot('server');

      await renderClient(element, {
        className: 'nhsuk-do-dont-list',
        hydrate: true,
        container,
      });

      expect(container).toMatchSnapshot('client');
    });

    it('adds the correct headings', () => {
      const { container } = render(<DoAndDontList listType="dont" />);

      expect(container.querySelector('h3.nhsuk-do-dont-list__label')?.textContent).toEqual("Don't");
    });

    it('adds the correct classes', () => {
      const { container } = render(<DoAndDontList listType="dont" />);

      expect(container.querySelector('ul.nhsuk-list--tick')).toBeFalsy();
      expect(container.querySelector('ul.nhsuk-list--cross')).toBeTruthy();
    });
  });

  describe('DoDontList.Item', () => {
    it('matches snapshot', () => {
      const { container } = render(<DoAndDontList.Item>Text</DoAndDontList.Item>);

      expect(container).toMatchSnapshot('DoDontList.Item');
    });

    describe('list type "do"', () => {
      it('inherits type from context', () => {
        const { container } = render(
          <DoAndDontList listType="do">
            <DoAndDontList.Item>Do</DoAndDontList.Item>
          </DoAndDontList>,
        );

        expect(container.querySelector('.nhsuk-icon--tick')).toBeTruthy();
        expect(container.querySelector('.nhsuk-icon--cross')).toBeFalsy();
      });

      it('items render custom prefix text', () => {
        const { container } = render(
          <DoAndDontList listType="do">
            <DoAndDontList.Item prefixText="do ">something good 1</DoAndDontList.Item>
            <DoAndDontList.Item>something good 2</DoAndDontList.Item>
            <DoAndDontList.Item prefixText={<span>also do </span>}>
              something good 3
            </DoAndDontList.Item>
            <DoAndDontList.Item prefixText={undefined}>something good 4</DoAndDontList.Item>
            <DoAndDontList.Item prefixText={null}>something good 5</DoAndDontList.Item>
          </DoAndDontList>,
        );

        expect(container.querySelector('.nhsuk-list--tick')?.children[0].textContent).toBe(
          'do something good 1',
        );
        expect(container.querySelector('.nhsuk-list--tick')?.children[1].textContent).toBe(
          'something good 2',
        );
        expect(container.querySelector('.nhsuk-list--tick')?.children[2].textContent).toBe(
          'also do something good 3',
        );
        expect(container.querySelector('.nhsuk-list--tick')?.children[3].textContent).toBe(
          'something good 4',
        );
        expect(container.querySelector('.nhsuk-list--tick')?.children[4].textContent).toBe(
          'something good 5',
        );
      });
    });

    describe('list type "dont"', () => {
      it('inherits type from context', () => {
        const { container } = render(
          <DoAndDontList listType="dont">
            <DoAndDontList.Item>Don&apos;t</DoAndDontList.Item>
          </DoAndDontList>,
        );

        expect(container.querySelector('.nhsuk-icon--tick')).toBeFalsy();
        expect(container.querySelector('.nhsuk-icon--cross')).toBeTruthy();
      });

      it("item includes 'do not' by default", () => {
        const { container } = render(
          <DoAndDontList listType="dont">
            <DoAndDontList.Item>do something bad</DoAndDontList.Item>
          </DoAndDontList>,
        );
        expect(container.querySelector('.nhsuk-list--cross')?.textContent).toEqual(
          'do not do something bad',
        );
      });

      it('items render custom prefix text', () => {
        const { container } = render(
          <DoAndDontList listType="dont">
            <DoAndDontList.Item prefixText="do not ">do something bad 1</DoAndDontList.Item>
            <DoAndDontList.Item>do something bad 2</DoAndDontList.Item>
            <DoAndDontList.Item prefixText={<span>don&apos;t do </span>}>
              something bad 3
            </DoAndDontList.Item>
            <DoAndDontList.Item prefixText={undefined}>something bad 4</DoAndDontList.Item>
            <DoAndDontList.Item prefixText={null}>something bad 5</DoAndDontList.Item>
          </DoAndDontList>,
        );

        expect(container.querySelector('.nhsuk-list--cross')?.children[0].textContent).toBe(
          'do not do something bad 1',
        );
        expect(container.querySelector('.nhsuk-list--cross')?.children[1].textContent).toBe(
          'do not do something bad 2',
        );
        expect(container.querySelector('.nhsuk-list--cross')?.children[2].textContent).toBe(
          "don't do something bad 3",
        );
        expect(container.querySelector('.nhsuk-list--cross')?.children[3].textContent).toBe(
          'do not something bad 4',
        );
        expect(container.querySelector('.nhsuk-list--cross')?.children[4].textContent).toBe(
          'something bad 5',
        );
      });
    });
  });
});
