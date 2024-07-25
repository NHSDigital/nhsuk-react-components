import React, { useState } from 'react';
import { DateInput, ErrorSummary, Fieldset, ReadingWidth } from '../../src';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/form-elements/button';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-summary" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `ErrorSummary` component has four subcomponents:
 *
 * - `ErrorSummary.Title`
 * - `ErrorSummary.Body`
 * - `ErrorSummary.List`
 * - `ErrorSummary.Item`
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { ErrorSummary } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <ErrorSummary>
 *             <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
 *             <ErrorSummary.Body>
 *                 <p>Optional description of the errors and how to correct them</p>
 *                 <ErrorSummary.List>
 *                     <ErrorSummary.Item href="#example-error-1">
 *                         Link to error with explanation
 *                     </ErrorSummary.Item>
 *                     <ErrorSummary.Item href="#example-error-2">
 *                         Link to error with explanation
 *                     </ErrorSummary.Item>
 *                 </ErrorSummary.List>
 *             </ErrorSummary.Body>
 *         </ErrorSummary>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof ErrorSummary> = {
  title: 'Form Elements/ErrorSummary',
  component: ErrorSummary,
};
export default meta;
type Story = StoryObj<typeof ErrorSummary>;

ErrorSummary.Title.displayName = 'ErrorSummary.Title';
ErrorSummary.Body.displayName = 'ErrorSummary.Body';
ErrorSummary.List.displayName = 'ErrorSummary.List';
ErrorSummary.Item.displayName = 'ErrorSummary.Item';

/**
 * ## Note
 * 
 * This example disables the `autoFocus` prop intentionally for demonstration purposes.
 * 
 * The `autoFocus` prop is used to automatically focus the `ErrorSummary` component when it is rendered.
 * This is useful for accessibility purposes, as it allows users to quickly navigate to the error summary, and should be enabled by default.
 */
export const Standard: Story = {
  args: {
    autoFocus: false
  },
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <p>Optional description of the errors and how to correct them</p>
        <ErrorSummary.List>
          <ErrorSummary.Item href="#example-error-1">
            Link to error with explanation
          </ErrorSummary.Item>
          <ErrorSummary.Item href="#example-error-2">
            Link to error with explanation
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>
  ),
};

