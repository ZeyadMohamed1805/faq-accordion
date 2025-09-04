// Imports
import "./app.styles.css";
import FAQComponent from "../faq";

/** Singleton App Class */
export default class App 
{
    // Flag to ensure single render
    private static isRendered = false;

    // HTML Element
    private static _htmlElement: HTMLElement | null;

    // Private constructor to prevent instantiation
    private constructor() 
    {}

    // Render method to initialize the app
    static render() 
    {
        // Initialize the app element
        App._htmlElement = document.getElementById('app');

        // Check conditions to prevent multiple renders
        const doesAppHtmlElementNotExist = !App._htmlElement;
        const isTheAppComponentRendered = App.isRendered;
        const shouldTheAppComponentNotRender = doesAppHtmlElementNotExist || isTheAppComponentRendered;

        // Prevent rendering if conditions are met
        if (shouldTheAppComponentNotRender)
        {
            return;
        }

        // Initialize the app components
        const faqComponent = new FAQComponent().render();

        // Render the components
        App._htmlElement!.appendChild(faqComponent);

        // Set the flag to true after rendering
        App.isRendered = true;
    }
}