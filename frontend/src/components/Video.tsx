import "../css/Video.css"

interface VideoProps {
    id: string;
    title: string;
    thumbnailUrl: string;
    description?: string;
    isFirst: boolean;
}

function Video({ id, title, thumbnailUrl, description, isFirst }: VideoProps) {

    if (isFirst) {
        return (
            <>
                <div key={id} className="first-video video">
                    <img src={thumbnailUrl} alt={title} className="thumbnail" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </>)
    }
    else {

        return (
            <>
                <div key={id} className="video">
                    <img src={thumbnailUrl} alt={title} className="thumbnail" />
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </>
        )
    }
}
export default Video