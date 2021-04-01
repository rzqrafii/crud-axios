import React, { Component } from "react";
import API from "../axios/Api";

export class EditProduk extends Component {
	state = {
		id: "",
		namaProduk: "",
		deskripsi: "",
		harga: "",
		stok: ""
	};

	componentDidMount = async () => {
		const id = this.props.match.params.id;
		// axios get : proses pengambilan data
		const res = await API.get("getProduk.php?id=" + id);

		// update state
		this.setState({
			// name : column_name
			id: res.data.id,
			namaProduk: res.data.nama_produk,
			deskripsi: res.data.deskripsi,
			harga: res.data.harga,
			stok: res.data.stok
		});
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// proses mengirimkan ke mysql ketika diedit "submit btn"
	handlerSubmit = async (event) => {
		event.preventDefault();
		await API.put("/prosesedit.php", this.state);
		this.props.history.push("/");
	};

	render() {
		//untuk value agar tidak terlalu panjang seperti this.state.namaProduk dll
		const { namaProduk, deskripsi, harga, stok } = this.state;
		return (
			<div className="container">
				<h2>Edit PRODUK</h2>
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
										// value sesuai dengan kolom yg ingin di edit (otomatis)
										value={namaProduk}
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
										value={deskripsi}
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
										value={harga}
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
										value={stok}
									/>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<input
										type="submit"
										value="Edit"
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

export default EditProduk;
