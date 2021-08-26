import react from 'react';
import { Component } from 'react';
import '../functional/css/style.css';

class Produk extends Component {
    constructor(props){
        super(props)
        this.state = { //state/status default
            stock: this.props.stock,
            sub:"Beli",
            status:"Tersedia",
            disabled: false,
            disabledk: false,
            disabledt: false,
            jml: 1,
            minbuy: 1
        }
    }

    Kurang = () => {
        this.setState ({
            jml: this.state.jml -1
        })
        if (this.state.jml == this.state.minbuy){
            this.setState ({
                disabledk: true
            })
        } else if (this.state.stock > 1) {
            this.setState ({
                disabledk: false
            })
        }
    }

    Tambah = () => {
        this.setState ({
            jml: this.state.jml +1
        })
        if (this.state.jml == this.state.stock -1){
            this.setState ({
                disabledt: true
            })
        } else if (this.state.stock > 1) {
            this.setState ({
                disabledt: false
            })
        }
    }

    Btnclick = () => {
        this.setState ({ //set state/status sebagai respon
            stock: this.state.stock - this.state.jml
        })
        if (this.state.stock <= 1){
            this.setState ({
                status:"Habis",
                disabledd: true
            })
        } else if (this.state.stock > 1) { //kenapa tidak mmau enabled kembali tombolnya?
            this.setState ({
                disabledd: false
            })
        }
    }
    render(){
        return(
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <p>{this.props.harga}</p>
                <p>Stok tersedia: {this.state.stock}</p>
                <p>Status: {this.state.status}</p>
                <div className="jml">
                    <button onClick={this.Kurang} disabled={this.state.disabledk}>-</button>
                    <p>{this.state.jml}</p>
                    <button onClick={this.Tambah} disabled={this.state.disabledt}>+</button>
                </div>
                <button className="btn-onclick" onClick={this.Btnclick} disabled={this.state.disabledd}>Beli</button>
            </div>
        )
    }
}

export default Produk;