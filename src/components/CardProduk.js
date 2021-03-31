import React from "react";

function CardProduk({ produk }) {
	return (
		<div className="col-md-3 card" style={{ margin: 5 }}>
			<h3>{produk.nama_produk}</h3>
			<small>{produk.deskripsi}</small>
			<p>Harga : Rp. {produk.harga},-</p>
			<p>Stok : {produk.stok}</p>
		</div>
	);
}

export default CardProduk;
