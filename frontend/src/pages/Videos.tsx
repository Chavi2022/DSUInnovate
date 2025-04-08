import Navbar from "../components/Navbar"
import VideoPlaylist from "../components/VideoPlaylist"


function Videos() {
    return (
        <>
            <Navbar />
            <VideoPlaylist videoDatabaseLink="http://localhost:5000/videos" />
        </>
    )
}
export default Videos