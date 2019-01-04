import {Component, OnInit} from '@angular/core';
import {UserService} from '../../serpis.service';

@Component({
  selector: 'app-mm-barang',
  templateUrl: './mm-barang.component.html',
  styleUrls: ['./mm-barang.component.css'],
  providers: [UserService]
})
export class MmBarangComponent implements OnInit {
  data: any;
  data_kategori: any;
  data_satuan: any;
  data_merk: any;
  barang_id: any;
  kategori_barang: any;
  kode_barang: any;
  barcode: any;
  nama: any;
  alias: any;
  satuan_barang: any;
  merk_barang: any;
  harga1: any;
  harga2: any;
  harga3: any;
  tombol = 'add';
  id_kategori: any;
  id_satuan: any;
  id_merk: any;
  id_to_kategori: any;
  id_to_satuan: any;
  id_to_merk: any;
  displayedColumns: string[] = ['id', 'kategori', 'kode', 'barcode', 'nama', 'alias', 'satuan', 'merk', 'harga1', 'harga2', 'harga3', 'opsi'];

  constructor(private userService: UserService) {
  }

  clear() {
    this.kategori_barang = '';
    this.kode_barang = '';
    this.barcode = '';
    this.nama = '';
    this.alias = '';
    this.satuan_barang = '';
    this.merk_barang = '';
    this.harga1 = '';
    this.harga2 = '';
    this.harga3 = '';
  }

  tambah() {
    const a = {
      kode: this.kode_barang,
      barcode: this.barcode,
      nama: this.nama,
      alias: this.alias,
      harga1: this.harga1,
      harga2: this.harga2,
      harga3: this.harga3,
      isi_kategori: this.id_kategori,
      satuan: this.id_satuan,
      merk: this.id_merk
    };
    this.regis_barang(a);
    this.clear();
  }

  kembali() {
    this.tombol = 'add';
    this.clear();
  }

  hapus(id) {
    this.delete_barang(id);
  }

  edit(id, asd) {
    this.tombol = 'put';
    for (const char of asd) {
      if (char.barang_id === id) {
          this.kode_barang = char.kode,
          this.barcode = char.barcode,
          this.nama = char.nama,
          this.alias = char.alias,
          this.harga1 = char.harga1,
          this.harga2 = char.harga2,
          this.harga3 = char.harga3,
          this.kategori_barang = this.convertKategori(char.isi_kategori),
          this.satuan_barang = this.convertSatuan(char.satuan),
          this.merk_barang = this.convertMerk(char.merk);
          break;
      }
    }
    this.barang_id = id;
  }

  ubah() {
    const a = {
      kode: this.kode_barang,
      barcode: this.barcode,
      nama: this.nama,
      alias: this.alias,
      harga1: this.harga1,
      harga2: this.harga2,
      harga3: this.harga3,
      isi_kategori: this.id_kategori,
      satuan: this.id_satuan,
      merk: this.id_merk
    };
    this.edit_barang(this.barang_id, a);
    this.clear();
    this.tombol = 'add';
  }

  onTipeNameChanged(name) {
    for (const tipe of this.data_kategori) {
      if (tipe.nama === name) {
        this.kode_barang = tipe.kode;
        this.id_kategori = tipe.kategori_id;
        break;
      }
    }
  }

  onTipeUnitChanged(unit) {
    for (const tipe of this.data_satuan) {
      if (tipe.satuan === unit) {
        this.id_satuan = tipe.unit_id;
        break;
      }
    }
  }

  onTipeMerkChanged(merk) {
    for (const tipe of this.data_merk) {
      if (tipe.merk === merk) {
        this.id_merk = tipe.merk_id;
        break;
      }
    }
  }

  convertKategori(idk: any) {
    if (this.data_kategori === undefined) {
      return 0;
    }
    for (const tipe of this.data_kategori) {
      if (tipe.kategori_id === idk) {
        this.id_to_kategori = tipe.nama;
        break;
      }
    }
    idk = this.id_to_kategori;
    return idk;
  }

  convertSatuan(idk: any) {
    if (this.data_satuan === undefined) {
      return 0;
    }
    for (const tipe of this.data_satuan) {
      if (tipe.unit_id === idk) {
        this.id_to_satuan = tipe.satuan;
        break;
      }
    }
    idk = this.id_to_satuan;
    return idk;
  }

  convertMerk(idk: any) {
    if (this.data_merk === undefined) {
      return 0;
    }
    for (const tipe of this.data_merk) {
      if (tipe.merk_id === idk) {
        this.id_to_merk = tipe.merk;
        break;
      }
    }
    idk = this.id_to_merk;
    return idk;
  }

  get_isikategori() {
    this.userService.get_kategori().subscribe(
      (z) => this.data_kategori = z,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  get_isisatuan() {
    this.userService.get_unit().subscribe(
      (x) => this.data_satuan = x,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  get_isimerk() {
    this.userService.get_merk().subscribe(
      (c) => this.data_merk = c,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  get_barang() {
    this.userService.get_barang().subscribe(
      (v) => this.data = v,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }

  regis_barang(a) {
    this.userService.regis_barang(a).subscribe(
      (status) => {
        console.log(status);
        this.get_barang();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  edit_barang(id, a) {
    this.userService.edit_barang(id, a).subscribe(
      (status) => {
        console.log(status);
        this.get_barang();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  delete_barang(id) {
    return this.userService.delete_barang(id).subscribe(
      (status) => {
        console.log(status);
        this.get_barang();
      },
      (e) => console.log('Gagal : ', e),
      () => console.log('Berhasil')
    );
  }

  ngOnInit() {
    this.get_barang();
    this.get_isikategori();
    this.get_isisatuan();
    this.get_isimerk();
  }
}
