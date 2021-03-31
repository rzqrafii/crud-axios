import React, { Component } from "react";
import API from "../axios/Api";

export class AddProduk extends Component {
	state = {
		namaProduk: "",
		deskripsi: "",
		harga: "",
		stok: ""
	};
	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handlerSubmit = async (event) => {
		event.preventDefault();
		// console.log(this.state);
		await API.post("/adddata.php", this.state);
		this.props.history.push("/");
	};
	render() {
		return (
			<div className="container">
				<h2>Tambah Produk</h2>

				<form onSubmit={this.handlerSubmit}>
					<table>
						<tbody>
							<tr>
								<td>Nama Produk</td>
								<td>
									<input
										type="text"
										name="namaProduk"
										onChange={this.handlerChange}
									/>
								</td>
							</tr>
							<tr>
								<td>Deskripsi</td>
								<td>
									<input
										type="text"
										name="deskripsi"
										onChange={this.handlerChange}
									/>
								</td>
							</tr>
							<tr>
								<td>Harga</td>
								<td>
									<input
										type="text"
										name="harga"
										onChange={this.handlerChange}
									/>
								</td>
							</tr>
							<tr>
								<td>Stok</td>
								<td>
									<input
										type="text"
										name="stok"
										onChange={this.handlerChange}
									/>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<input
										type="submit"
										value="Add"
										className="btn btn-primary"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

export default AddProduk;
