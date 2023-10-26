import { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import { UserContext } from '../context/UserContext';
import UserComponent from '../components/userComponent/UserComponent';

const UserPage = () => {
	const userContext = useContext(UserContext);
    const username = userContext.username;
    console.log(username);

	return (
		<>
			<Navbar />
            <UserComponent />
		</>
	);
};

export default UserPage;
