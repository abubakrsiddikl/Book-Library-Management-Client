# 📚  Library Management System

A **Library Management System** built with **React**, **TypeScript**, **Redux Toolkit Query (RTK Query)**, **Node.js**, **Express**, and **MongoDB**. This system allows users to manage books, borrow them, and view borrow summaries—all without authentication.

---

## 🚀 Project Overview

This project demonstrates a fully functional client-server library system with:

- CRUD operations for books
- Borrowing functionality with quantity tracking
- Borrow summary with aggregation
- Clean, minimalist UI
- Type-safe forms
- Optimistic UI updates and toast notifications

The main goal is to showcase proper **state management**, **API integration**, and **responsive frontend design**.

---

## 📌 Features

### 1. Public Routes
- Accessible without login/authentication
- Focused on core library operations

### 2. Book Management 🛠️
**Book List Table**
- Columns: Title, Author, Genre, ISBN, Copies, Availability, Actions
- Action Buttons:
  - **Edit Book:** Update book details via form
  - **Delete Book:** Confirm before deletion
  - **Borrow Book:** Opens a borrow form

**Add New Book**
- Fields: Title, Author, Genre, ISBN, Description, Copies, Available (default true)
- Redirects to book list after creation

### 3. Borrow Book
- Fields: Quantity, Due Date
- Validates quantity against available copies
- Updates book availability automatically
- Redirects to borrow summary after submission

### 4. Borrow Summary
- Shows aggregated total quantity borrowed per book
- Columns: Book Title, ISBN, Total Quantity Borrowed
- Data fetched via aggregation API

---

## 🖥️ Landing Page Components

- **Navbar:** Links to All Books, Add Book, Borrow Summary
- **Book Table/List/Grid:** Displays books with all core actions
- **Footer:** Standard site info or credits

---

## 📄 Page List

| Route                  | Description                                         |
|------------------------|-----------------------------------------------------|
| `/books`               | List all books with actions                         |
| `/create-book`         | Form to add a new book                               |
| `/books/:id`           | Detailed view of a single book                     |
| `/edit-book/:id`       | Update an existing book                             |
| `/borrow/:bookId`      | Borrow a selected book                              |
| `/borrow-summary`      | Aggregated summary of all borrowed books           |

---

## 🎨 UI/UX

- Minimalist and clean design using **Tailwind CSS**
- Fully responsive for mobile, tablet, and desktop
- Easy navigation and clearly labeled buttons
- Toast notifications for success/error feedback
- Optimistic UI updates for instant feedback

---

## 💻 Technology Stack

| Layer       | Technology                     |
|------------ |--------------------------------|
| Frontend    | React + TypeScript              |
| State Mgmt  | Redux Toolkit + RTK Query       |
| Backend     | Node.js + Express.js            |
| Database    | MongoDB + Mongoose              |
| Styling     | Tailwind CSS                    |

---

## ⚡ Additional Features (Optional / Bonus)

| Feature               | Points |
|-----------------------|--------|
| Optimistic UI Updates  | +2     |
| Toast Notifications    | +2     |
| Responsive Layout      | +4     |
| Type-Safe Forms        | +2     |

---

## 🔗 References (UI Inspiration)

> ⚠️ Do **not** copy directly. Use for layout and idea inspiration only.

- [Book Lovers Template](https://booklovers.ancorathemes.com/)
- [PrintPress Theme Preview](https://preview.themeforest.net/item/printpress-book-publishing-wordpress-theme/full_screen_preview/24014694)

---

## 📂 Backend (Modular/MVC Pattern)

- **Books Collection:** title, author, genre, isbn, description, copies, available
- **Borrows Collection:** book reference, quantity, dueDate
- Implements CRUD for both books and borrows
- Borrow API ensures quantity validation and updates book availability
- Pagination for book listings and borrow retrieval supported
- Consistent and user-friendly error handling

---

## ⚙️ Frontend + API Integration

- **RTK Query** for typed API calls
- Organized endpoints per module (book, borrow)
- Optimistic UI and toast notifications implemented
- Type-safe forms using **React Hook Form** + **Zod**
- Responsive layout using Tailwind CSS

---

## 📝 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/minimal-library-system.git
cd minimal-library-system
Install dependencies:

bash
Copy code
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
Create a .env file in backend:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the backend:

bash
Copy code
npm run dev
Run the frontend:

bash
Copy code
cd client
npm run dev
Open http://localhost:3000 to view the app.

🎯 Summary
This project demonstrates a clean, functional library management system with:

Full CRUD functionality for books

Borrowing with quantity validation

Aggregated borrow summaries

Type-safe frontend forms

RTK Query integration

Minimal, responsive design

It is ideal for showcasing your React + TypeScript + Redux skills in your resume or portfolio.

🧑‍💻 Author
Abu Bakr Siddik
Email: abubakrsiddik.dev@gmail.com