import { useDispatch, useSelector } from 'react-redux';

import { combineReducers } from 'redux';
import { searchReducer } from './search/searchReducer';

export const rootReducer = combineReducers({
    search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const SearchBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm); // Use RootState to get the value of searchTerm from the store

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        dispatch(setSearchTerm(newSearchTerm)); // Dispatch the setSearchTerm action
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} />
        </div>
    );
}

