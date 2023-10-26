import { useState, useEffect } from 'react';
import { Repository } from '../userComponent/UserComponent';
import styled from 'styled-components';

interface Props {
    filter: string;
    repositories: Repository[] | undefined;
}


const UserRepositories = (props: Props) => {
    const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        if(props.repositories) {
        const filtered = props?.repositories?.filter((repo) => {
            const search = props.filter.toLowerCase();
            return (
                repo.name.toLowerCase().includes(search) ||
                repo?.description?.toLowerCase().includes(search) ||
                repo.url.toLowerCase().includes(search)
            );
        });
        setFilteredRepositories(filtered);
    }
    }, [props.filter, props.repositories]);

    return (
        <UserRepositoriesStyles>
            {filteredRepositories.map((repo) => (
                <div key={repo.name}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <a href={repo.url} target='_blank'>{repo.url}</a>
                </div>
            ))}
        </UserRepositoriesStyles>
    );
};

const UserRepositoriesStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    overflow-y: scroll;
    max-height: 100vh;
    & h3 {
        font-size: 1.5rem;
        font-weight: 600;
        }
        & p {
            font-size: 1rem;
            font-weight: 400;
            }
`
export default UserRepositories;


