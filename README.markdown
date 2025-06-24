# PayMay Uzhgorod National University students project (Pet project)

A sleek and modern banking app prototype developed as a **student and pet project** by Maksym Hanych to showcase web development skills. PayMay allows users to transfer money instantly using just an email address, inspired by the simplicity of PayPal. Built with **React** and **Firebase**, this project demonstrates a clean, user-friendly interface and secure backend integration. Perfect for inclusion in a CV to highlight technical expertise and creativity.

🌐 **Deployed at**: [https://paymay-fe82d.web.app](https://paymay-fe82d.web.app)

---
ONLY IN UKRAINE LANGUAGE!
---
## 🎯 Features

- **Email-Based Transfers**: Send money to anyone using their email address, making transactions quick and intuitive.
- **Real-Time Processing**: Powered by Firebase for instant updates and secure data handling.
- **Responsive Design**: Built with React and Tailwind CSS for a smooth experience across devices.
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Transaction History**: View past transfers with timestamps and recipient details.

---

## 🖼️ Mockups

Explore the design mockups for a glimpse of PayMay's user interface:

- **Homepage**: [View on Canva](https://www.canva.com/design/DAGVYMyJBAM/Fw2uDqAmMNjbuBRxtc3sCQ/edit?utm_content=DAGVYMyJBAM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- **About Us**: [View on Canva](https://www.canva.com/design/DAGVYIo-NFk/xUrIQYq9YTwWxF_oxKiXow/edit?utm_content=DAGVYIo-NFk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- **Rules**: [View on Canva](https://www.canva.com/design/DAGVYANmbFk/TTVCk-OQkp_UHkNQxvDr7w/edit?utm_content=DAGVYANmbFk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication)
- **Language**: JavaScript
- **Build Tool**: Create React App
- **Deployment**: Firebase Hosting

---

## 🚀 Getting Started

Follow these steps to set up and run PayMay locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or Yarn
- Firebase account and project setup

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/paymay.git
   cd paymay
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore and Authentication (e.g., email/password provider).
   - Add your Firebase configuration to `src/firebase/config.js`:
     ```javascript
     export const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
     };
     ```
   - Configure Firestore rules to allow read/write for authenticated users:
     ```firestore
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /{document=**} {
           allow read, write: if request.auth != null;
         }
       }
     }
     ```

4. **Run the development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized build will be generated in the `build` folder, ready for deployment.

6. **Deploy to Firebase** (optional):
   - Install Firebase CLI: `npm install -g firebase-tools`
   - Login: `firebase login`
   - Initialize hosting: `firebase init hosting`
   - Deploy: `firebase deploy`

---

## 🧪 Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

- **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads on code changes, and lint errors appear in the console.
- **`npm test`**: Launches the test runner in interactive watch mode. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for details.
- **`npm run build`**: Builds the app for production to the `build` folder, optimized and minified for performance. See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more.
- **`npm run eject`**: Ejects from Create React App for full control over configuration (irreversible).

---

## 📄 License

Copyright (c) 2025 Maksym Hanych

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 🙌 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app) for a robust React setup.
- [Firebase](https://firebase.google.com/) for seamless backend and hosting.
- [Tailwind CSS](https://tailwindcss.com/) for rapid and beautiful styling.
- Thanks to UzhNU for inspiring this student project! 🙌

---

🌟 **PayMay** - Transfer money with ease, connect with simplicity.
