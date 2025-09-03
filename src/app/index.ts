/** Singleton App Class */
export default class App {

    // Flag to ensure single render
    static isRendered = false;

    // Private constructor to prevent instantiation
    private constructor() { }

    // Render method to initialize the app
    static render() {

        // Prevent multiple renders
        if (this.isRendered) return;

        // Get the app container
        const app = document.getElementById('app');

        // Check if app exists before manipulating
        if (app) {
            // Set some content
            app.textContent = 'FAQ Accordion Application';
        }

        // Set the flag to true after rendering
        this.isRendered = true;
    }

}