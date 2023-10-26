import {HiOutlineBookOpen} from 'react-icons/hi';
import {GiBookmark} from 'react-icons/gi';
import {LuTable2} from 'react-icons/lu';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<NavbarStyles>
			<div className='buttons'>
				<div className='buttons__left'>
					<HiOutlineBookOpen />
					Overview
				</div>
				<div className='buttons__center'>
					<GiBookmark />
					Repositories
				</div>
				<div className='buttons__right'>
					<LuTable2 />
					Projects
				</div>
			</div>
		</NavbarStyles>
	);
};

const NavbarStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.15);
	color: #218bff;
	padding: 1rem;
	font-size: 1.2rem;
	font-weight: 600;
	box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
	& .buttons {
		display: flex;
		gap: 0.5rem;
        &__left, &__center, &__right {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    }
`;

export default Navbar;
