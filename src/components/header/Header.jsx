import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {

    const [theme,setTheme]=useState('light');

    const handleToggle=(e)=>{
          if(e.target.checked){
            setTheme('sunset')
          }else{
            setTheme('light')
          }
    }

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme',theme);
    },[theme])

    return (
        <div className="navbar fixed z-10 md:px-[100px] bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 h-60">
                        <NavLink className="py-[12px] font-medium " to='/'>Home</NavLink>
                        <NavLink className="py-[12px] font-medium" to='/listedbooks'>Listed Books</NavLink>
                        <NavLink className="py-[12px] font-medium" to='/pagestoread'>Pages To Read</NavLink>
                        <NavLink className="py-[12px] font-medium" to='/'>Sign Up</NavLink>
                        <NavLink className="py-[12px] font-medium" to='/'>Sign In</NavLink>
                    </ul>
                </div>
                <a className="font-bold text-[28px]" href="/">Book<span className="bg-[#23BE0A] text-white rounded-[10px] ml-[2px] px-[2px]">bing</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className={({ isActive }) => isActive ? 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold text-[#23BE0A] rounded-lg border border-[#23BE0A]' : 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold hover:border hover:text-[#23BE0A] rounded-lg hover:border-[#23BE0A]'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold text-[#23BE0A] rounded-lg border border-[#23BE0A]' : 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold hover:border hover:text-[#23BE0A] rounded-lg hover:border-[#23BE0A]'} to='/listedbooks'>Listed Books</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold text-[#23BE0A] rounded-lg border border-[#23BE0A]' : 'mr-4 px-[20px] py-[15px] text-[18px] font-semibold hover:border hover:text-[#23BE0A] rounded-lg hover:border-[#23BE0A]'} to='/pagestoread'>Pages To Read</NavLink>

                </ul>
            </div>
            <div className="navbar-end">
                <div className="md:mr-4">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                <a className="btn mr-4 btn-success bg-[#23BE0A] text-white rounded-lg hidden md:flex">Sign In</a>
                <a className="btn btn-success bg-[#59C6D2] text-white rounded-lg hidden md:flex">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;