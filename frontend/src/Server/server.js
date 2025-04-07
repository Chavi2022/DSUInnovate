import express from "express";
import cors from "cors";

const app = express();
const port = 5000; // You can change the port if you need

// Middleware
app.use(cors());
app.use(express.json()); // This is important to handle JSON payloads

// Dummy data
const videos = [
    { id: 1, title: "Intro to Soil Health", tags: ["soil", "organic"] },
    { id: 2, title: "Advanced Soil Techniques", tags: ["soil", "advanced"] },
    { id: 3, title: "Beginner's Guide to Gardening", tags: ["gardening", "beginner"] },
];

// GET route to retrieve all videos
app.get("/videos", (req, res) => {
    const { q, tags_like } = req.query;

    // Simple filtering logic
    let filteredVideos = videos;

    if (q) {
        filteredVideos = filteredVideos.filter((video) =>
            video.title.toLowerCase().includes(q.toLowerCase())
        );
    }

    if (tags_like) {
        filteredVideos = filteredVideos.filter((video) =>
            video.tags.some((tag) => tag.toLowerCase() === tags_like.toLowerCase())
        );
    }

    res.json(filteredVideos);
});

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Video API!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
