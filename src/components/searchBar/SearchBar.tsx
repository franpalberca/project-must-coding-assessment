import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
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
        <SearchBarStyles>
            <input className='input__filter'
                type="text"
                placeholder="Filter repositories"
                value={filter}
                onChange={handleSearch}
            />
        </SearchBarStyles>
    );
};

const SearchBarStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (${breakpoints.min}px <= width <= ${breakpoints.tabletMax}px) {
    max-width: 40vh;
}
@media (${breakpoints.tabletMax}px <= width <= ${breakpoints.laptopMax}px) {
    max-width: 60vh;
}
    .input__filter {
        border: 1px solid #218bff;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        width: 60vh;
        height: 3vh;
        @media (${breakpoints.min}px <= width <= ${breakpoints.tabletMax}px) {
            width: 40vh;
        }
        @media (${breakpoints.tabletMax}px <= width <= ${breakpoints.laptopMax}px) {
            width: 60vh;
        }
    }`

export default SearchBar;

