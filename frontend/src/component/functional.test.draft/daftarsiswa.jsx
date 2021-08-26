import './css/style.css';

const Daftarsiswa = (props) => {
    return (
        <div className="Daftar">
            <h4>nama: {props.nama}</h4>
            <p>umur: {props.umur}</p>
            <p>alamat: {props.alamat}</p>
        </div>
        )
}

export default Daftarsiswa;