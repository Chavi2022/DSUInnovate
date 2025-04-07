import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Video from "./Video"
import TopicTag from "./TopicTag";
interface VideoItem {
    id: string;
    title: string;
    thumbnailUrl: string;
    description?: string;
}

interface VideoPlaylistProps {
    videoDatabaseLink: string
}


function VideoPlaylist({ videoDatabaseLink }: VideoPlaylistProps) {
    const availableTags = ["All Topics", "Soil Health", "Crop Rotation",];
    const [selectedTag, setSelectedTag] = useState<string | null>("All Topics");
    const [query, setQuery] = useState("");
    const [videos, setVideos] = useState<VideoItem[]>([]);

    useEffect(() => {
        if (query.trim() === "") return;

        const fetchVideos = async () => {
            try {
                let url = `http://localhost:5000/videos?q=${query}`;
                if (selectedTag && selectedTag !== "All Topics") {
                    url += `&tags_like=${selectedTag}`;
                }
                const res = await fetch(url);
                const data = await res.json();
                setVideos(data);
            } catch (err) {
                console.error("Failed to fetch videos", err);
            }
        };

        fetchVideos();
    }, [query, selectedTag]); // Added selectedTag here


    return (
        <>

            <div className="videos-container">
                <SearchBar onSearch={setQuery} placeholder="Search for videos..." />
                <div className="tag-filter">
                    {availableTags.map((tag) => (
                        <TopicTag
                            key={tag}
                            label={tag}
                            onClick={setSelectedTag} // Update selected tag when clicked
                            active={selectedTag === tag} // Highlight if it's the selected tag
                        />
                    ))}

                </div>
                <div className="video-results">
                    {videos.length === 0 ? (
                        <p>No videos found.</p>
                    ) : (
                        videos.map((video) => (
                            <>
                                <Video key={video.id} id={video.id} thumbnailUrl={video.thumbnailUrl} title={video.title} description={video.description} />
                            </>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
export default VideoPlaylist