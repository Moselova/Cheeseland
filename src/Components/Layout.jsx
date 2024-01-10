import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar'


export default function Layout() {
  return (
		<>
			<div className="bg-custom-background bg-no-repeat bg-contain">
				<Navbar />
				<Outlet />
			</div>
		</>
  );
}
