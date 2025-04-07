import Navbar from "../components/Navbar"
import VideoPlaylist from "../components/VideoPlaylist"


function Videos() {
    return (
        <>
            <Navbar />
            <VideoPlaylist videoDatabaseLink="https://localhost8080/videos" />
        </>
    )
}
export default Videos