import {useContext, useState, useEffect} from 'react';
import {UserContext} from '../../context/UserContext';
import fetchData from '../../api/fetchData';
import {FiGithub} from 'react-icons/fi';

interface User {
	login: string;
	name: string;
	avatarUrl: string;
	url: string;
	followers: {
		totalCount: number;
	};
	following: {
		totalCount: number;
	};
	repositories: {
		nodes: Repository[];
	};
}

interface Repository {
	id: string;
	name: string;
	description: string | null;
	url: string;
}

const UserComponent = () => {
	const userContext = useContext(UserContext);
	const username = userContext.username;
	const [userData, setUserData] = useState<User | null>(null);
	const query = `query {
        user(login: "${username}") {
            login
            name
            avatarUrl
            url
            followers {
                totalCount
            }
            following {
                totalCount
            }
            repositories(first: 20) {
                nodes {
                id
                name
                description
                url
                }
            }
        }
    }`;

	useEffect(() => {
		const fetchDataUser = async () => {
			try {
				const data = await fetchData(query);
				setUserData(data?.data?.user);
				console.log(data);
			} catch (error) {
				console.error('Error fetching user data:', error);
			}
		};
		fetchDataUser();
	}, [query]);

	return (
		<div>
			<section>
				<div className="">
					<img src={userData?.avatarUrl} alt="User Logo" className="" />
					<p className="">{userData?.login}</p>
					<p className="">{userData?.name}</p>

					<div className="">
						<p className="">
							{userData?.followers.totalCount}
							<span className=""> Followers</span>
						</p>
						<p className="">
							{userData?.following.totalCount}
							<span className=""> Following</span>
						</p>
					</div>
					<a href={userData?.url} target="_blank" className="">
						<span>Github Profile</span> <FiGithub />
					</a>
				</div>
				{/* <div className="">
					<FilterBar setFilter={setFilter} />
					<Repositories filter={filter} repositories={searchResults?.repositories.nodes} />
				</div> */}
			</section>
		</div>
	);
};

export default UserComponent;
