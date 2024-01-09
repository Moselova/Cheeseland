import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from './Pages/Home';
import Layout from './Components/Layout';


function App () {
  return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
        </Route>
			</Routes>
		</BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);