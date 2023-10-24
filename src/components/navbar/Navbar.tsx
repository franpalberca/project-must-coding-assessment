import { HiOutlineBookOpen } from 'react-icons/hi';
import { GiBookmark } from 'react-icons/gi';
import { LuTable2 } from 'react-icons/lu';

export const Navbar = () => {
  return (
    <div>
    <div>
      <HiOutlineBookOpen />Overview
      </div>
      <div>
      <GiBookmark />Repositories
      </div>
      <div>
      <LuTable2 />Projects
      </div>
      </div>
  )
}