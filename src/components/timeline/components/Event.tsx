import React, { ReactNode } from 'react';

export interface EventProps {
  title: ReactNode;
  instigator?: ReactNode;
  date: string;
  description?: Array<ReactNode>;
  action?: ReactNode;
}

const Event: React.FC<EventProps> = ({ title, instigator, date, description = [], action }) => (
  <div className="nhsuk-timeline__event nhsuk-u-margin-bottom-2">
    <h2 className="nhsuk-timeline__title">
      <span className="nhsuk-timeline__status">{title}</span>
      {instigator && <span className="nhsuk-timeline__by"> by {instigator}</span>}
      {action && <span className="nhsuk-timeline__action">{action}</span>}
    </h2>
    <p className="nhsuk-timeline__date">
      <time dateTime={date}>{date}</time>
    </p>
    {description.map((descriptionItem, index) => (
      <p key={index.toString()} className="nhsuk-timeline__description-item">
        {descriptionItem}
      </p>
    ))}
  </div>
);

export default Event;
