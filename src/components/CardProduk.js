import React from "react";
import { Link } from "react-router-dom";
import API from "../axios/Api";

// alert react + stylingnya
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function CardProduk({ produk, refresh }) {
	//hapus produk axios
	async function deleteProduk() {
		await API.delete("deleteProduk.php?id=" + produk.id);

		// akan memanggil yang DaftarProduk.js
		return refresh();
	}

	//function alert confirm delete
	function deleteConfirm() {
		confirmAlert({
			title: "Toko Komputer",
			message:
				"Apakah anda ingin menghapus produk " + produk.nama_produk + " ?",
			buttons: [
				{
					label: "Delete",
					onClick: () => deleteProduk()
				},
				{
					label: "Jangan",
					onClick: () => {}
				}
			]
		});
	}

	return (
		<div className="col-md-3 card" style={{ margin: 5 }}>
			<h3>{produk.nama_produk}</h3>
			<small>{produk.deskripsi}</small>
			<p>Harga : Rp. {produk.harga},-</p>
			<p>Stok : {produk.stok}</p>
			<hr />
			{/* masukkan id agar tau id mana yang diedit */}
			<Link to={"/edit/" + produk.id}>
				<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
			</Link>

			{/* function delete confirm */}
			<i className="fa fa-trash" aria-hidden="true" onClick={deleteConfirm}></i>
			<br />
		</div>
	);
}

export default CardProduk;
