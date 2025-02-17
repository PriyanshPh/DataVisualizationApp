# Data Visualization App

This Angular project demonstrates the integration of various data visualization techniques and a map component to display quantitative and geographical data.

## Design Choices

- **Component-Based Architecture**: The project is structured with reusable components for charts and maps.
- **Responsive Design**: CSS is used to ensure the application is responsive and works well on different screen sizes.
- **User-Friendly Interface**: The layout is designed to be clean and intuitive, making it easy for users to understand the displayed data.

## Technologies Used

- **Angular**: For building the web application.
- **Leaflet**: For integrating the map component.
- **ng2-charts**: For creating interactive charts (Bar, Line, and Pie charts).
- **Bootstrap**: For responsive design and styling.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally using `npm install -g @angular/cli`.

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/YourUsername/data-visualization-app.git
    cd data-visualization-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Project Structure

- `src/app/components/interactive-chart`: Contains the interactive chart components.
- `src/app/components/geo-map`: Contains the map component.
- `src/assets`: Contains static assets like images.

## Additional Notes

- Ensure you have an active internet connection to load external libraries like Leaflet and OpenStreetMap tiles.
- You can customize the dummy data in the `qualitative-research.component.ts` to fit your specific use case.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
