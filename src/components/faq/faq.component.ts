// Imports
import "./faq.styles.css";
import AccordionComponent from "../accordion";
import { ACCORDION_DATA } from "./faq.constants";

/** FAQ Component **/
export default class FAQComponent
{
    // HTML Elements
    private _faqElement: HTMLDivElement;
    private _headerElement: HTMLElement;
    private _headingElement: HTMLHeadingElement;
    private _starIconElement: HTMLImageElement;
    private _accordionsElement: HTMLElement;

    // Constructor
    public constructor()
    {
        this._faqElement = document.createElement('div');
        this._headerElement = document.createElement('header');
        this._headingElement = document.createElement('h1');
        this._starIconElement = document.createElement('img');
        this._accordionsElement = document.createElement('main');

        this._init();
    }

    // Initialize The FAQ Elements
    private _init(): void
    {
        this._initAccordions();
        this._initStarIcon();
        this._initHeading();
        this._initHeader();
        this._initFAQ();
    }

    // Initialize the FAQ component
    private _initFAQ(): void
    {
        this._faqElement.id = 'faq';

        this._faqElement.append(
            this._headerElement,
            this._accordionsElement
        );
    }

    // Initialize The Header
    private _initHeader(): void
    {
        this._headerElement.append(
            this._starIconElement,
            this._headingElement,
        );
    }

    // Initialize The Heading
    private _initHeading(): void
    {
        this._headingElement.textContent = 'FAQs';
    }

    // Initialize The Star Icon
    private _initStarIcon(): void
    {
        this._starIconElement.src = 'images/icon-star.svg';
        this._starIconElement.alt = 'Star Icon';
    }

    // Initialize The Accordion Container
    private _initAccordions(): void
    {
        ACCORDION_DATA.forEach
        (
            accordionData => 
            {
                const accordionComponent = new AccordionComponent(accordionData);
                const accordionElement = accordionComponent.render();
                this._accordionsElement.appendChild(accordionElement);
            }
        );
    }

    // Render The FAQ Element
    public render(): HTMLElement
    {
        return this._faqElement;
    }
}