# AI Verse

AI Verse is a powerful conversational AI platform that allows users to interact with an AI assistant, ask questions, upload images for analysis, and continue seamless conversations. The platform leverages the Gemini API to deliver advanced conversational and analytical capabilities. The app provides an intuitive and responsive user interface, making it simple to manage and revisit conversations.

## Features



- **Chat Functionality**: Engage in conversations with the AI assistant seamlessly. Users can type queries, ask for help, and receive intelligent, real-time responses. The AI is powered by the Gemini API, ensuring advanced conversational capabilities.
- **Recent Chats**: View a list of recent chats for quick access. Easily pick up conversations where you left off without losing context. The Gemini API helps maintain accurate context for a smooth user experience.
- **Start New Chat**: Start a fresh conversation anytime with a single click. This ensures a clean slate for new ideas, queries, or topics. Each new chat session is backed by the Gemini API to provide accurate and insightful responses.
- **Image Input**: Pass an image and ask the AI to interpret or analyze it. The AI processes the image and provides relevant insights or explanations. Image processing and understanding are handled via the Gemini API's advanced features.
- **Switch Between Chats**: Effortlessly switch to any previous chat and continue the conversation. This makes it easy to manage multiple threads and revisit earlier discussions. The Gemini API ensures that chat histories are seamlessly integrated.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js and Node.js
- **Database**: MongoDB
- **Authentication**: Clerk

## Installation

Follow these steps to set up the project locally:

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Steps to Set Up
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sid1309/AI-Verse.git
   cd AI-Verse
   ```

2. **Install dependencies** for both frontend and backend:
   ```bash
   # Navigate to the backend folder and install dependencies
   cd server
   npm install

   # Navigate to the frontend folder and install dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the backend (`server`) folder and add the following:
     ```
     PORT=5000
     MONGODB_URI=<your-mongodb-connection-string>
     CLERK_API_KEY=<your-clerk-api-key>
     ```

4. **Run the backend server**:
   ```bash
   cd server
   npm start
   ```

5. **Run the frontend app**:
   ```bash
   cd ../client
   npm start
   ```

6. **Access the app**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure
```
AI-Verse/
├── client/        # React frontend code
├── server/        # Express.js backend code
├── .gitignore     # Files to ignore in Git
├── README.md      # Project documentation
└── package.json   # Dependency manager file
```


## License
This project is licensed under the **MIT License**.

---

### Contributors
- **Siddhant Chatse** - [GitHub](https://github.com/sid1309)
