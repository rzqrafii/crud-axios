import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import DaftarProduk from "./DaftarProduk";
import AddProduk from "./AddProduk";
// import AddProduk from "./AddProduk ";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Route path="/" exact component={DaftarProduk} />
			<Route path="/add" component={AddProduk} />
		</BrowserRouter>
	);
}

export default App;
