// server.js
import express from "express";
import cors from "cors";
import patientRoutes from "./src/routes/patientRoutes.js";
import accessControlRoutes from "./src/routes/accessControlRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // biar FE Next.js bisa fetch
app.use(express.json()); // biar bisa parsing JSON body

// Route contoh
app.get("/", (req, res) => {
  res.json({
    message: "Halo dari server Express!",
    title: "Blockchain RS Ludger",
    people: ["Ludger", "Desi", "Cinta"],
  });
});

// Patient routes
app.use("/patients", patientRoutes);

// Access Control routes
app.use("/access-controls", accessControlRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
