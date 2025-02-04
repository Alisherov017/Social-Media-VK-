# VK Clone

![Main Page](./public/assets/main.png)

A feature-rich clone of the popular VK social network built using modern web technologies. This project demonstrates my expertise in frontend development, state management, and API integration while replicating core VK functionalities.

## Screenshots

### Login Page

![Login Page](./public/assets/login.png)

### Register Page

![Register Page](./public/assets/register.png)

### Profile

![Profile](./public/assets/editProfile.png)

### Post

![Post](./public/assets/post.png)

### Friends

![Friends](./public/assets/friends.png)

## Features

### State Management

- Efficient and scalable state management with Redux Toolkit.
- Centralized state logic for seamless data flow across components.

### TypeScript Integration

- Ensures type safety and improved code maintainability.
- Reduces runtime errors and enhances development efficiency.

### API Integration

- Axios for handling HTTP requests and data fetching.
- Uses JSON Server (db.json) for mock backend and local data storage.

## Technologies Used

- React
- Redux Toolkit
- TypeScript
- Axios
- Module CSS
- JSON Server (db.json)

## How to Run the Project

1. **Clone the Repository:**

   ```sh
   git clone git@github.com:Alisherov017/Social-Media-VK-.git
   ```

2. **Navigate to the Project Directory:**

   ```sh
   cd Social-Media-VK-
   ```

3. **Install Dependencies:**

   ```sh
   npm install
   ```

4. **Start the JSON Server:**

   ```sh
   npm run server
   ```

5. **Run the Development Server:**
   ```sh
   npm start
   ```

The application and the mock backend will both be available at [http://localhost:3000/](http://localhost:3000/).

### API Endpoint

Since the server runs on port **3000**, ensure API requests are correctly configured:

```js
export const API = "http://localhost:3000/users";
```

## Challenges Faced

- Ensuring type safety with TypeScript while working on dynamic components.
- Managing complex state logic efficiently with Redux Toolkit.
- Implementing responsive design across various screen sizes.
- Simulating backend behavior using JSON Server.

## Future Improvements

- Full backend integration for real-time data updates (e.g., Firebase, Node.js).
- Enhancing user experience with animations and transitions.
- Implementing advanced features such as messaging, notifications, and media uploads.
- Adding dark mode and accessibility improvements.

## Contact

Feel free to reach out if you have any questions or feedback:

- **Email:** r.alisherovdev@gmail.com
- **GitHub:** [Alisherov017](https://github.com/Alisherov017)

---

_This project is for educational and portfolio purposes and is not affiliated with VK._
