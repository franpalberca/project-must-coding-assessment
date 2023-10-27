import {useState, useEffect} from 'react';
import {Repository} from '../userComponent/UserComponent';
import Card from '../card/Card';

/**
 * Represents the properties that `UserRepositories` component accepts.
 * @interface
 */

interface Props {
	filter: string;
	repositories: Repository[] | undefined;
}

/**
 * Displays a list of user repositories based on the provided filter.
 * @component
 * @param {Props} props - The component's properties.
 */

const UserRepositories = (props: Props) => {
	// State to store the filtered repositories.
	const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([]);

	/**
	 * Update the list of filtered repositories when the filter or repositories change.
	 */
	useEffect(() => {
		if (props.repositories) {
			// Filter repositories based on the search filter.
			const filtered = props?.repositories?.filter((repo) => {
				const search = props.filter.toLowerCase();
				return repo.name.toLowerCase().includes(search) || repo.url.toLowerCase().includes(search);
			});
			setFilteredRepositories(filtered);
		}
	}, [props.filter, props.repositories]);

	return (
		<>
			{/* Render filtered repositories as Card components. */}
			{filteredRepositories.map((repo) => (
				<Card key={repo.id} name={repo.name} url={repo.url} />
			))}
		</>
	);
};

export default UserRepositories;
