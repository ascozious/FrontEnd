import {Component, OnInit} from '@angular/core';
import {UserService} from '../../serpis.service';

@Component({
  selector: 'app-mm-vendor',
  templateUrl: './mm-vendor.component.html',
  styleUrls: ['./mm-vendor.component.css'],
  providers: [UserService]
})
export class MmVendorComponent implements OnInit {
  data: any;
  isi_nama: any;
  isi_alamat: any;
  vendor_id: any;
  tombol = 'add';
  displayedColumns: string[] = ['id', 'nama', 'alamat', 'opsi'];

  constructor(private userService: UserService) {
  }

  tambah() {
    const a = {
      nama: this.isi_nama,
      alamat: this.isi_alamat
    };
    this.regis_vendor(a);
    this.isi_nama = '';
    this.isi_alamat = '';
  }

  kembali() {
    this.tombol = 'add';
    this.isi_nama = '';
    this.isi_alamat = '';
  }

  hapus(id) {
    this.delete_vendor(id);
  }

  edit(id, asd) {
    this.tombol = 'put';
    for (const char of asd) {
      if (char.vendor_id === id) {
        this.isi_nama = char.nama.toString(),
          this.isi_alamat = char.alamat.toString();
        break;
      }
    }
    this.vendor_id = id;
  }

  ubah() {
    const a = {
      nama: this.isi_nama,
      alamat: this.isi_alamat
    };
    this.edit_vendor(this.vendor_id, a);
    this.isi_nama = '';
    this.isi_alamat = '';
    this.tombol = 'add';
  }

  regis_vendor(a) {
    this.userService.regis_vendor(a).subscribe(
      (status) => {
        console.log(status);
        this.get_vendor();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  get_vendor() {
    this.userService.get_vendor().subscribe(
      (v) => this.data = v,
      (error1) => console.error('request anda error : ', error1),
      () => {
      }
    );
  }

  edit_vendor(id, a) {
    this.userService.edit_vendor(id, a).subscribe(
      (status) => {
        console.log(status);
        this.get_vendor();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  delete_vendor(id) {
    return this.userService.delete_vendor(id).subscribe(
      (status) => {
        console.log(status);
        this.get_vendor();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  ngOnInit() {
    this.get_vendor();
  }

}
