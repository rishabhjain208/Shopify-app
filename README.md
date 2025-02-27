# Shopify Feedback Form

This is a **Shopify Feedback Form** built using **React.js, Polaris UI, Framer Motion**, and **React Router**. The form allows users to provide feedback on their experience with a **rating (1-5)** and optional comments.

## 🚀 Features
- **Shopify Polaris UI** for a sleek and consistent design
- **Framer Motion** animations for a modern and smooth UI
- **Error Handling** to ensure valid input
- **Toast Notifications** for successful submissions
- **Responsive Design** for all screen sizes

## 📂 Folder Structure
```
causalfunnel-shopify-app/
│── backend/                 # Express.js backend
│   ├── config/              # Database and environment config
│   ├── controllers/         # API logic
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── middlewares/         # Authentication & error handling
│   ├── server.js            # Express server entry
│   ├── package.json         # Backend dependencies
│   ├── .env                 # Environment variables
│── frontend/                # Next.js frontend
│   ├── components/          # UI components
│   ├── pages/               # Next.js pages
│   ├── styles/              # Tailwind CSS configuration
│   ├── utils/               # Helper functions
│   ├── package.json         # Frontend dependencies
│   ├── tailwind.config.js   # Tailwind CSS configuration
│── shopify/                 # Shopify-specific integrations
│   ├── auth/                # OAuth authentication
│   ├── scripts/             # ScriptTag API setup
│   ├── shopify.config.js    # Shopify App setup
│── README.md                # Project documentation
│── .gitignore               # Ignored files
│── package.json             # Root dependencies (if monorepo)
│── docker-compose.yml       # Optional: Docker setup
│── .env                     # Environment variab
```

## 🛠️ Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/shopify-feedback-app.git
   cd shopify-feedback-app
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Development Server**
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:3000`

## ⚙️ API Configuration
Modify `src/api/index.js` to connect with your backend:
```js
export const submitSurvey = async (userId, answers) => {
  return await fetch(`/api/submit-survey/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answers),
  });
};
```

## 🖥️ Usage
- Enter a rating between **1 to 5**
- Provide **additional feedback** (optional)
- Click **Submit Feedback**
- After submission, a **toast notification** confirms success

## 📸 Screenshots
| Form UI  | Dashboard 
|----------|--------------|
| ![Form Screenshot](src/assets/form.png) | ![Toast Screenshot](src/assets/dashboard.png) |

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is **MIT Licensed**.

## 📧 Contact
For any issues or suggestions, reach out at **rishabhjain223344@gmail.com**

