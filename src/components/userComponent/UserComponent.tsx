import {useContext, useState, useEffect} from 'react';
import {UserContext} from '../../context/UserContext';
import fetchData from '../../api/fetchData';
import {FiGithub} from 'react-icons/fi';
import styled from 'styled-components';
import UserRepositories from '../userRepositories/UserRepositories';
import SearchBar from '../searchBar/SearchBar';

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

export interface Repository {
	id: string;
	name: string;
	description: string | null;
	url: string;
}

const UserComponent = () => {
	const userContext = useContext(UserContext);
	const username = userContext.username;
	const [userData, setUserData] = useState<User | null>(null);
	const [filteredRepo, setFilteredRepo] = useState<string>('');
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
            repositories(first: 50) {
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
		<UserComponentStyles>
			<div className="user__info">
				<img src={userData?.avatarUrl} alt="User Logo" className="user__info__pic" />
				<p className="user__info__username">{userData?.login}</p>
				<p className="user__info__name">{userData?.name}</p>

				<div className="user__info__social">
					<p className="user__info__social__followers">
						{userData?.followers.totalCount}
						<span className="user__info__social__followers__span"> Followers</span>
					</p>
					<p className="user__info__social__following">
						{userData?.following.totalCount}
						<span className="user__info__social__following__span"> Following</span>
					</p>
				</div>
				<a href={userData?.url} target="_blank" className="user__info__github">
					<span>Github Profile</span> <FiGithub />
				</a>
			</div>
            <div className="">
            <SearchBar filter={filteredRepo} setFilter={setFilteredRepo} />
                {userData?.repositories.nodes.map((repository) => (
                    <UserRepositories key={repository.id} filter={filteredRepo} repositories={[repository]} /> //This way we make sure we pass repositories as an array
                ))}
                </div>
		</UserComponentStyles>
	);
};

const UserComponentStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 10rem;
	padding-top: 1rem;
	background-color: #f6f8fa;
	& .user__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-top: 1vh;
		margin-left: 10rem;
		position: block;
		&__pic {
			width: 15rem;
			height: 15rem;
			border-radius: 50%;
		}
		&__username {
			font-size: 2rem;
			font-weight: 600;
			margin-top: 0.5vh;
			margin-bottom: 1vh;
		}
		&__name {
			font-size: 1.5rem;
			font-weight: 400;
			margin-top: 1vh;
			margin-bottom: 0.5vh;
		}
		&__social {
			display: flex;
			gap: 1rem;
			margin-top: 1vh;
			margin-bottom: 1vh;
			&__followers,
			&__following {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.5rem;
				margin-top: 1vh;
				margin-bottom: 1vh;
				&__span {
					font-size: 0.8rem;
					font-weight: 400;
				}
			}
		}
		&__github {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 1.2rem;
			font-weight: 600;
			color: #218bff;
			text-decoration: none;
			& span {
				color: #000;
			}
		}
	}
`;
export default UserComponent;
