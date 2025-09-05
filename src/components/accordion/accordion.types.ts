/** According Types **/

// AccordionStateType
export type AccordionStateType = 'open' | 'closed';

// Accordion Props Type
export type AccordionPropsType =
{
    headingTitle: string;
    bodyContent: string;
    defaultAccordionState: AccordionStateType;
};