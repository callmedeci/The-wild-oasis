# Wild Oasis Hotel Dashboard

![Wild Oasis Dashboard](https://my-wild-oasis-dashboard.netlify.app)  
**Live Demo:** [https://my-wild-oasis-dashboard.netlify.app](https://my-wild-oasis-dashboard.netlify.app/)

Welcome to the **Wild Oasis Hotel Dashboard**, a modern and feature-rich React web application designed for managing hotel operations. This dashboard allows employees of the Wild Oasis Hotel to manage bookings, cabins, and hotel settings efficiently. It includes advanced features like dark/light mode, user authentication, and interactive charts for data visualization.

---

## Features

### **Dashboard**
- **Interactive Charts**: Visualize hotel performance with two dynamic charts built using the Recharts library.
- **Key Metrics**: View important information like bookings, check-ins, sales, and occupancy rates.
- **Today’s Activity**: A dedicated section to track today's activities and updates.

### **Authentication**
- **Employee Login**: Secure login for hotel employees.
- **Profile Management**: Update your full name, password, and upload a profile avatar.
- **Account Creation**: Logged-in users can create new employee accounts. New employees must confirm their email address to activate their account.

### **Bookings Management**
- **Bookings Table**: View all bookings in a beautifully designed table with details like Cabin, Guest, Dates, Status, and Amount.
- **Sort/Filter**: Easily sort and filter bookings for better management.
- **Update Bookings**: Modify booking details, set status to "Check-In" or "Check-Out," and delete bookings.
- **Add Breakfast**: Option to add breakfast for bookings that are not checked in yet.

### **Cabins Management**
- **Cabins Table**: View, edit, delete, and create new cabins.
- **Sort/Filter**: Sort and filter cabins for better organization.
- **Duplicate Cabins**: Quickly duplicate existing cabins.
- **Image Upload**: Upload images for cabins to enhance visual appeal.

### **Hotel Settings**
- **Customizable Settings**: Update hotel settings like:
  - Minimum nights per booking
  - Maximum nights per booking
  - Maximum guests per booking
  - Breakfast price

### **Dark/Light Mode**
- Toggle between dark and light modes for a personalized user experience.

### **Logout**
- Securely log out of your account.

---

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing within the application.
- **Context API**: For state management and compound components.
- **Styled Components**: For styling the application with CSS-in-JS.
- **Recharts**: For building interactive charts.
- **React Hook Form**: For handling form inputs and validation.
- **React Hot Toast**: For displaying toast notifications.
- **React Icons**: For using icons in the application.

### Backend & Database
- **Supabase**: For database management and user authentication.
- **React Query**: For managing asynchronous actions, caching data, and interacting with Supabase.

### Development Tools
- **Vite**: For fast and optimized local development.
- **ESLint**: For code linting and maintaining code quality.
- **React Query Devtools**: For debugging React Query.

### Dependencies
```json
"dependencies": {
  "@supabase/supabase-js": "^2.21.0",
  "@tanstack/react-query": "^4.29.5",
  "@tanstack/react-query-devtools": "^4.29.6",
  "date-fns": "^2.30.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-error-boundary": "^5.0.0",
  "react-hook-form": "^7.43.9",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^4.8.0",
  "react-router-dom": "^6.11.1",
  "recharts": "^2.15.0",
  "styled-components": "^5.3.10"
},
"devDependencies": {
  "@types/react": "^18.0.28",
  "@types/react-dom": "^18.0.11",
  "@vitejs/plugin-react": "^3.1.0",
  "eslint": "^8.39.0",
  "eslint-config-react-app": "^7.0.1",
  "vite": "^4.2.0",
  "vite-plugin-eslint": "^1.8.1"
}
```

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wild-oasis-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd wild-oasis-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Supabase URL and API key:
     ```env
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

---

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/callmedeci`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/callmedeci`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- [Supabase](https://supabase.com) for providing an excellent backend-as-a-service.
- [Recharts](https://recharts.org/) for the amazing charting library.
- [React Query](https://tanstack.com/query) for simplifying data fetching and caching.
