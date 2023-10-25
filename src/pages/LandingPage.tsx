import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../context/UserContext';

interface LandingPageProps {
	onFormSubmit: (userName: string) => void; // Specifies type on onFormSubmit prop
}

const LandingPage: React.FC<LandingPageProps> = ({onFormSubmit}) => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
    const userContext = useContext(UserContext); // Here we get to the userContext
	const handleFormSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
        userContext.setUsername(userName); //Here we set the username in the context
		onFormSubmit(userName);
		navigate('/user');
	};

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor="userName">Please, enter a GitHub username</label>
				<input type="text" id="userName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default LandingPage;
