import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MAT_DIALOG_DATA,
  MatButtonModule, MatDatepickerModule, MatDialogModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MinventoriComponent } from './minventori/minventori.component';
import { MmasterComponent } from './mmaster/mmaster.component';
import { MkerjaComponent } from './mkerja/mkerja.component';
import { MgKategoriComponent } from './mmaster/mg-kategori/mg-kategori.component';
import { MgUnitComponent } from './mmaster/mg-unit/mg-unit.component';
import { MgMerkComponent } from './mmaster/mg-merk/mg-merk.component';
import { MmLokasiComponent } from './mmaster/mm-lokasi/mm-lokasi.component';
import { MmVendorComponent } from './mmaster/mm-vendor/mm-vendor.component';
import { MmPenggunaComponent } from './mmaster/mm-pengguna/mm-pengguna.component';
import { MmPelangganComponent } from './mmaster/mm-pelanggan/mm-pelanggan.component';
import { MmBarangComponent } from './mmaster/mm-barang/mm-barang.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StockcardComponent } from './minventori/stockcard/stockcard.component';
import {DialogOverviewExampleDialog3Component, InvenEditorComponent} from './minventori/inven-editor/inven-editor.component';
import { InvenListComponent } from './minventori/inven-list/inven-list.component';
import { RoEditorComponent } from './mkerja/ro-editor/ro-editor.component';
import { RoListComponent } from './mkerja/ro-list/ro-list.component';
import { RentFromOrderComponent } from './mkerja/rent-from-order/rent-from-order.component';
import {RListComponent} from './mkerja/r-list/r-list.component';
import {REditorComponent} from './mkerja/r-editor/r-editor.component';
import {DialogOverviewExampleDialogComponent, TesComponent} from './mmaster/tes/tes.component';

const ROUTING = [
  {
    path: '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinventoriComponent,
    MmasterComponent,
    MkerjaComponent,
    MgKategoriComponent,
    MgUnitComponent,
    MgMerkComponent,
    MmLokasiComponent,
    MmVendorComponent,
    MmPenggunaComponent,
    MmPelangganComponent,
    MmBarangComponent,
    StockcardComponent,
    RListComponent,
    REditorComponent,
    RoEditorComponent,
    RoListComponent,
    RentFromOrderComponent,
    InvenEditorComponent,
    InvenListComponent,
    TesComponent,
    DialogOverviewExampleDialogComponent,
    DialogOverviewExampleDialog3Component
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTING),
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
     {
      provide: MAT_DIALOG_DATA, // providing untuk data inject ke dialog
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }
  ],
  exports: [DialogOverviewExampleDialogComponent],
  entryComponents: [DialogOverviewExampleDialogComponent, DialogOverviewExampleDialog3Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
