import express from "express";
import cors from "cors";

const app = express();
const port = 5000; // You can change the port if you need

// Middleware
app.use(cors());
app.use(express.json()); // This is important to handle JSON payloads

// Dummy data
const videos = [
    { id: 1, title: "Intro to Soil Health", tags: ["soil health", "organic"], thumbnailUrl: "https://picsum.photos/200?random=1" },
    { id: 2, title: "Advanced Soil Techniques", tags: ["soil health", "advanced"], thumbnailUrl: "https://picsum.photos/200?random=2" },
    { id: 3, title: "Beginner's Guide to Gardening", tags: ["gardening", "beginner"], thumbnailUrl: "https://picsum.photos/200?random=3" },
    { id: 4, title: "Composting 101", tags: ["compost", "soil health"], thumbnailUrl: "https://picsum.photos/200?random=4" },
    { id: 5, title: "Cover Cropping Explained", tags: ["crop rotation", "soil health"], thumbnailUrl: "https://picsum.photos/200?random=5" },
    { id: 6, title: "Top 5 Gardening Tools", tags: ["gardening", "tools"], thumbnailUrl: "https://picsum.photos/200?random=6" },
    { id: 7, title: "Soil Testing Methods", tags: ["soil health", "testing"], thumbnailUrl: "https://picsum.photos/200?random=7" },
    { id: 8, title: "Urban Farming Techniques", tags: ["urban", "farming"], thumbnailUrl: "https://picsum.photos/200?random=8" },
    { id: 9, title: "Intro to Hydroponics", tags: ["hydroponics", "advanced"], thumbnailUrl: "https://picsum.photos/200?random=9" },
    { id: 10, title: "Building a Raised Bed", tags: ["gardening", "DIY"], thumbnailUrl: "https://picsum.photos/200?random=10" },

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
