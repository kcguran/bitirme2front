import { Component, OnInit, ViewChild } from '@angular/core';
import { Urunler } from 'src/app/models/urunler.model';
import { UrunlerService } from 'src/app/services/urunler.service';
import { UrunComponent } from '../urun/urun.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  urunListesi: Array<Urunler> = [];
  selectedUrun: Urunler = new Urunler();
  errorMessage: string = '';

  @ViewChild(UrunComponent) child: UrunComponent | undefined;
  constructor(private urunlerService: UrunlerService) { }

  ngOnInit(): void {
    this.urunlerService.getAllUrunler().subscribe(data =>{
      this.urunListesi = data;
    });
  }

  createUrunRequest(){
    this.selectedUrun = new Urunler();
    this.child?.showUrunModal();
  }

  editUrunRequest(item: Urunler) {
    this.selectedUrun = Object.assign({}, item);
    this.child?.showUrunModal();
  }

  saveUrunkWatcher(urunler: Urunler) {
    let itemIndex = this.urunListesi.findIndex(item => item.id === urunler.id);
    if (itemIndex !== -1) {
      this.urunListesi[itemIndex] = urunler;
    } else {
      this.urunListesi.push(urunler);
    }
    this.urunListesi.push(urunler);
  }

  deleteUrun(item: Urunler, ind: number){
    this.urunlerService.deleteUrun(item).subscribe(data=>{
      this.urunListesi.splice(ind,1);
    }, err =>{
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }
}
