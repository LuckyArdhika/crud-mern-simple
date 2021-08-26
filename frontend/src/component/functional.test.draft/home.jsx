import react from "react";
import Daftarsiswa from "./daftarsiswa";
import Produk from "../class/produk";
import Keterangan from "./keterangan";

const Home = () => {
    return (
        <div className="home">
            <Keterangan/>
        <div className="daftar">
            <Daftarsiswa nama="lucky" umur="16 tahun" alamat="josari"/>
            <Daftarsiswa nama="lacky" umur="17 tahun" alamat="josara"/>
            <Daftarsiswa nama="locky" umur="18 tahun" alamat="josaro"/>
        </div>
        <Produk stock="10" nama="iPhone XNXX" harga="Rp 99.000,-"/>
        </div>
        )
}

export default Home;