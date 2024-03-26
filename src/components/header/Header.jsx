import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar fixed z-10 md:px-[100px] bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       <NavLink to='/'>Home</NavLink>
                       <NavLink to='/listedbooks'>Listed Books</NavLink>
                       <NavLink to='/pagestoread'>Pages To Read</NavLink>
                       <NavLink to='/'>Sign Up</NavLink>
                       <NavLink to='/'>Sign In</NavLink>
                    </ul>
                </div>
                <a className="font-bold text-[28px]" href="/">Bookbing</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   <NavLink className={({isActive})=> isActive? 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold text-[#23BE0A] rounded-lg border border-[#23BE0A]': 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold hover:border hover:text-[#23BE0A] rounded-lg hover:border-[#23BE0A]'}  to='/'>Home</NavLink>
                   <NavLink className={({isActive})=> isActive? 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold text-[#23BE0A] rounded-lg border border-[#23BE0A]': 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold hover:border hover:text-[#23BE0A] rounded-lg hover:border-[#23BE0A]'}  to='/listedbooks'>Listed Books</NavLink>
                   <NavLink className={({isActive})=> isActive? 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold text-[#23BE0A] rounded-lg border border-[#23BE0A]': 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold hover:border hover:text-[#23BE0A] rounded-lg hover:border-[#23BE0A]'}  to='/pagestoread'>Pages To Read</NavLink>

                </ul>
            </div>
            <div className="navbar-end hidden md:flex">
                <a className="btn mr-4 btn-success bg-[#23BE0A] text-white rounded-lg">Sign In</a>
                <a className="btn btn-success bg-[#59C6D2] text-white rounded-lg">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;