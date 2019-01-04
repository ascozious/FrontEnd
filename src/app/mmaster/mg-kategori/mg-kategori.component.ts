import { Component, OnInit } from '@angular/core';
import { UserService } from '../../serpis.service';

@Component({
  selector: 'app-mg-kategori',
  templateUrl: './mg-kategori.component.html',
  styleUrls: ['./mg-kategori.component.css'],
  providers: [UserService]
})
export class MgKategoriComponent implements OnInit {
  data: any;
  isi_kode: any;
  isi_nama: any;
  kategori_id: any;
  tombol = 'add';
  displayedColumns: string[] = ['id', 'kode', 'nama', 'opsi'];

  constructor(private userService: UserService) {}

  tambah() {
    const a = {
      kode: this.isi_kode,
      nama: this.isi_nama
    };
    this.regis_kategori(a);
    this.isi_kode = '';
    this.isi_nama = '';
  }

  kembali() {
    this.tombol = 'add';
    this.isi_kode = '';
    this.isi_nama = '';
  }

  hapus(id) {
    this.delete_kategori(id);
  }
  edit(id, asd) {
    this.tombol = 'put';
    for (const char of asd) {
      if (char.kategori_id === id) {
        this.isi_kode = char.kode.toString(),
        this.isi_nama = char.nama.toString();
        break;
      }
    }
    this.kategori_id = id;
  }

  ubah() {
    const a = {
      kode: this.isi_kode,
      nama: this.isi_nama
    };
    this.edit_kategori(this.kategori_id, a);
    this.isi_kode = '';
    this.isi_nama = '';
    this.tombol = 'add';
  }

  regis_kategori(a) {
    this.userService.regis_kategori(a).subscribe(
      (status) => {
        console.log(status);
        this.get_kategori();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  get_kategori() {
    this.userService.get_kategori().subscribe(
      (v) => this.data = v,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  edit_kategori(id, a) {
    this.userService.edit_kategori(id, a).subscribe(
      (status) => {
        console.log(status);
        this.get_kategori();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  delete_kategori(id) {
    return this.userService.delete_kategori(id).subscribe(
      (status) => {
        console.log(status);
        this.get_kategori();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  ngOnInit() {
    this.get_kategori();
  }
}
