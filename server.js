// server.js
import express from "express";
import cors from "cors";
import patientRoutes from "./src/routes/patientRoutes.js";

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

app.use("/patients", patientRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
