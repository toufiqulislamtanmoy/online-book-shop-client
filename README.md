# E-Shopy Project Documentation

## Table of Contents

1. [Introduction](#introduction)
    - [Project Overview](#project-overview)
    - [Project Scope](#project-scope)


2. [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)

3. [User Interfaces](#user-interfaces)
    - [Home Page](#home-page)
    - [Book Details Page](#book-details-page)
    - [Search Filters](#search-filters)
    - [User Dashboard](#user-dashboard)
    - [Admin Dashboard](#admin-dashboard)
    - [Payment Processing](#payment-processing)

4. [Features and Functionality](#features-and-functionality)
    - [Book Borrowing](#book-borrowing)
    - [Searching](#searching)
    - [Cart Management](#cart-management)
    - [Payment Processing](#payment-processing)
    - [User Stories or Use Cases](#user-stories-or-use-cases)

## Introduction

### Project Overview
- Welcome to the documentation for the E-Shopy project, an innovative online platform that brings the world of books, magazines, and newspapers right to your fingertips. This project is designed to offer a seamless experience for users who wish to explore, borrow, and purchase various reading materials, ranging from novels and educational books to exciting comics, mysteries, and thrillers.

### Project Scope
The E-Shopy project aims to create a user-friendly and feature-rich online bookstore where readers can:

- Browse an extensive collection of books, including various genres and formats.
- Borrow physical copies of books from our library.
- Purchase digital copies of books, magazines, and newspapers.
- Explore an intuitive user interface for searching and filtering their desired reading material.
- Access personalized dashboards for managing their borrowing history and purchases.
- Seamlessly complete transactions through secure payment processing.

## Technologies Used

### Frontend
The front end of the E-Shopy project is built using a variety of technologies, frameworks, and libraries to deliver a dynamic and responsive user interface. Below is a list of the key technologies used on the frontend:

- **React**: We have chosen React as the core frontend framework for its component-based architecture, virtual DOM, and excellent community support.

- **React Router**: React Router is used for client-side routing, enabling seamless navigation between different application parts.

- **Axios**: Axios is utilized for making HTTP requests to our backend server and external APIs, facilitating data retrieval and management.

- **Swiper JS**: Swiper JS is employed for creating a smooth and interactive user experience, particularly in the hero section showcasing recently added books.

- **AOS (Animate on Scroll)**: AOS is used for adding elegant and engaging animations to various elements on the website, enhancing visual appeal.

- **Stripe**: Stripe is integrated for secure and seamless payment processing, allowing users to confidently make purchases.

- **Firebase**: Firebase provides user authentication and hosting services, ensuring secure access to the platform and efficient deployment.
### Backend
The backend of the E-Shopy project is responsible for managing data, handling user requests, and ensuring the overall functionality of the platform. Here are the backend technologies and frameworks used:
Node.js: Node.js serves as the foundation of our backend, enabling server-side JavaScript execution for high performance and scalability.

- **Express.js**: Express.js is utilized as the backend framework to create robust RESTful APIs and manage routes, middleware, and HTTP requests.

- **MongoDB**: MongoDB is our database of choice for its flexibility and scalability. It stores book data, user information, and transaction history.

- **JWT (JSON Web Tokens)**: JWT is used for user authentication and authorization, providing a secure way to verify the identity of users and control access to specific routes and resources.

- **Stripe (Node.js SDK)**: The Stripe Node.js SDK is integrated on the backend to securely handle payment processing and interact with the Stripe payment gateway.

- **Firebase Authentication**: Firebase Authentication is utilized to manage user authentication, enhancing the security and user experience of the platform.
## User Interfaces

### Home Page

The home page of the E-Shopy platform serves as the gateway to an engaging and user-friendly reading experience. This section provides an overview of the home page's design and functionality.

#### Description

The home page is designed to offer a visually appealing and intuitive introduction to the E-Shopy platform. It comprises several key components:

1. **Banner with Lottie Animation**: At the top of the page, a banner featuring an eye-catching Lottie animation welcomes users to the platform. This animation adds a dynamic and engaging element to the user interface.

2. **Recently Added Books (Swiper.js)**: Below the banner, users are presented with a section showcasing recently added books. This section utilizes Swiper.js to create a flickering card effect, making it visually appealing. Each card represents a book and provides essential details such as the book's title, cover image, and author.

3. **Clickable Book Cards**: Users can click on any of the recently added book cards to access more details about the book. Clicking on a card will redirect the user to the book's details page, where they can find comprehensive information about the book. If the user is not logged in, they will be redirected to the login page to ensure that access to book details is controlled.

4. **Contact Form**: A dedicated contact form is included on the home page, allowing users to easily get in touch with any inquiries or feedback. This form enhances user engagement and provides a means for users to communicate with the platform's administrators.

5. **Services Section**: The home page also features a services section, which provides users with information about the services offered by E-Shopy. This section serves to inform users about the platform's capabilities and offerings.

#### Screenshot

![E-Shopy Home Page](path_to_screenshot_image.png)

### Book Details Page

The Book Details Page in the E-Shopy platform provides users with in-depth information about a selected book. This section describes the layout and functionality of the Book Details Page.

#### Description

The Book Details Page offers users a comprehensive view of a particular book, including its title, author, cover image, description, and various other details. The page is designed to provide a rich and informative experience for users interested in learning more about a specific book.

Key features of the Book Details Page include:

- **Book Information**: Users can access essential book information, such as the book's title, author, genre, publication date, and a brief description of its content.

- **Cover Image**: A high-resolution cover image of the book is prominently displayed, allowing users to visualize the book's appearance.

- **Preview Pages**: Depending on the book's availability and permissions, users may have the option to preview a limited number of pages to get a sense of the book's content before making a borrowing or purchasing decision.

- **Borrow or Purchase**: Users can take action based on their preferences. If the book is available for borrowing, they can initiate a borrow request. If it's available for purchase, they can add it to their cart for checkout.

#### Screenshot

![E-Shopy Book Details Page](path_to_screenshot_image.png)

### User Dashboard

The User Dashboard in the E-Shopy platform serves as a personalized space for registered users to manage their activities and interactions with the platform. This section provides an overview of the User Dashboard's design and functionality.

#### Description

The User Dashboard is designed to offer a seamless and user-centric experience, allowing registered users to perform various actions and access essential features. Key components and functionality of the User Dashboard include:

- **Borrowed Books**: Users can view a list of books they have borrowed, along with details such as the due date for return and the book's status (e.g., pending, returned).

- **Cart Management**: Users can access their shopping cart, review the items they intend to purchase, and proceed to checkout. They also have the option to remove items from their cart.

- **Payment History**: Users can view a history of their past payments, including transaction details, dates, and payment status.

- **Access to Soft Copies**: Users may find a section within the dashboard that grants them access to soft copies of the books they've purchased.

#### Screenshot

![E-Shopy User Dashboard](path_to_user_dashboard_screenshot.png)

### Admin Dashboard

The Admin Dashboard in the E-Shopy platform serves as the control center for administrators, enabling them to manage the platform's content, users, and activities effectively. This section provides an overview of the Admin Dashboard's design and functionality.

#### Description

The Admin Dashboard is designed with administrators' needs in mind, offering a robust set of tools and features to streamline platform management. Key components and functionality of the Admin Dashboard include:

- **Book Management**: Administrators can add new books to the platform, edit existing book details, and remove books as needed. This includes specifying book titles, authors, descriptions, cover images, availability status, and pricing information.

- **Borrow Request Management**: The dashboard allows administrators to review and manage borrow requests submitted by users. Administrators can accept or reject requests, affecting book availability.

#### Screenshot

![E-Shopy Admin Dashboard](path_to_admin_dashboard_screenshot.png)

## Features and Functionality

### Book Borrowing

Book borrowing is a core feature of the E-Shopy platform, allowing users to borrow physical copies of books from our library. This section provides an overview of how the book borrowing process works.

#### How book borrowing works:

1. **Browsing Books**: Users start by browsing the platform's collection of books to find a title they wish to borrow.

2. **Book Details Page**: When a user clicks on a book they are interested in, they are directed to the Book Details Page, where they can find detailed information about the book.

3. **Check Availability**: Users can check the availability of the book on the Book Details Page. If the book is available for borrowing, they will see an option to request a borrow.

4. **Borrow Request**: Clicking the "Borrow" button initiates a borrow request. This request is sent to the platform's administrators for approval.

5. **Admin Review**: Platform administrators review the borrow request. If the request is approved, the book's availability status is updated, and the user is notified.

6. **Borrowed Books**: Users can view the books they have borrowed in their User Dashboard, along with due dates for return. They are responsible for returning borrowed books by the specified date.

7. **Return or Extension**: Users can return borrowed books through their User Dashboard or request an extension if they need more time. Admins review extension requests and make decisions accordingly.

### Cart Management

Cart management is a crucial aspect of the E-Shopy platform, allowing users to collect and manage items they wish to purchase. Here's an explanation of how cart management works:

1. **Adding Items**: Users can add books, magazines, or newspapers to their shopping cart by clicking the "Add to Cart" button on the respective book details page.

2. **Reviewing Cart**: Users can view the contents of their cart at any time by clicking on the cart icon in the header.

3. **Modifying Cart**: In the cart, users can adjust the quantity of items, remove items they no longer want to purchase, or proceed to checkout.

4. **Checkout**: When ready to complete their purchase, users can proceed to the checkout page, where they enter payment and shipping information.

### Payment Processing

Payment processing is a critical part of the E-Shopy platform, ensuring secure and efficient transactions. Here are the details about how payment processing works:

1. **Checkout**: When users are ready to make a purchase, they proceed to the checkout page, where they review their order and enter payment details.

2. **Stripe Integration**: E-Shopy uses the Stripe payment gateway for payment processing, ensuring a secure and streamlined payment experience.

3. **Payment Confirmation**: After entering payment information, users confirm their purchase. Stripe processes the payment securely, and users receive a payment confirmation.

4. **Payment History**: Details of the transaction, including the date, items purchased, and payment status, are recorded in the user's "Payment History" within their User Dashboard.

### [Live Site Link: https://online-book-shop-9a9ec.web.app](https://online-book-shop-9a9ec.web.app)
