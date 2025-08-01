# 🔐 Authentication Backend

This is a **Node.js + Express** based backend for an authentication system supporting:

- User registration & login
- Email verification (OTP based)
- Password reset via OTP
- JWT-based authentication
- MongoDB as the database

---

## 📁 Project Structure

├── controllers/
│ ├── authController.js
│ └── userController.js
├── middleware/
│ └── userAuth.js
├── models/
│ └── userModel.js
├── routes/
│ ├── authRoutes.js
│ └── userRoutes.js
├── config/
│ ├── mongodb.js
│ ├── nodemailer.js (expected)
│ └── emailTemplates.js (expected)
├── .env
└── index.js / server.js

yaml
Copy
Edit

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/auth-backend.git
cd auth-backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
Create a .env file in the root directory with the following variables:

env
Copy
Edit
PORT=5000
MONGODB_URI=mongodb://localhost:27017
JWT_SECRET=your_jwt_secret
SENDER_EMAIL=youremail@example.com
EMAIL_PASSWORD=your_email_password
NODE_ENV=development
4. Run the Server
bash
Copy
Edit
npm run dev
# or
node index.js
Make sure MongoDB is running locally or use a cloud instance.

API Endpoints
✅ Authentication Routes (/api/auth)
Method	Endpoint	Description	Auth
POST	/register	Register new user	❌
POST	/login	Login with email & password	❌
POST	/logout	Logout user (clears cookie)	❌
GET	/is-auth	Check if user is authenticated	✅
POST	/send-verify-otp	Send email verification OTP	✅
POST	/verify-account	Verify email with OTP	✅
POST	/send-reset-otp	Send OTP to reset password	❌
POST	/reset-password	Reset password with OTP	❌

👤 User Routes (/api/user)
Method	Endpoint	Description	Auth
GET	/data	Get user name & status	✅

🛡 Middleware
userAuth.js: JWT verification middleware. Checks for valid token in cookies and injects userId into request.

Technologies Used
Node.js

Express.js

MongoDB (via Mongoose)

JSON Web Tokens (JWT)

bcrypt.js for password hashing

nodemailer for email delivery

Environment config via dotenv

Additional Notes
OTPs for email verification and password reset are stored with expiry timestamps in the user document.

JWT token is stored in HTTP-only cookie for session persistence.

Modular codebase with separation of concerns: Routes, Controllers, Models, Middleware.

✍️ Author
Nischal Saini

