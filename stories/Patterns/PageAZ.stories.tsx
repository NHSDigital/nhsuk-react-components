import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import NavAZ from '@patterns/nav-a-z';
import HeadingLevel from '@components/utils/HeadingLevel';
import Panel from '@patterns/panel/Panel';
import Container from '@components/layout/Container';
import Row from '@components/layout/Row';
import Col from '@components/layout/Col';

/**
 * A to Z is a way of presenting a number of pages alphabetically.
 *
 * See the NHS digital service manual: https://service-manual.nhs.uk/design-system/patterns/a-to-z-page
 */

const meta: Meta = {
  title: 'Patterns/PageAZ',
  args: {
    fullAlphabet: false,
    removedLetters: [],
    disabledLetters: [],
    letters: [],
  },
};
export default meta;
type Story = StoryObj;

export const Standard: Story = {
  render: () => (
    <Container>
      <main className="nhsuk-main-wrapper" id="maincontent" role="main">
        <Row>
          <Col width="full">
            <HeadingLevel headingLevel="h1">Health A to Z</HeadingLevel>

            <NavAZ id="nhsuk-nav-a-z">
              <NavAZ.LinkItem href="#A">A</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#B">B</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#C">C</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#D">D</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#E">E</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#F">F</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#G">G</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#H">H</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#I">I</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#J">J</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#K">K</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#L">L</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#M">M</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#N">N</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#O">O</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#P">P</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#Q">Q</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#R">R</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#S">S</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#T">T</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#U">U</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#V">V</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#W">W</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#X">X</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#Y">Y</NavAZ.LinkItem>
              <NavAZ.LinkItem href="#Z">Z</NavAZ.LinkItem>
            </NavAZ>

            <Panel label="A" labelProps={{ id: 'A' }} backToTop backToTopLink="#nhsuk-nav-a-z">
              <Panel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">AAA</Panel.LinkItem>
              <Panel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">
                Abdominal aortic aneurysm
              </Panel.LinkItem>
              <Panel.LinkItem href="/conditions/abscess/">Abscess</Panel.LinkItem>
            </Panel>

            <Panel label="B" labelProps={{ id: 'B' }} backToTop backToTopLink="#nhsuk-nav-a-z">
              <Panel.Item>There are currently no conditions listed</Panel.Item>
            </Panel>

            <Panel label="C" labelProps={{ id: 'C' }} backToTop backToTopLink="#nhsuk-nav-a-z">
              <Panel.LinkItem href="/conditions/chest-pain/">Chest pain</Panel.LinkItem>
              <Panel.LinkItem href="/conditions/cold-sores/">Cold sore</Panel.LinkItem>
            </Panel>

            <Panel label="D" labelProps={{ id: 'D' }} backToTop backToTopLink="#nhsuk-nav-a-z">
              <Panel.LinkItem href="/conditions/dandruff/">Dandruff</Panel.LinkItem>
              <Panel.LinkItem href="/conditions/dementia/">Dementia</Panel.LinkItem>
              <Panel.LinkItem href="/conditions/toothache/">Toothache</Panel.LinkItem>
            </Panel>
          </Col>
        </Row>
      </main>
    </Container>
  ),
};

NavAZ.LinkItem.displayName = 'NavAZ.LinkItem';
