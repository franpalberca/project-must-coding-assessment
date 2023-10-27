# GitHub User Search App

A simple web application built with Vite, React, and TypeScript to search for GitHub users and view their repositories.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Responsive Design](#responsive-design)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Testing](#testing)
- [Storybook](#storybook)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can check out a live demo of this GitHub User Search App [here](#).

## Features

- Search for GitHub users by their username.
- View user information including avatar, name, and GitHub profile link.
- See the list of the user's repositories with names and links.
- Filter repositories by name or URL.
- Loading spinner during data fetching.
- Error handling for non-existent users.

## Responsive Design

This GitHub User Search App is designed to be responsive, ensuring an optimal user experience across different devices and screen sizes. Whether you're using a desktop, tablet, or mobile device, the app adapts to provide a seamless browsing experience.

### Desktop View

![Desktop Landing Page View](/public/img/landing_laptop.png) 
![Desktop Repositories Page View](/public/img/main_laptop.png)

The desktop view offers a spacious layout with easy navigation and clear user interface elements.

### Tablet View

![Tablet Landing Page View](/public/img/Landing_Ipad.png) 
![Tablet Repositories Page View](/public/img/main_tablet.png)

The tablet view maintains the app's usability while optimizing the content for smaller screens.

### Mobile View

![Mobile Landing Page View](/public/img/Landing_phone.png) 
![Mobile Repositories Page View](/public/img/main_phone.png)

On mobile devices, the app's design adjusts to fit the smaller screen while retaining its core functionality.

The responsive design ensures that users can access and interact with the app comfortably, regardless of the device they are using.


## Getting Started

Follow these steps to get the project up and running on your local machine.

1. **Clone the repository**:
    ```bash
       git clone https://github.com/franpalberca/project-mvst-coding-assessment

Install dependencies:

Navigate to the project directory and install the necessary dependencies.

    cd project-mvst-coding-assessment
    npm install

2. **Set up Environment Variable**:

Create a .env file at the root of your project and add your GitHub personal access token:

    VITE_GITHUB_TOKEN=YOUR_GITHUB_TOKEN

Replace YOUR_GITHUB_TOKEN with your GitHub personal access token.

3. **Start the development server**:
    ```bash
    npm run dev

4. **Open your browser**:

Open your web browser and visit http://localhost:5173 to see the app.

## Usage
Enter a GitHub username in the search bar and press "Submit" to fetch and display user data.
The user's avatar, name, and GitHub profile link will be shown.
Repositories associated with the user will be displayed with names and links.
Use the filter input to filter repositories by name or URL.
If the user doesn't exist or there's an issue with fetching data, an error message will be shown.

## Folder Structure
The project's folder structure is organized as follows:
src/: Contains the application's source code, organized into components and styles.
package.json: Contains all the dependencies and dev dependencies.
stories/: Contains Storybook stories for components.
.env: Environment variable file to store your GitHub personal access token.

## Testing
The GitHub User Search App is equipped with unit tests to ensure code quality and functionality. Run the following command to execute the tests:
npm run test

## Storybook
Storybook is integrated to visualize and interact with components in isolation. Run the following command to start Storybook:
npm run storybook

## Contributing
Contributions are welcome! Feel free to open issues or pull requests.

## License
This project is free of license and it's use is purely academical.

