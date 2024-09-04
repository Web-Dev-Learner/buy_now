# JoyfulMart

JoyfulMart is a modern e-commerce web application built using React, designed to provide a seamless shopping experience. It features product listings, detailed product views, and a cart system, all while ensuring a responsive and user-friendly interface.

## Tools & Technologies

- **React**: A JavaScript library for building user interfaces with components.
- **React Router**: Handles routing and navigation within the application.
- **PropTypes**: Type-checks props in React components for data validation.
- **CSS Modules**: Scoped CSS to prevent global style conflicts and enhance modularity.
- **Fetch API**: Makes HTTP requests to interact with the API and fetch data.
- **Toastify**: Provides user-friendly notifications and alerts.
- **Context API**: Manages global state, such as cart data, across the application.
- **Font Awesome**: Supplies vector icons for enhanced UI elements.
- **Google Fonts**: Utilizes custom fonts for styling the application.
- **MUI**: Implements Material-UI components for user interface elements, including pop-up dialogs.

## Stack

- **Frontend**: React, CSS Modules, React Router, MUI
- **API**: FakeStore API (for product data)
- **UI Libraries**: Toastify, Font Awesome, MUI
- **Styling**: Google Fonts

## API

- **FakeStore API**: Provides product data including images, titles, categories, descriptions, ratings, and prices. Used to populate product listings and detail views.

## Features

- **Product Listings**: View a list of products with images, ratings, titles, categories, and prices. Click to view more details.
- **Product Detail Page**: Displays comprehensive information about a selected product, including image, title, description, rating, and price. Includes functionality to add the product to the cart and adjust the quantity.
- **Cart Functionality**: Add products to the cart, adjust item quantities, and view the total number of items.
- **Star Rating Component**: Visual representation of product ratings with star icons.
- **Error Handling**: Displays error messages and illustrations for data fetching issues or missing products.
- **Loading Indicators**: Shows a loading spinner during data fetching to enhance user experience.
- **Responsive Design**: Adapts the layout to different screen sizes using CSS media queries for a seamless experience on all devices.
- **Order Confirmation Pop-up**: Utilizes MUI for a pop-up dialog to confirm the placement of an order when the "Process Order" button is clicked.

## Functions

- **Product Preview**: Component that provides an overview of each product and navigates to the product detail page upon selection.
- **Single Product**: Fetches and displays detailed product information, handles adding products to the cart, and manages quantity adjustments.
- **Cart Management**: Functions to add, remove, and modify item quantities in the cart.
- **ErrorFetchingProducts**: Displays error messages if there are issues fetching product data from the API.
- **Notification**: Shows notifications for actions like adding a product to the cart using React-Toastify.
- **Order Confirmation**: Uses MUI pop-ups to confirm order placement and show relevant messages.
