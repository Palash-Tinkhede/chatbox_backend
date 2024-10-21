const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://chatbox-frontend-five.vercel.app/login",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
