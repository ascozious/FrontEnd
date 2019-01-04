import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-tes',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.css']
})
export class TesComponent implements OnInit {

  formUtama: FormGroup;

  constructor(public dialog: MatDialog) {
  }

  getFormArray(formArrayName: string, parentFormGroup: FormGroup) {
    return (<FormArray>parentFormGroup.controls[formArrayName]);
  }

  getFormArrays(param: string, fg: FormGroup) {
    return (<FormArray>fg.get(param)).controls;
  }

  ngOnInit() {
    this.formUtama = headerForm();
  }

  openDialog(jumlahRow) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
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
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  jumlahRow;
  dataRow: any[] = [];

  formGroupDialog: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
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



