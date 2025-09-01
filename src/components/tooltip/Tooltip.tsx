import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import './_Tooltip.scss';

interface TooltipProps extends HTMLProps<HTMLDivElement> {
	textProps?: HTMLProps<HTMLSpanElement>;
	tooltip: string;
}

const Tooltip: React.FC<TooltipProps> = ({
	className,
	tooltip,
	textProps = {},
	children,
	id,
	...rest
}) => (
	<div
		className={classNames('nhsuk-tooltip', className)}
		id={id}
		aria-labelledby={id === undefined ? undefined : `${id}-tooltip-text`}
		{...rest}
	>
		{children}
		<span
			id={id === undefined ? undefined : `${id}-tooltip-text`}
			className={classNames('nhsuk-tooltip__text', textProps?.className)}
			{...textProps}
		>
			{tooltip}
		</span>
	</div>
);


export default Tooltip;
