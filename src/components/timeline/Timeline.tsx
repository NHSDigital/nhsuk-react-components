import React from 'react';
import Event, { EventProps } from './components/Event';

type TimelineProps = {
  events: Array<EventProps>;
};

const Timeline: React.FC<TimelineProps> = ({ events }) => (
  <div className="nhsuk-timeline">
    {events.map(({ title, instigator, date, description, action }, index) => (
      <Event
        key={index.toString()}
        title={title}
        instigator={instigator}
        date={date}
        description={description}
        action={action}
      />
    ))}
  </div>
);

export default Timeline;
