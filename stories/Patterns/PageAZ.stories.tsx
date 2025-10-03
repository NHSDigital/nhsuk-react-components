import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Card, Col, Container, HeadingLevel, NavAZ, Row } from 'nhsuk-react-components';

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
      <main className="nhsuk-main-wrapper" id="maincontent">
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

            <Card cardType="feature">
              <Card.Content>
                <Card.Heading id="A">A</Card.Heading>
                <ul className="nhsuk-list nhsuk-list--border">
                  <li>
                    <a href="/conditions/abdominal-aortic-aneurysm/">AAA</a>
                  </li>
                  <li>
                    <a href="/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a>
                  </li>
                  <li>
                    <a href="/conditions/abscess/">Abscess</a>
                  </li>
                </ul>
              </Card.Content>
            </Card>

            <div className="nhsuk-back-to-top">
              <a className="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
                Back to top
              </a>
            </div>

            <Card cardType="feature">
              <Card.Content>
                <Card.Heading id="B">B</Card.Heading>
                <ul className="nhsuk-list nhsuk-list--border">
                  <li>There are currently no conditions listed</li>
                </ul>
              </Card.Content>
            </Card>

            <div className="nhsuk-back-to-top">
              <a className="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
                Back to top
              </a>
            </div>

            <Card cardType="feature">
              <Card.Content>
                <Card.Heading id="C">C</Card.Heading>
                <ul className="nhsuk-list nhsuk-list--border">
                  <li>
                    <a href="/conditions/chest-pain/">Chest pain</a>
                  </li>
                  <li>
                    <a href="/conditions/cold-sores/">Cold sore</a>
                  </li>
                </ul>
              </Card.Content>
            </Card>

            <div className="nhsuk-back-to-top">
              <a className="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
                Back to top
              </a>
            </div>

            <Card cardType="feature">
              <Card.Content>
                <Card.Heading id="D">D</Card.Heading>
                <ul className="nhsuk-list nhsuk-list--border">
                  <li>
                    <a href="/conditions/dandruff/">Dandruff</a>
                  </li>
                  <li>
                    <a href="/conditions/dementia/">Dementia</a>
                  </li>
                  <li>
                    <a href="/conditions/toothache/">Dental pain</a>
                  </li>
                </ul>
              </Card.Content>
            </Card>

            <div className="nhsuk-back-to-top">
              <a className="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
                Back to top
              </a>
            </div>
          </Col>
        </Row>
      </main>
    </Container>
  ),
};
