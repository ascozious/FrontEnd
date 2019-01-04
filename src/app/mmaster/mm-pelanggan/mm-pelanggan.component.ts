import {Component, OnInit} from '@angular/core';
import {UserService} from '../../serpis.service';

export interface Pelanggan {
  value: string;
}

@Component({
  selector: 'app-mm-pelanggan',
  templateUrl: './mm-pelanggan.component.html',
  styleUrls: ['./mm-pelanggan.component.css'],
  providers: [UserService]
})
export class MmPelangganComponent implements OnInit {
  data: any;
  pelanggan_id: any;
  isi_tipe: any;
  isi_nama: any;
  isi_alamat: any;
  isi_pos: any;
  isi_telpon: any;
  isi_fax: any;
  isi_hp: any;
  isi_nama_pj: any;
  isi_hp_pj: any;
  tombol = 'add';
  displayedColumns: string[] = ['id', 'tipe', 'nama', 'alamat', 'kode_pos', 'telepon', 'fax', 'hp', 'nama_pj', 'hp_pj', 'opsi'];

  tipe_pelanggan: Pelanggan[] = [
    {value: 'PT'},
    {value: 'CV'},
    {value: 'RS'},
    {value: 'RSUD'},
    {value: 'RSIA'},
    {value: 'Personal'}
  ];

  constructor(private userService: UserService) {
  }

  clear() {
    this.isi_tipe = '';
    this.isi_nama = '';
    this.isi_alamat = '';
    this.isi_pos = '';
    this.isi_telpon = '';
    this.isi_fax = '';
    this.isi_hp = '';
    this.isi_nama_pj = '';
    this.isi_hp_pj = '';
  }

  tambah() {
    const a = {
      tipe: this.isi_tipe,
      nama: this.isi_nama,
      alamat: this.isi_alamat,
      kode_pos: this.isi_pos,
      telepon: this.isi_telpon,
      fax: this.isi_fax,
      hp: this.isi_hp,
      nama_pj: this.isi_nama_pj,
      hp_pj: this.isi_hp_pj
    };
    this.regis_pelanggan(a);
    this.clear();
  }

  kembali() {
    this.tombol = 'add';
    this.clear();
  }

  hapus(id) {
    this.delete_pelanggan(id);
  }

  edit(id, asd) {
    this.tombol = 'put';
    for (const char of asd) {
      if (char.pelanggan_id === id) {
          this.isi_tipe = char.tipe,
          this.isi_nama = char.nama,
          this.isi_alamat = char.alamat,
          this.isi_pos = char.kode_pos,
          this.isi_telpon = char.telepon,
          this.isi_fax = char.fax,
          this.isi_hp = char.hp,
          this.isi_nama_pj = char.nama_pj,
          this.isi_hp_pj = char.hp_pj;
          break;
      }
    }
    this.pelanggan_id = id;
  }

  ubah() {
    const a = {
      tipe: this.isi_tipe,
      nama: this.isi_nama,
      alamat: this.isi_alamat,
      kode_pos: this.isi_pos,
      telepon: this.isi_telpon,
      fax: this.isi_fax,
      hp: this.isi_hp,
      nama_pj: this.isi_nama_pj,
      hp_pj: this.isi_hp_pj
    };
    this.edit_pelanggan(this.pelanggan_id, a);
    this.clear();
    this.tombol = 'add';
  }

  regis_pelanggan(a) {
    this.userService.regis_pelanggan(a).subscribe(
      (status) => {
        console.log(status);
        this.get_pelanggan();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  get_pelanggan() {
    this.userService.get_pelanggan().subscribe(
      (v) => this.data = v,
      (error1) => console.error('request anda error : ', error1),
      () => {
      }
    );
  }

  edit_pelanggan(id, a) {
    this.userService.edit_pelanggan(id, a).subscribe(
      (status) => {
        console.log(status);
        this.get_pelanggan();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  delete_pelanggan(id) {
    return this.userService.delete_pelanggan(id).subscribe(
      (status) => {
        console.log(status);
        this.get_pelanggan();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  ngOnInit() {
    this.get_pelanggan();
  }

}
