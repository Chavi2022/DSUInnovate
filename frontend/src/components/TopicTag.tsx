import "../css/Tag.css"

interface TagProps {
    label: string;
    onClick: (label: string) => void;
    active: boolean;
}

function TopicTag({ label, onClick, active }: TagProps) {
    return (
        <button
            className={`tag ${active ? "active" : ""}`}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    );
}
export default TopicTag