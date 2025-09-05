// Imports
import './accordion.styles.css';
import type { AccordionPropsType, AccordionStateType } from "./accordion.types";

/** Accordion Component */
export default class AccordionComponent 
{
    // All Accordion Instances
    private static _allAccordions: Array<AccordionComponent> = [];

    // HTML Elements
    private _accordionElement: HTMLElement;
    private _accordionHeaderElement: HTMLElement;
    private _accordionHeadingElement: HTMLHeadingElement;
    private _accordionButtonElement: HTMLButtonElement;
    private _accordionBodyElement: HTMLParagraphElement;
    private _accordionButtonIconElement: HTMLImageElement;

    // HTML Content
    private _headingTitle: string;
    private _bodyContent: string;
    private _buttonIconSrc: string;
    private _buttonIconAlt: string;

    // Accordion State
    private _accordionState: AccordionStateType;

    // Constructor
    public constructor(props: AccordionPropsType) 
    {
        // Create the HTML Elements
        this._accordionElement = document.createElement('section');
        this._accordionHeadingElement = document.createElement('h2');
        this._accordionButtonElement = document.createElement('button');
        this._accordionButtonIconElement = document.createElement('img');
        this._accordionHeaderElement = document.createElement('header');
        this._accordionBodyElement = document.createElement('p');

        // Initialize HTML Content
        this._headingTitle = props.headingTitle;
        this._bodyContent = props.bodyContent;

        // Initialize Button Icon Content
        this._buttonIconSrc = "/images/icon-plus.svg";
        this._buttonIconAlt = "Plus Icon";

        // Initialize Accordion State
        this._accordionState = 'closed';

        // Initialize the HTML Elements' Content
        this._init();

        // Add Accordion Instance To All Accordions
        AccordionComponent._allAccordions.push(this);
    }

    // Initialize All HTML Elements's Content
    private _init()
    {
        this._initAccordion();
        this._initAccordionButtonIcon();
        this._initAccordionButton();
        this._initAccordionHeading();
        this._initAccordionHeader();
        this._initAccordionBody();
    }

    // Initialize The Accordion
    private _initAccordion()
    {
        // Add Class To The Accordion
        this._accordionElement.classList.add('accordion');

        // Add Accordion State To Data Attribute
        this._accordionElement.setAttribute('data-state', this._accordionState);

        // Insert The Accordion's Header & Body
        this._accordionElement.append(
            this._accordionHeaderElement,
            this._accordionBodyElement
        );
    }

    // Initialize The Accordion Heading
    private _initAccordionHeading(): void
    {
        // Insert The Heading Title
        this._accordionHeadingElement.textContent = this._headingTitle

        // Add Toggle Functionality
        this._accordionHeadingElement.addEventListener(
            'click',
            () =>
            {
                // Close All Open Accordions
                AccordionComponent._closeOtherOpenAccordions(this);

                // Toggle The Accordion State
                this._toggleAccordionState();
            }
        )
    }

    // Initialize The According Button Icon
    private _initAccordionButtonIcon()
    {
        // Initialize The Icon Content
        this._accordionButtonIconElement.src = this._buttonIconSrc;
        this._accordionButtonIconElement.alt = this._buttonIconAlt;
    }

    // Initialize The According Button
    private _initAccordionButton()
    {
        // Insert The Button Icon Into The Button
        this._accordionButtonElement.appendChild(this._accordionButtonIconElement);

        // Add Toggle Functionality
        this._accordionButtonElement.addEventListener(
            "click",
            () =>
            {
                // Close All Open Accordions
                AccordionComponent._closeOtherOpenAccordions(this);

                // Toggle The Accordion State
                this._toggleAccordionState();
            }
        )
    }

    // Initialize The Accordion Header
    private _initAccordionHeader(): void
    {
        // Insert The Heading & Button
        this._accordionHeaderElement.append(
            this._accordionHeadingElement,
            this._accordionButtonElement
        );
    }

    // Initialize The Accordion Body
    private _initAccordionBody()
    {
        // Insert The Body Content
        this._accordionBodyElement.textContent = this._bodyContent;
    }

    // Close All Other Open Accordions
    private static _closeOtherOpenAccordions(currentAccordion: AccordionComponent)
    {
        // Get All Other Accordions
        const allOtherAccordions: Array<AccordionComponent> = AccordionComponent._allAccordions.filter(
            accordion =>
            {
                return currentAccordion !== accordion;
            }
        );
        
        // Check For Any Other Open Accordion
        const openAccordion: AccordionComponent | undefined = allOtherAccordions.find(
            accordion =>
            {
                return accordion._accordionState === 'open';
            }
        );

        // If An Open Accordion Was Found
        if (openAccordion)
        {
            // Close The Accordion
            openAccordion._toggleAccordionState();
        }
    }

    // Toggle The Accordion State
    private _toggleAccordionState()
    {
        // Declare New Accordion Data
        let newAccordionBodyHeight: number;
        let newAccordionState: AccordionStateType;
        let newButtonIconSrc: string;
        let newButtonIconAlt: string;

        // If Accordion Is Open
        if (this._accordionState === 'open')
        {
            // Close The Accordion
            newAccordionBodyHeight = 0;
            newAccordionState = 'closed';
            newButtonIconSrc = '/images/icon-plus.svg'
            newButtonIconAlt = 'Plus Icon';
        }

        // If Accordion Is Closed
        else
        {
            // Open The Accordion
            newAccordionBodyHeight = this._accordionBodyElement.scrollHeight;
            newAccordionState = 'open';
            newButtonIconSrc = '/images/icon-minus.svg'
            newButtonIconAlt = 'Minus Icon';
        }

        // Updata The Current Accordion State
        this._accordionState = newAccordionState;
        this._buttonIconSrc = newButtonIconSrc;
        this._buttonIconAlt = newButtonIconAlt;
        this._accordionButtonIconElement.src = newButtonIconSrc;
        this._accordionButtonIconElement.alt = newButtonIconAlt;
        this._accordionBodyElement.style.height = `${newAccordionBodyHeight}px`;
        this._accordionElement.setAttribute('data-state', this._accordionState);
    }

    // Render The Accordion
    public render(): HTMLElement
    {
        return this._accordionElement;
    }
}