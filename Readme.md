PINspiration

PINspiration is my inaugural backend web application. Drawing inspiration from Pinterest, it enables users to curate and share collections of images, making it an ideal tool for organizing and finding inspiration.

Features
User Authentication: A secure authentication system that allows users to sign up, log in, and log out of their accounts.
Like: Users can like content they find appealing, saving it to their profile for future reference.
Bookmark: Users can bookmark content to easily revisit it later, organizing their saved items into collections.
Feed: Users can explore and engage with content from others through the feed section.
Tech Stack
Frontend: EJS (Embedded JavaScript) templating engine for dynamic content rendering.
CSS Framework: Tailwind CSS for responsive and customizable styling.
Backend: Node.js and Express.js for server-side logic.
Database: MongoDB for storing user data, likes, and bookmarks.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/PINspiration.git
Install dependencies:

bash
Copy code
cd pinspiration
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

env
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/pinspiration
Replace your_session_secret with a randomly generated string for session encryption.

Run the application:

bash
Copy code
npm start
The application should now be accessible at http://localhost:3000.