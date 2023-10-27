import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {FiGithub} from 'react-icons/fi';
import {breakpoints} from '../styles/breakpoints';

/**
 * LandingPage component for the home page.
 */

const LandingPage = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');

	/**
	 * Handles the form submission.
	 * @param {Object} e - Event object with a preventDefault function.
	 */

	const handleFormSubmit = (e: {preventDefault: () => void}) => {
		e.preventDefault();
		navigate(`/${userName}`);
	};

	return (
		<LandingPageStyles>
			<h1 className="landing__title">
				Welcome to <FiGithub /> User Search
			</h1>
			<form className="landing__form" onSubmit={handleFormSubmit}>
				<label htmlFor="userName" className="landing__form__label">
					Please, enter a GitHub Username
				</label>
				<input type="text" id="userName" placeholder="Write here" className="landing__form__input" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
				<button type="submit" className="landing__form__button">
					Submit
				</button>
			</form>
		</LandingPageStyles>
	);
};

/**
 * Styles for the LandingPage component.
 */

const LandingPageStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	height: 95vh;
	border-radius: 2rem;

	& .landing__title {
		font-size: 2rem;
		font-weight: 600;
		color: #218bff;
	}

	& .landing__form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
		background-color: #aaf1f6;
		box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
		max-width: 50%;

		&__label {
			font-size: 1.5rem;
			font-weight: 600;
			color: #218bff;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&__input {
			font-size: 1rem;
			font-weight: 400;
			padding: 0.5rem;
			border-radius: 0.5rem;
			border: 1px solid #218bff;
			width: 100%;
		}

		&__button {
			font-size: 1rem;
			font-weight: 600;
			padding: 0.5rem;
			margin-bottom: 2rem;
			border-radius: 0.5rem;
			border: 1px solid #218bff;
			width: 50%;
			background-color: #218bff;
			color: #fff;
			cursor: pointer;
			transition: all 0.4s ease-in-out;

			&:hover {
				background-color: #fff;
				color: #218bff;
			}
		}
	}
	// Media Queries
	@media (${breakpoints.min}px <= width <= ${breakpoints.mobileMax}px) {
		justify-content: space-around;
		& .landing__title {

			font-size: 1.5rem;
		}

		& .landing__form {
			max-width: 90%;
			&__label {
				font-size: 1rem;
			}

			&__input {
				font-size: 0.8rem;
			}

			&__button {
				width: 70%;
			}
			}
`;

export default LandingPage;
