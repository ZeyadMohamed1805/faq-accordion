// Imports
import './accordion.styles.css';
import type { AccordionPropsType } from "./accordion.types";

/** Accordion Component */
export default class AccordionComponent 
{
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
    private _buttonIconPath: string;
    private _buttonIconAlt: string;

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

        // Initialize Button Icon Path
        this._buttonIconPath = "/images/icon-plus.svg";
        this._buttonIconAlt = "Plus Icon";

        // Initialize the HTML Elements' Content
        this._init();
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
    }

    // Initialize The According Button Icon
    private _initAccordionButtonIcon()
    {
        // Initialize The Icon Content
        this._accordionButtonIconElement.src = this._buttonIconPath;
        this._accordionButtonIconElement.alt = this._buttonIconAlt;
    }

    // Initialize The According Button
    private _initAccordionButton()
    {
        // Insert The Button Icon Into The Button
        this._accordionButtonElement.appendChild(this._accordionButtonIconElement);
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

    // Render The Accordion
    public render(): HTMLElement
    {
        return this._accordionElement;
    }
}