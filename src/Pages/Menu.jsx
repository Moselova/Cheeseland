import React from 'react'
import Blue from "./images/blue.png"
import Star from "./images/fi-star.svg";
import Pic2 from "./images/pic2.png";
import Pic3 from "./images/pic3.png";

export default function Menu() {
  return (
		<div className="bg-custom-bg">
			<div className="h-[666px] flex justify-center flex-col items-center ">
				<div className="h-[83px] w-[298px] text-center mb-[34px] font-my-font">
					<h1 className="text-[64px] font-[400] text-[#FFF8E1] ">
						Our Menu
					</h1>
				</div>
				<div className="flex gap-[67px]">
					<div className="w-[355px] h-[351px] rounded-[41px] bg-[#FFF8E1] pt-[40px] ">
						<div className="flex justify-center">
							<img src={Blue} />
						</div>
						<div className="flex flex-col pl-[18px] pb-[22px]">
							<h2 className="text-[25px] font-[700]">
								Blueberry Cheesecake
							</h2>
							<p className="font-[400] text-[13px]">
								Blueberry love, cheesecake delight!
							</p>
						</div>
						<div className="flex gap-[142px] pl-[21px]">
							<div className="w-[60px] h-[25px] font-[700] text-[21px]">
								$9.00
							</div>
							<div className="flex items-center">
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
							</div>
						</div>
					</div>
					<div className="w-[355px] h-[351px] rounded-[41px] bg-[#FFF8E1] pt-[40px] ">
						<div className="flex justify-center">
							<img src={Pic2} />
						</div>
						<div className="flex flex-col pl-[18px] pb-[22px]">
							<h2 className="text-[25px] font-[700]">
								Biscoff Cheesecake
							</h2>
							<p className="font-[400] text-[13px]">
								Biscoff adores cheesecake magic
							</p>
						</div>
						<div className="flex gap-[142px] pl-[21px]">
							<div className="w-[60px] h-[25px] font-[700] text-[21px]">
								$11.00
							</div>
							<div className="flex items-center">
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
							</div>
						</div>
					</div>
					<div className="w-[355px] h-[351px] rounded-[41px] bg-[#FFF8E1] pt-[40px] ">
						<div className="flex justify-center">
							<img src={Pic3} />
						</div>
						<div className="flex flex-col pl-[18px] pb-[22px]">
							<h2 className="text-[25px] font-[700]">
								Chocolate Cheesecake
							</h2>
							<p className="font-[400] text-[13px]">
								Cherish Chocolate, relish cheesecake magic!
							</p>
						</div>
						<div className="flex gap-[142px] pl-[21px]">
							<div className="w-[60px] h-[25px] font-[700] text-[21px]">
								$10.00
							</div>
							<div className="flex items-center">
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
								<img src={Star} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-[27px] justify-end items-center text-[24px] font-[400] text-[#FFF8E1] pr-[33px] pb-[53px]">
				<p className="">View More</p>
				<p>></p>
			</div>
		</div>
  );
}
