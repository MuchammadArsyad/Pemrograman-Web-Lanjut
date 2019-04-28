import { Component, OnInit } from '@angular/core';
import { mahasiswa } from './../mahasiswa.interface';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  mahasiswa:FormGroup;

  constructor(private mhs:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  //method untuk generate form
  createForm(){
    this.mahasiswa=this.mhs.group({ 
      nama_mhs:'',
      pendidikan:this.mhs.group({
        nama_jurusan:'',
        nama_prodi:''
      })
    })
  }

  onSubmit(f:FormGroup){
    console.log("hasil dari input adalah");
    console.log(f.value);
  }
}


