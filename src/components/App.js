import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import DaftarProduk from "./DaftarProduk";
import AddProduk from "./AddProduk";
import EditProduk from "./EditProduk";
import Breadcrumb from "./Breadcrumbs";
import Stepper from "./Stepper";

function App() {
	return (
		<BrowserRouter>
			<Header />
			{/* <Breadcrumb />
			<br />
			<Stepper /> */}
			<Route path="/" exact component={DaftarProduk} />
			<Route path="/add" component={AddProduk} />
			<Route path="/edit/:id" component={EditProduk} />
		</BrowserRouter>
	);
}

export default App;
