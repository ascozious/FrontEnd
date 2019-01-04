import { Component, OnInit } from '@angular/core';
import {UserService} from '../../serpis.service';

export interface Lokasi {
  value: string;
}

@Component({
  selector: 'app-mm-lokasi',
  templateUrl: './mm-lokasi.component.html',
  styleUrls: ['./mm-lokasi.component.css'],
  providers: [UserService]
})
export class MmLokasiComponent implements OnInit {

  data: any;
  isi_tipe: any;
  isi_kode: any;
  isi_nama: any;
  location_id: any;
  tombol = 'add';
  displayedColumns: string[] = ['id', 'tipe', 'kode', 'nama', 'opsi'];

  tipe_lokasi: Lokasi[] = [
    {value: 'Head Office'},
    {value: 'Warehouse'}
  ];

  constructor(private userService: UserService) {}

  tambah() {
    const a = {
      type: this.isi_tipe,
      code: this.isi_kode,
      name: this.isi_nama
    };
    this.regis_lokasi(a);
    this.isi_kode = '';
    this.isi_nama = '';
  }

  kembali() {
    this.tombol = 'add';
    this.isi_kode = '';
    this.isi_nama = '';
  }

  hapus(id) {
    this.delete_lokasi(id);
  }
  edit(id, asd) {
    this.tombol = 'put';
    for (const char of asd) {
      if (char.location_id === id) {
        this.isi_tipe = char.type,
        this.isi_kode = char.code.toString(),
        this.isi_nama = char.name.toString();
        break;
      }
    }
    this.location_id = id;
  }

  ubah() {
    const a = {
      type: this.isi_tipe,
      code: this.isi_kode,
      name: this.isi_nama
    };
    this.edit_lokasi(this.location_id, a);
    this.isi_kode = '';
    this.isi_nama = '';
    this.tombol = 'add';
  }

  regis_lokasi(a) {
    this.userService.regis_lokasi(a).subscribe(
      (status) => {
        console.log(status);
        this.get_lokasi();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  get_lokasi() {
    this.userService.get_lokasi().subscribe(
      (v) => this.data = v,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  edit_lokasi(id, a) {
    this.userService.edit_lokasi(id, a).subscribe(
      (status) => {
        console.log(status);
        this.get_lokasi();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  delete_lokasi(id) {
    return this.userService.delete_lokasi(id).subscribe(
      (status) => {
        console.log(status);
        this.get_lokasi();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  ngOnInit() {
    this.get_lokasi();
  }

}
