
# 📚 Library Management System API

The Library Management System API is a backend service developed to streamline and manage library operations, enabling library staff and members to handle books, memberships, and borrowing activities efficiently. This API provides a structured set of endpoints for CRUD operations on books, members, and borrow records, with specialized functionality to support borrowing and returning books. Unique identifiers are managed using UUIDs for secure and reliable identification across the system.

## 🔧 Key Technologies

- **🔑 UUIDs**: Ensures unique identification across all tables for data integrity.
- **🔗 RESTful API Structure**: Follows REST conventions for consistency and easy integration.
- **🛠️ Prisma ORM**: Used for database interaction, providing an intuitive and type-safe way to interact with PostgreSQL.
- **🗄️ PostgreSQL**: A relational database used for efficient data management of books, members, and borrow records.

## ⚙️ Setup Instructions

Follow these steps to install and run the application:

1. **📥 Download the Code**:
   - You can either download the ZIP file from the repository and extract it, or use the following command to clone the repository via the CLI:
     ```bash
     git clone <repository-url>
     ```

2. **📂 Navigate to the Project Directory**:
   ```bash
   cd <project-directory>

   ```

3. **📦 Inastall packages**:
   ```bash
   npm install
    ```
3. **▶️ Locally run the project**:
   ```bash
   npm run dev
    ```

## 🌟 Key Features & Functionality
 
- **📚 Book Management**:
  - Add, view, update, and delete books in the library catalog, with information such as bookId, title, genre, publishedYear, totalCopies,  and availableCopies.

- **👥 Member Management**:
 - Add, view, update, and delete books in the library catalog, with information such as memberId, name, email, phone, and membershipDate.

- **🔄 Borrowing System**:
  - Borrow and return books.
  - Automatically update book or returning.
  - Track due dates for borrowed books, and identify overdue returns.

- **⏰ Overdue Tracking**:
  - Track borrowed books that have not been returned within 14 days.

- **💾 Database Integration with Prisma and PostgreSQL**:
  - Utilize Prisma ORM for efficient, type-safe database interaction with a PostgreSQL database backend.
  - Ensure reliable data management of books, members, and borrow records, with UUIDs for unique identification.

- **🌐 RESTful API Structure**:
  - Follows RESTful principles for clear and consistent endpoints, making the API easy to integrate and extend.

These features provide a complete solution for managing library operations, supporting library staff in tracking books, members, and borrowing activities efficiently.





