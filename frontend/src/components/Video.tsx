

interface VideoProps {
    id: string;
    title: string;
    thumbnailUrl: string;
    description?: string;
}

function Video({ id, title, thumbnailUrl, description }: VideoProps) {

    return (
        <>
            <div key={id} className="video-card">
                <img src={thumbnailUrl} alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}
export default Video