import React from 'react'
import Logo from "./pics/logo.png";

export default function Navbar() {
  return (
		<div className="flex items-center justify-around pb-[0px] mb-[0px]">
			<div>
				<img src={Logo} />
			</div>
			<div className="flex gap-[28px] w-[446px] h-[43px] border-2 rounded-[10px] justify-between items-center bg-custom-nav text-[16px] font-[700]">
				<div className="w-[97px] h-[43px] bg-white flex justify-center items-center rounded-[10px] text-custom-color">
					<p>Home</p>
				</div>
				<div className="w-[97px] h-[43px]  flex justify-center items-center text-[#fff]">
					<p>About Us</p>
				</div>
				<div className="w-[97px] h-[43px]  flex justify-center items-center text-[#fff]">
					<p>Menu</p>
				</div>
				<div className="w-[97px] h-[43px]  flex justify-center items-center text-[#fff]">
					<p>Contact</p>
				</div>
			</div>
			<div className="w-[104px] h-[49px] rounded-[38px] border-2 border-[#523728] flex justify-center flex-col">
				<p className=" flex justify-center">Sign Up</p>
			</div>
		</div>
  );
}
