import React from "react";
import { FormGroup, Input } from "nhsuk-react-components";

const optionalLink = {
    link: undefined,
    href: undefined
    linkText: undefined,
    hint: `Input with Link Hint`,
    label: `Input with Link Label`
}

const { link, href, linkText } = optionalLink;

const InputWithLink = (props, this.optionalLink) => (
    <FormGroup {...props}>
        <Input hint={hint} label={label} />
        {link && (<a href={href}>{linkText}</a>)}
    </FormGroup>
);

export default InputWithLink;