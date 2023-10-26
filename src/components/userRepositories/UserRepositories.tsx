import { useState, useEffect } from 'react';
import { Repository } from '../userComponent/UserComponent';
import Card from '../card/Card';

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
                repo.url.toLowerCase().includes(search)
            );
        });
        setFilteredRepositories(filtered);
    }
    }, [props.filter, props.repositories]);

    return (
        <>
            {filteredRepositories.map((repo) => (
                <Card key={repo.id}
                name={repo.name}
                url={repo.url} />
            ))}
        </>
    );
};


export default UserRepositories;


