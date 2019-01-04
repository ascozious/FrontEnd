import {Component, OnInit} from '@angular/core';
import {UserService} from '../../serpis.service';

@Component({
  selector: 'app-mm-pengguna',
  templateUrl: './mm-pengguna.component.html',
  styleUrls: ['./mm-pengguna.component.css'],
  providers: [UserService]
})
export class MmPenggunaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nama'];

  data: any[] = [];
  data_baru: any;
  isi: any;
  isi1: any;
  isi2: any;

  constructor(private userService: UserService) {
  }

  applyFilter(filterValue: string) {
    this.data_baru.filter = filterValue.trim().toLowerCase();
  }

  tambah_isi_tabel() {
    this.data = [
      ...this.data,
      {
        id: this.isi1,
        nama: this.isi2,
      }
    ];
  }
  clear(index) {
    this.data.splice(index, 1);
    this.data = [
      ...this.data
    ];
  }

  clearAll() {
    this.data = [];
  }

  get_merk() {
    this.userService.get_merk().subscribe(
      (v) => this.data = <any[]>v,
      (error1) => console.error('request anda error : ', error1),
      () => {
      }
    );
    this.isi = this.data.toString();
  }

  ngOnInit() {
    // this.get_merk();
  }
}
