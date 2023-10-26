interface PropType {
    filter: string;
    setFilter: (filter: string) => void
}

const SearchBar = (props: PropType) => {
    const {filter, setFilter} = props;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Filter repositories"
                value={filter}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;

