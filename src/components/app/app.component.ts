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

        // Set the flag to true after rendering
        this.isRendered = true;
    }

}