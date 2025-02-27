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
📁 shopify-feedback-app
│── 📂 src
│   ├── 📂 assets         # Contains images and logos
│   ├── 📂 components     # Reusable components
│   ├── 📂 pages          # Page components
│   ├── 📂 api            # API functions
│   ├── 📜 App.js         # Main application entry
│   ├── 📜 index.js       # React DOM rendering
│── 📜 package.json       # Dependencies and scripts
│── 📜 README.md          # Project documentation
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
| Form UI  | Success Toast |
|----------|--------------|
| ![Form Screenshot](src/assets/form.png) | ![Toast Screenshot](src/assets/toast.png) |

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

