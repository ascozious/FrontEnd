import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../serpis.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-inven-editor',
  templateUrl: './inven-editor.component.html',
  styleUrls: ['./inven-editor.component.css'],
  providers: [UserService]
})
export class InvenEditorComponent implements OnInit {
  data_tabel: any[] = [];
  data_lokasi: any;
  data_supplier: any;
  data_kategori: any;
  data_satuan: any;
  data_barang: any;
  isi_barang: any;
  satuan: any;
  kategori: any;
  lokasi: any;
  supplier: any;
  alamat: any;
  no_doc: any;
  pengguna: any;
  cat_doc: any;
  barcode: any;
  id_to_satuan: any;
  id_to_kategori: any;
  jumlah: any;
  displayedColumns: string[] = ['no', 'barcode', 'nama', 'qty', 'sn_lama', 'sn_baru'];
  i = 1;
  formUtama: FormGroup;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  getFormArray(formArrayName: string, parentFormGroup: FormGroup) {
    return (<FormArray>parentFormGroup.controls[formArrayName]);
  }

  getFormArrays(param: string, fg: FormGroup) {
    return (<FormArray>fg.get(param)).controls;
  }

  tambah_sn(jumlahRow) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog3Component, {
      width: '500px',
      data: {jumlahRow: jumlahRow},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== undefined) {
        const data: any[] = result['data'];
        console.log(data);

        const fa = this.getFormArray('dataDetail', this.formUtama);
        if (fa.length > 0) {
          while (fa.length > 0) {
            fa.removeAt(0);
          }
        }

        for (const d of data) {
          const detail: FormGroup = <FormGroup>detailForm();
          detail.patchValue(d);
          this.addDetail(detail, fa);
        }
      }
    });
  }

  addDetail(fb: FormGroup, fa: FormArray) {
    console.log(fa.length);
    fa.push(fb);
  }

  tambah_isi_tabel() {
    this.data_tabel = [
      ...this.data_tabel,
      {
        no: this.i,
        barcode: this.barcode,
        nama: this.isi_barang,
        qty: this.jumlah,
        sn_lama: '',
        sn_baru: '',
      }
    ];
    this.i++;
  }

  onSupplierNameChanged(name) {
    for (const tipe of this.data_supplier) {
      if (tipe.nama === name) {
        this.alamat = tipe.alamat;
        break;
      }
    }
  }
  onBarangNameChanged(name) {
    for (const tipe of this.data_barang) {
      if (tipe.nama === name) {
        this.barcode = tipe.barcode;
        this.kategori = tipe.isi_kategori;
        this.satuan = tipe.satuan;
        break;
      }
    }
  }
  get_isilokasi() {
    this.userService.get_lokasi().subscribe(
      (z) => this.data_lokasi = z,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }
  get_isivendor() {
    this.userService.get_vendor().subscribe(
      (z) => this.data_supplier = z,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }
  get_isikategori() {
    this.userService.get_kategori().subscribe(
      (z) => this.data_kategori = z,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }
  get_isibarang() {
    this.userService.get_barang().subscribe(
      (z) => this.data_barang = z,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
  }
  get_isisatuan() {
    this.userService.get_unit().subscribe(
      (z) => this.data_satuan = z,
      (error1) => console.error('request anda error : ', error1),
      () => {}
    );
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
  convertKategori(idk: any) {
    if (this.data_kategori === undefined) {236
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

  ngOnInit() {
    this.get_isilokasi();
    this.get_isivendor();
    this.get_isikategori();
    this.get_isibarang();
    this.get_isisatuan();
    this.formUtama = headerForm();
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog3',
  templateUrl: 'dialog-overview-example-dialog3.html',
})
export class DialogOverviewExampleDialog3Component implements OnInit {

  jumlahRow;
  dataRow: any[] = [];

  formGroupDialog: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog3Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.jumlahRow = data.jumlahRow;
  }

  ok(values: any) {
    this.dialogRef.close({data: values.dataDetail});
  }

  getFormArray(formArrayName: string, parentFormGroup: FormGroup) {
    return (<FormArray>parentFormGroup.controls[formArrayName]);
  }

  getFormArrays(param: string, fg: FormGroup) {
    return (<FormArray>fg.get(param)).controls;
  }

  ngOnInit(): void {
    this.formGroupDialog = headerForm();
    for (let i = 0; i < this.jumlahRow; i++) {
      this.addDetail(detailForm(), this.getFormArray('dataDetail', this.formGroupDialog));
    }
  }

  addDetail(fb: FormGroup, fa: FormArray) {
    fa.push(fb);
  }
}

export class Header {
  jumlah: number;
}

export class Detail {
  serialAsli: string;
  serialBaru: string;
}

const detailInit = {
  serialAsli: '',
  serialBaru: ''
};

const headerInit = {
  jumlah: 0
};


export function headerForm(init = headerInit) {
  return new FormBuilder().group({
    jumlah: {value: init.jumlah, disabled: false},
    dataDetail: new FormBuilder().array([])
  });
}

export function detailForm(init = detailInit) {
  return new FormBuilder().group({
    serialAsli: {value: init.serialAsli, disabled: false},
    serialBaru: {value: init.serialBaru, disabled: false},
  });
}
