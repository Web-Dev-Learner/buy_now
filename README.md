# JoyfulMart


JoyfulMart is a modern e-commerce web application built using React, designed to provide a seamless shopping experience. It features product listings, detailed product views, and a cart system, all while ensuring a responsive and user-friendly interface.

## Stack

- **Frontend**: React, CSS Modules, React Router, MUI
- **API**: FakeStore API (for product data)
- **UI Libraries**: Toastify,  MUI
- **Styling**: Google Fonts

## API

- **FakeStore API**: Provides product data including images, titles, categories, descriptions, ratings, and prices. Used to populate product listings and detail views.

## Tools & Technologies
<ul>
  <li><b>React:</b> A JavaScript library for building user interfaces with components.</li>
  <li><b>React Router:</b> Handles routing and navigation within the application.</li>
  <li><b>PropTypes:</b> Type-checks props in React components for data validation.</li>
  <li><b>CSS Modules:</b> Scoped CSS to prevent global style conflicts and enhance modularity.</li>
  <li><b>Fetch API:</b> Makes HTTP requests to interact with the API and fetch data.</li>
  <li><b>Toastify:</b> Provides user-friendly notifications and alerts.</li>
  <li><b>Context API:</b> Manages global state, such as cart data, across the application.</li>
  <li><b>Font Awesome:</b> Supplies vector icons for enhanced UI elements.</li>
  <li><b>Google Fonts:</b> Utilizes custom fonts for styling the application.</li>
  <li><b>MUI:</b> Implements Material-UI components for user interface elements, including pop-up dialogs.</li>
</ul>

## Features
<ul>
  <li><b>Product Listings:</b> View a list of products with images, ratings, titles, categories, and prices. Click to view more details.</li>
  <li><b>Product Detail Page:</b> Displays comprehensive information about a selected product, including image, title, description, rating, and price. Includes functionality to add the product to the cart and adjust the quantity.</li>
  <li><b>Cart Functionality:</b> Add products to the cart, adjust item quantities, and view the total number of items.</li>
  <li><b>Star Rating Component:</b> Visual representation of product ratings with star icons.</li>
  <li><b>Error Handling:</b> Displays error messages and illustrations for data fetching issues or missing products.</li>
  <li><b>Loading Indicators:</b> Shows a loading spinner during data fetching to enhance user experience.</li>
  <li><b>Responsive Design:</b> Adapts the layout to different screen sizes using CSS media queries for a seamless experience on all devices.</li>
  <li><b>Order Confirmation Pop-up:</b> Utilizes MUI for a pop-up dialog to confirm the placement of an order when the "Process Order" button is clicked.</li>
</ul>

## Functions
<ul>
  <li><b>Product Preview:</b> Component that provides an overview of each product and navigates to the product detail page upon selection.</li>
  <li><b>Single Product:</b> Fetches and displays detailed product information, handles adding products to the cart, and manages quantity adjustments.</li>
  <li><b>Cart Management:</b> Functions to add, remove, and modify item quantities in the cart.</li>
  <li><b>ErrorFetchingProducts:</b> Displays error messages if there are issues fetching product data from the API.</li>
  <li><b>Notification:</b> Shows notifications for actions like adding a product to the cart using React-Toastify.</li>
  <li><b>Order Confirmation:</b> Uses MUI pop-ups to confirm order placement and show relevant messages.</li>
  <li><b>Single Page Application (SPA):</b> Fast, seamless navigation without page reloads.</li>
</ul>

