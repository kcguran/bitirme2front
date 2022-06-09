import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Urunler } from 'src/app/models/urunler.model';
import { UrunlerService } from 'src/app/services/urunler.service';

declare var $: any;

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.css']
})
export class UrunComponent {

  errorMessage: string= "";
  @Input() urunler: Urunler = new Urunler();
  @Output() save = new EventEmitter<any>();

  constructor(private urunlerService: UrunlerService) { }

  saveUrunler(){
    this.urunlerService.saveUrun(this.urunler).subscribe(data=>{
      this.save.emit(data);
      $('#urunModal').modal('hide');
    },err =>{
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    });
  }

  showUrunModal(){
    $('#urunModal').modal('show');
  }

}
