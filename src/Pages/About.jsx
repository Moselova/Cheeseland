import React from "react";
import Second from "./images/second-pic.png";

export default function About() {
	return (
		<div className="flex items-center justify-start gap-[45px] bg-[#FFF8E1] h-[80vh] pl-[50px]">
			<div>
				<img src={Second} />
			</div>
			<div>
				<div className="mb-[25px]">
					<h2 className="text-[60px] font-[400] font-my-font">
						We Love Cheesecake
					</h2>
					<p className="text-[24px] font-[400] text-[rgba(27,11,11,0.75)]">
						Discover Our Cheesecake Story
					</p>
				</div>
				<div className="text-[20px] font-[400] h-[182px] w-[558px] mb-[40px] text-[rgba(0,0,0,0.70)]">
					<p className="mb-[20px]">
						At Cheesecake Love, quality is our cornerstone. Each
						<br />
						cheesecake is crafted with the finest ingredients,
						<br />
						meticulous attention to detail, and a dash of
						creativity.
					</p>
					<p className="">
						We believe in delivering not just desserts but moments
						of <br />
						sheer indulgence.
					</p>
				</div>
				<div>
					<div className="w-[170px] h-[56px] rounded-[100px] bg-[#6A4028] flex items-center justify-center">
						<p className="text-[#ffffff]">Read More</p>
					</div>
				</div>
			</div>
		</div>
	);
}
