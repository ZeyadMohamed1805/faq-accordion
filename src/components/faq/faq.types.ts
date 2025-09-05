// FAQ Types

import type { AccordionStateType } from "../accordion/accordion.types";

// Accordion Data Type
export type AccordionDataType = Array<
    {
        headingTitle: string;
        bodyContent: string;
        defaultAccordionState?: AccordionStateType;
    }
>;