import React from 'react'
import { Link } from "react-router-dom";
import Icon from "./images/btn-1.svg";
import Main from "./images/Main.png";
import About from './About';
import Menu from './Menu';

export default function Home() {
  return (
		<div>
			<div className="flex justify-around items-center bg-gradient-to-r h-[80vh]">
				<div>
					<div className="h-[166px] mb-[28px] text-[#523728] font-my-font">
						<h1 className="font-normal text-[69px] leading-[120%]">
							Bite The World of
							<br /> Cheesecake Wonders
						</h1>
					</div>
					<div className="h-[58px] mb-[38px] text-custom2">
						<p className="font-[400] text-[18px] leading-[160%]">
							We always make our customer happy by providing
							<br /> as many choices as possible
						</p>
					</div>
					<div className="flex gap-[12px]">
						<div className="rounded-[100px] border-[1px] border-[#523728] h-[56px] w-[147px] flex justify-center flex-col bg-[#6A4028] text-[#fff]">
							<p className="text-[16px] font-[600]flex flex justify-center">
								Get Started
							</p>
						</div>
						<div className="rounded-[100px] border-[1px] border-[#523728] h-[56px] w-[147px] flex justify-center gap-2 items-center">
							<img src={Icon} />
							<p className="flex justify-center items-center text-[16px] font-[600]">
								Watch Demo
							</p>
						</div>
					</div>
				</div>
				<div>
					<img src={Main} />
				</div>
			</div>
			<About />
			<Menu />
		</div>
  );
}
