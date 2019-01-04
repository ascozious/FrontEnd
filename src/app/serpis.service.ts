import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  regis_kategori(kategori): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/master_kategori/', kategori);
  }

  get_kategori() {
    return this.http.get('http://127.0.0.1:8000/api/master_kategori/');
  }

  edit_kategori(id_kategori, kategori) {
    return this.http.put('http://127.0.0.1:8000/api/master_kategori/' + id_kategori + '/', kategori);
  }

  delete_kategori(id_kategori) {
    return this.http.delete('http://127.0.0.1:8000/api/master_kategori/' + id_kategori + '/');
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  regis_unit(unit) {
    return this.http.post('http://127.0.0.1:8000/api/master_unit/', unit);
  }

  get_unit() {
    return this.http.get('http://127.0.0.1:8000/api/master_unit/');
  }

  edit_unit(unit_id, unit) {
    return this.http.put('http://127.0.0.1:8000/api/master_unit/' + unit_id + '/', unit);
  }

  delete_unit(id) {
    return this.http.delete('http://127.0.0.1:8000/api/master_unit/' + id + '/');
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  regis_merk(merk) {
    return this.http.post('http://127.0.0.1:8000/api/master_merk/', merk);
  }

  get_merk() {
    return this.http.get('http://127.0.0.1:8000/api/master_merk/');
  }

  edit_merk(merk_id, merk) {
    return this.http.put('http://127.0.0.1:8000/api/master_merk/' + merk_id + '/', merk);
  }

  delete_merk(merk_id) {
    return this.http.delete('http://127.0.0.1:8000/api/master_merk/' + merk_id + '/');
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  regis_lokasi(lokasi) {
    return this.http.post('http://127.0.0.1:8000/api/master_location/', lokasi);
  }

  get_lokasi() {
    return this.http.get('http://127.0.0.1:8000/api/master_location/');
  }

  edit_lokasi(lokasi_id, lokasi) {
    return this.http.put('http://127.0.0.1:8000/api/master_location/' + lokasi_id + '/', lokasi);
  }

  delete_lokasi(lokasi_id) {
    return this.http.delete('http://127.0.0.1:8000/api/master_location/' + lokasi_id + '/');
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  regis_vendor(vendor) {
    return this.http.post('http://127.0.0.1:8000/api/master_vendor/', vendor);
  }

  get_vendor() {
    return this.http.get('http://127.0.0.1:8000/api/master_vendor/');
  }

  edit_vendor(vendor_id, vendor) {
    return this.http.put('http://127.0.0.1:8000/api/master_vendor/' + vendor_id + '/', vendor);
  }

  delete_vendor(vendor_id) {
    return this.http.delete('http://127.0.0.1:8000/api/master_vendor/' + vendor_id + '/');
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  regis_pelanggan(pelanggan) {
    return this.http.post('http://127.0.0.1:8000/api/master_pelanggan/', pelanggan);
  }

  get_pelanggan() {
    return this.http.get('http://127.0.0.1:8000/api/master_pelanggan/');
  }

  edit_pelanggan(pelanggan_id, pelanggan) {
    return this.http.put('http://127.0.0.1:8000/api/master_pelanggan/' + pelanggan_id + '/', pelanggan);
  }

  delete_pelanggan(pelanggan_id) {
    return this.http.delete('http://127.0.0.1:8000/api/master_pelanggan/' + pelanggan_id + '/');
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  regis_barang(barang) {
    return this.http.post('http://127.0.0.1:8000/api/master_barang/', barang);
  }

  get_barang() {
    return this.http.get('http://127.0.0.1:8000/api/master_barang/');
  }

  edit_barang(barang_id, barang) {
    return this.http.put('http://127.0.0.1:8000/api/master_barang/' + barang_id + '/', barang);
  }

  delete_barang(barang_id) {
    return this.http.delete('http://127.0.0.1:8000/api/master_barang/' + barang_id + '/');
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
