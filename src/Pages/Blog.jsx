import React from 'react';
import Chef from "./images/chef.png";
import Blog2 from "./images/blog2.png";
import Blog3 from "./images/blog3.png";

export default function Blog() {
  return (
		<div className="bg-[#FFF8E1]">
			<div className="flex justify-center flex-col text-center pt-[68px]">
				<div className="text-[64px] font-[400] text-[#734B33] font-my-font">
					<h1>Our Blog </h1>
				</div>
				<div className="text-[22px] font-[400] leading-[24px] text-[#734B33] mb-[76px]">
					<p>Our Recent Posts</p>
				</div>
			</div>
			<div className="flex justify-center gap-[94px] pb-[108px]">
				<div className="w-[320px] h-[551px] rounded-[19px] bg-[#FFF8E1] flex justify-start shadow-[-2px_-9px_42px_0px_rgba(77,66,44,0.38)]">
					<div className="flex justify-center flex-col ml-[30px]">
						<div className="flex   mb-[24px]">
							<img src={Chef} />
						</div>
						<div className="text-[18px] font-[500] text-[#BB6939] flex items-center w-[] h-[23px]">
							<p>23 Nov, 2023 / Cheesecake</p>
						</div>
						<div className="text-[22px] font-[500] text-[#734B33] mb-[12px]">
							<p>
								A Peek Behind the
								<br /> Cheesecake Curtain
							</p>
						</div>
						<div className="text-[13px] font-[400] text-[#704B33] mb-[25px] ">
							<p>
								Step into our cheesecake haven, where
								<br /> the magic unfolds behind the scenes,
								<br /> whisking dreams into reality. Our kitchen
								<br /> is a symphony and very...
							</p>
						</div>
						<div className="text-[15px] font-[500] text-[#734B33]">
							<p>Read More</p>
						</div>
					</div>
				</div>
				<div className="w-[320px] h-[551px] rounded-[19px] bg-[#FFF8E1] flex justify-start shadow-[-2px_-9px_42px_0px_rgba(77,66,44,0.38)]">
					<div className="flex justify-center flex-col ml-[30px]">
						<div className="flex   mb-[24px]">
							<img src={Blog2} />
						</div>
						<div className="text-[18px] font-[500] text-[#BB6939] flex items-center w-[] h-[23px]">
							<p>18 July, 2023 / Cheesecake</p>
						</div>
						<div className="text-[22px] font-[500] text-[#734B33] mb-[12px]">
							<p>
								Low-Sugar & Gluten-Free
								<br /> Cheesecakes
							</p>
						</div>
						<div className="text-[13px] font-[400] text-[#704B33] mb-[25px] ">
							<p>
								Welcome to our guilt-free indulgence
								<br /> zone, where we're redefining the art of
								<br /> cheesecake with our delectable low-
								<br />
								sugar...
							</p>
						</div>
						<div className="text-[15px] font-[500] text-[#734B33]">
							<p>Read More</p>
						</div>
					</div>
				</div>
				<div className="w-[320px] h-[551px] rounded-[19px] bg-[#FFF8E1] flex justify-start shadow-[-2px_-9px_42px_0px_rgba(77,66,44,0.38)]">
					<div className="flex justify-center flex-col ml-[30px]">
						<div className="flex   mb-[24px]">
							<img src={Blog3} />
						</div>
						<div className="text-[18px] font-[500] text-[#BB6939] flex items-center w-[] h-[23px]">
							<p>1 January, 2024 / Cheesecake</p>
						</div>
						<div className="text-[22px] font-[500] text-[#734B33] mb-[12px]">
							<p>
								Sweet Words - Customer
								<br /> Reviews of Cheesecakes
							</p>
						</div>
						<div className="text-[13px] font-[400] text-[#704B33] mb-[25px] ">
							<p>
								Indulge in the rich tapestry of heartfelt
								<br />
								stories within "Sweet Words." This curated
								<br />
								collection of customer reviews offers a<br />{" "}
								glimpse into the joy...
							</p>
						</div>
						<div className="text-[15px] font-[500] text-[#734B33]">
							<p>Read More</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}
