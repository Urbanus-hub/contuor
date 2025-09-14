# Contuor Furniture – Modern Interior Design React App

Welcome to **Contuor Furniture**, a modern, responsive React application for a furniture and interior design studio. This project is built with [Vite](https://vitejs.dev/) for lightning-fast development and leverages a beautiful, consistent UI theme throughout.

## Features

- **Modern, Responsive UI**: Tailwind CSS-powered layouts for all devices.
- **Home, About, Services, Blog, Contact**: Professionally designed pages with unique hero sections.
- **Authentication**: Register and log in with styled forms (Appwrite integration ready).
- **Cart & Shop**: Add, view, and manage products in a stylish cart.
- **Profile & Orders**: User profile dropdown and order history (profile logic ready).
- **Testimonials & Team**: Dynamic testimonials and team showcase.
- **Appwrite Integration**: Easily connect to Appwrite for authentication and data (see `src/utils/appwrite.js`).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your Appwrite credentials.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/components/` – All React components (Header, Footer, Home, About, Services, Blog, Contact, Auth, Cart, etc.)
- `src/utils/` – Appwrite configuration and helpers
- `public/images/` – All images and icons

## Customization

- **Theme colors** are defined in Tailwind config and used throughout.
- **Hero sections** and buttons are easily customizable in each page component.
- **Appwrite**: Update `src/utils/server.js` with your Appwrite project details.

## Credits

- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Appwrite](https://appwrite.io/).
- Design inspired by modern furniture and interior brands.

---

> **Contuor Furniture** – Transforming spaces with comfort, beauty, and style.
