// Imports
import "./faq.styles.css";

/** FAQ Component **/
export default class FAQComponent
{
    // HTML Elements
    private _faqElement: HTMLDivElement;
    private _headerElement: HTMLElement;
    private _headingElement: HTMLHeadingElement;
    private _starIconElement: HTMLImageElement;

    public constructor()
    {
        this._faqElement = document.createElement('div');
        this._headerElement = document.createElement('header');
        this._headingElement = document.createElement('h1');
        this._starIconElement = document.createElement('img');

        this._init();
    }

    private _init(): void
    {
        this._initStarIcon();
        this._initHeading();
        this._initHeader();
        this._initFAQ();
    }

    // Initialize the FAQ component
    private _initFAQ(): void
    {
        this._faqElement.id = 'faq';
        this._faqElement.appendChild(this._headerElement);
    }

    // Initialize the header
    private _initHeader(): void
    {
        this._headerElement.append(
            this._starIconElement,
            this._headingElement,
        );
    }

    private _initHeading(): void
    {
        this._headingElement.textContent = 'FAQs';
    }

    private _initStarIcon(): void
    {
        this._starIconElement.src = '/images/icon-star.svg';
        this._starIconElement.alt = 'Star Icon';
    }

    public render(): HTMLElement
    {
        return this._faqElement;
    }
}