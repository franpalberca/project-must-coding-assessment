import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../actions/searchActions/searchActions';


export const SearchBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.searchTerm); // Usa useSelector para obtener el valor de searchTerm del store

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        dispatch(searchActions.setSearchTerm(newSearchTerm)); // Usa searchActions para dispatch la acción
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} />
        </div>
    );
}