export const InAForm: Story = {
  args: {
    autoFocus: false
  },
  render: (args) => (
    <>
      <ErrorSummary {...args}>
        <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
        <ErrorSummary.Body>
          <p>Optional description of the errors and how to correct them</p>
            <ErrorSummary.List>
              <ErrorSummary.Item href="#date-input-day">
                Please enter a valid date
              </ErrorSummary.Item>
            </ErrorSummary.List>
          </ErrorSummary.Body>
        </ErrorSummary>
        <ReadingWidth>
          <p>This is a bunch of ipsum lorem content to pad the page out.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisi ante. Pellentesque ut libero rhoncus, pretium nibh sit amet, maximus arcu. Nam sodales sit amet lectus eu rutrum. Fusce tristique mollis nisi nec maximus. Donec vehicula nunc velit, ac egestas tellus malesuada ut. Vestibulum pharetra suscipit mattis. Pellentesque vel sollicitudin ex, congue suscipit mauris. Duis dictum leo sit amet vehicula tristique. Etiam malesuada dui in arcu porttitor malesuada. Maecenas eu odio vitae libero dignissim lacinia. Phasellus rhoncus non quam ac dignissim. Vivamus et consequat est. Nulla non tellus mattis nibh tincidunt sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc bibendum suscipit luctus.</p>
          <p>Nam eget feugiat odio. Mauris tincidunt nibh mauris, quis dignissim dui eleifend quis. Maecenas ut vestibulum sem. Nam eget aliquam dolor. Sed a ex eget lacus congue accumsan. Nunc sem quam, finibus nec justo at, dignissim commodo arcu. Sed consectetur, felis sed iaculis mattis, nulla lacus rutrum lorem, ut sollicitudin ante sapien a lectus.</p>
          <p>Donec varius arcu vitae ultrices elementum. Quisque volutpat diam ut lobortis blandit. Integer bibendum neque a nibh sollicitudin sagittis. Maecenas volutpat at augue ac mattis. Aenean quis nulla ac lacus euismod aliquet. Nam ut feugiat quam. Suspendisse at imperdiet neque, vitae finibus mi. Praesent venenatis faucibus mauris, in gravida ante blandit sit amet. Fusce scelerisque, orci in gravida tristique, enim sem laoreet urna, in pulvinar magna quam molestie eros. Integer eu odio leo. Aliquam erat volutpat. Integer a vulputate ipsum. Mauris id finibus felis, eleifend rutrum sapien. Curabitur ac urna dapibus, convallis diam vitae, vehicula metus.</p>
          <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam metus est, mollis at vestibulum ut, fringilla commodo neque. Integer vestibulum sollicitudin enim. Nulla quam lacus, tempus sed leo at, tempor vulputate odio. Vestibulum pharetra metus quis justo mollis ullamcorper. Pellentesque ut nunc nec magna ornare pellentesque. Vivamus vel auctor magna, eu venenatis purus. Sed tincidunt rhoncus cursus. Nulla facilisi. Praesent sapien quam, pulvinar in arcu et, egestas volutpat odio. In tincidunt venenatis enim, non bibendum dui.</p>
          <p>Fusce eget eleifend ante. Sed pretium neque sapien, vel commodo nulla laoreet et. Proin id congue ante. Fusce maximus mi tellus, et luctus ante semper eu. Cras facilisis fermentum libero ut iaculis. Nulla ullamcorper leo vitae commodo hendrerit. Praesent luctus mollis pretium.</p>
          </ReadingWidth>
        <form>
          <Fieldset>
            <Fieldset.Legend>What is your date of birth?</Fieldset.Legend>
            <DateInput
              id='date-input'
              error='Please enter a valid date'
              defaultValue={{day: '40', month: '06', year: '2000'}}
            />
          </Fieldset>
          <Button type="submit">Submit</Button>
        </form>
        <ReadingWidth>
          <p>This is a bunch of ipsum lorem content to pad the page out.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisi ante. Pellentesque ut libero rhoncus, pretium nibh sit amet, maximus arcu. Nam sodales sit amet lectus eu rutrum. Fusce tristique mollis nisi nec maximus. Donec vehicula nunc velit, ac egestas tellus malesuada ut. Vestibulum pharetra suscipit mattis. Pellentesque vel sollicitudin ex, congue suscipit mauris. Duis dictum leo sit amet vehicula tristique. Etiam malesuada dui in arcu porttitor malesuada. Maecenas eu odio vitae libero dignissim lacinia. Phasellus rhoncus non quam ac dignissim. Vivamus et consequat est. Nulla non tellus mattis nibh tincidunt sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc bibendum suscipit luctus.</p>
          <p>Nam eget feugiat odio. Mauris tincidunt nibh mauris, quis dignissim dui eleifend quis. Maecenas ut vestibulum sem. Nam eget aliquam dolor. Sed a ex eget lacus congue accumsan. Nunc sem quam, finibus nec justo at, dignissim commodo arcu. Sed consectetur, felis sed iaculis mattis, nulla lacus rutrum lorem, ut sollicitudin ante sapien a lectus.</p>
          <p>Donec varius arcu vitae ultrices elementum. Quisque volutpat diam ut lobortis blandit. Integer bibendum neque a nibh sollicitudin sagittis. Maecenas volutpat at augue ac mattis. Aenean quis nulla ac lacus euismod aliquet. Nam ut feugiat quam. Suspendisse at imperdiet neque, vitae finibus mi. Praesent venenatis faucibus mauris, in gravida ante blandit sit amet. Fusce scelerisque, orci in gravida tristique, enim sem laoreet urna, in pulvinar magna quam molestie eros. Integer eu odio leo. Aliquam erat volutpat. Integer a vulputate ipsum. Mauris id finibus felis, eleifend rutrum sapien. Curabitur ac urna dapibus, convallis diam vitae, vehicula metus.</p>
          <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam metus est, mollis at vestibulum ut, fringilla commodo neque. Integer vestibulum sollicitudin enim. Nulla quam lacus, tempus sed leo at, tempor vulputate odio. Vestibulum pharetra metus quis justo mollis ullamcorper. Pellentesque ut nunc nec magna ornare pellentesque. Vivamus vel auctor magna, eu venenatis purus. Sed tincidunt rhoncus cursus. Nulla facilisi. Praesent sapien quam, pulvinar in arcu et, egestas volutpat odio. In tincidunt venenatis enim, non bibendum dui.</p>
          <p>Fusce eget eleifend ante. Sed pretium neque sapien, vel commodo nulla laoreet et. Proin id congue ante. Fusce maximus mi tellus, et luctus ante semper eu. Cras facilisis fermentum libero ut iaculis. Nulla ullamcorper leo vitae commodo hendrerit. Praesent luctus mollis pretium.</p>
          </ReadingWidth>
    </>
  ),
};