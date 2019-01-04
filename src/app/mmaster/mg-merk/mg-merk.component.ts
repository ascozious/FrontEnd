import { Component, OnInit } from '@angular/core';
import {UserService} from '../../serpis.service';

@Component({
  selector: 'app-mg-merk',
  templateUrl: './mg-merk.component.html',
  styleUrls: ['./mg-merk.component.css'],
  providers: [UserService]
})
export class MgMerkComponent implements OnInit {

  data: any;
  isi_merk: any;
  merk_id: any;
  tombol = 'add';
  displayedColumns: string[] = ['id', 'nama', 'opsi'];

  constructor(private userService: UserService) { }

  tambah() {
    const a = {
      merk: this.isi_merk
    };
    this.regis_merk(a);
    this.isi_merk = '';
  }

  kembali() {
    this.tombol = 'add';
    this.isi_merk = '';
  }

  hapus(id) {
    this.delete_merk(id);
  }
  edit(id, asd) {
    this.tombol = 'put';
    this.isi_merk = asd.toString();
    this.merk_id = id;
  }

  ubah() {
    const a = {
      merk: this.isi_merk
    };
    this.edit_merk(this.merk_id, a);
    this.isi_merk = '';
    this.tombol = 'add';
  }

  regis_merk(a) {
    this.userService.regis_merk(a).subscribe(
      (status) => {
        console.log(status);
        this.get_merk();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  get_merk() {
    this.userService.get_merk().subscribe(
      (v) => this.data = v,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  edit_merk(id, a) {
    this.userService.edit_merk(id, a).subscribe(
      (status) => {
        console.log(status);
        this.get_merk();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  delete_merk(id) {
    return this.userService.delete_merk(id).subscribe(
      (status) => {
        console.log(status);
        this.get_merk();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  ngOnInit() {
    this.get_merk();
  }
}
