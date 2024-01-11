import React from "react";
import Foot from "./images/foot.png";
import Fb from "./images/fb.svg";
import Twit from "./images/twit.svg";
import You from "./images/youtube.svg";
import Ig from "./images/ig.svg";
import Copy from "./images/copy.svg";

export default function Contact() {
	return (
		<div className="bg-[rgba(106,64,40,0.94)] pt-[30px] h-[727px] w-[100%]">
			<div className="flex flex-row justify-center gap-[100px] items-center">
				<div>
					<div className="text-[64px] w-[315px] h-[83px] font-[400] font-my-font text-[#FFF8E1]">
						<h1>Contact Us</h1>
					</div>
					<div className="text-[20px] font-[400] text-[#FFF8E1] leading-[31px]">
						<p>
							Need to get in touch with us? Either fill out the
							form with your inquiry or find the
							<br /> department phone, email you’d like to connect
							below
						</p>
					</div>
					<div className="mb-[69px]">
						<img src={Foot} />
					</div>
					<div className="flex items-center gap-[45px] mb-[35px]">
						<div className="flex items-center gap-[17.21px] ">
							<div className="">
								<img src={Fb} />
							</div>
							<div className="rounded-full w-[51.62007px] h-[48.73913px] bg-[#EDFFEF] flex justify-center items-center">
								<img src={Ig} />
							</div>
							<div className="rounded-full w-[51.62007px] h-[48.73913px] bg-[#EDFFEF] flex justify-center items-center">
								{" "}
								<img src={Twit} />
							</div>
							<div className="rounded-full w-[51.62007px] h-[48.73913px] bg-[#EDFFEF] flex justify-center items-center">
								<img src={You} />
							</div>
						</div>
						<div className="flex text-[22px] font-[400] text-[#FFF8E1]">
							<p>Copyright</p>
							<img src={Copy} />
							<p className="ml-[7.5px]">
								2024 Dscode | All rights reserved
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className="mb-[21.32px] ">
						<input
							type="text"
							placeholder="Name"
							className="rounded-[60px] w-[325px] h-[61px] bg-[#FCF9F4] pl-[20px] text-[20px] font-[400] text-[#757575]"
						/>
					</div>
					<div className="mb-[29.94px]">
						<input
							type="text"
							placeholder="Email"
							className="rounded-[60px] w-[325px] h-[61px] bg-[#FCF9F4] pl-[20px] text-[20px] font-[400] text-[#757575]"
						/>
					</div>
					<div className="mb-[37.01px] ">
						<input
							type="text"
							placeholder="Your Message..."
							className="rounded-[26px] bg-[#FCF9F4] w-[444.325px] h-[148.034px] pl-[20px] pb-[80px] text-[20px] font-[400] text-[#757575]"
						/>
					</div>
					<div className="w-[443px] h-[68px] rounded-[60px] bg-[#FCAE36] flex items-center justify-center">
						<p className="text-[24px] text-[#000] font-[400]">
							Contact Us Now
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
