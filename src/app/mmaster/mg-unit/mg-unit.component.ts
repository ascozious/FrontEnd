import { Component, OnInit } from '@angular/core';
import { UserService } from '../../serpis.service';

@Component({
  selector: 'app-mg-unit',
  templateUrl: './mg-unit.component.html',
  styleUrls: ['./mg-unit.component.css'],
  providers: [UserService]
})
export class MgUnitComponent implements OnInit {
  data: any;
  isi_unit: any;
  unit_id: any;
  tombol = 'add';
  displayedColumns: string[] = ['id', 'nama', 'opsi'];

  constructor(private userService: UserService) { }

  tambah() {
    const a = {
      satuan: this.isi_unit
    };
    this.regis_unit(a);
    this.isi_unit = '';
  }
  kembali() {
    this.tombol = 'add';
    this.isi_unit = '';
  }
  hapus(id) {
    this.delete_unit(id);
  }
  edit(id, asd) {
    this.tombol = 'put';
    this.isi_unit = asd.toString();
    this.unit_id = id;
  }
  ubah() {
    const a = {
      satuan: this.isi_unit
    };
    this.edit_unit(this.unit_id, a);
    this.isi_unit = '';
    this.tombol = 'add';
  }

  regis_unit(a) {
    this.userService.regis_unit(a).subscribe(
      (status) => {
        console.log(status);
        this.get_unit();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  get_unit() {
    this.userService.get_unit().subscribe(
      (v) => this.data = v,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  edit_unit(id, a) {
    this.userService.edit_unit(id, a).subscribe(
      (status) => {
        console.log(status);
        this.get_unit();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  delete_unit(id) {
    return this.userService.delete_unit(id).subscribe(
      (status) => {
        console.log(status);
        this.get_unit();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  ngOnInit() {
    this.get_unit();
  }
}
