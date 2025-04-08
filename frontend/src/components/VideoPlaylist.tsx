import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Video from "./Video"
import TopicTag from "./TopicTag";
import "../css/Video.css"
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
    const availableTags = ["All Topics", "Soil Health", "Crop Rotation", "Gardening"];
    const [selectedTag, setSelectedTag] = useState<string | null>("All Topics");
    const [query, setQuery] = useState("");
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Debounce the query state
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500); // Delay 500ms after typing stops

        // Cleanup the timeout if query changes again
        return () => clearTimeout(timer);
    }, [query]);

    /*useEffect(() => {
        const fetchVideos = async () => {
            try {
                let url = `${videoDatabaseLink}`;
                const hasQuery = query.trim() !== "";
    
                if (hasQuery) {
                    url += `?q=${query}`;
                }
    
                if (selectedTag && selectedTag !== "All Topics") {
                    // If there's already a `?q=`, use `&`, otherwise use `?`
                    url += hasQuery ? `&tags_like=${selectedTag}` : `?tags_like=${selectedTag}`;
                }
    
                const res = await fetch(url);
                const data = await res.json();
                setVideos(data);
            } catch (err) {
                console.error("Failed to fetch videos", err);
            }
        };
    
        fetchVideos();
    }, [query, selectedTag]);
     */
    useEffect(() => {

        const fetchVideos = async () => {
            try {
                let url = `${videoDatabaseLink}?q=${query}`;
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

                        videos.map((video, index) => (
                            <>
                                {index == 0 ? <div className="first-video-container">
                                    <Video
                                        key={index}
                                        id={video.id}
                                        thumbnailUrl={video.thumbnailUrl}
                                        title={video.title}
                                        description={video.description}
                                        isFirst={index === 0}
                                    />
                                </div> : <Video
                                    key={index}
                                    id={video.id}
                                    thumbnailUrl={video.thumbnailUrl}
                                    title={video.title}
                                    description={video.description}
                                    isFirst={index === 0}
                                />}

                            </>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
export default VideoPlaylist