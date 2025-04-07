import { useState } from "react";
import "../css/SearchBar.css"
interface SearchBarProps {
    placeholder?: string;
    onSearch: (value: string) => void;
}

function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
    const [input, setInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        onSearch(value);
    };

    return (
        <div className="searchBarContainer">
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder={placeholder}
                className="searchInput"
            />
        </div>
    );
}

export default SearchBar;