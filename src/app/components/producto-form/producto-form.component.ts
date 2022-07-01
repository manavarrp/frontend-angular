import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params =>{
      let id: number = params['id'];
      if(id){
        this.productoService.obtenerProducto(id)
            .subscribe(response => this.producto = response);
      }
    })
  }

  crearProducto(){
    this.productoService.crearProductos(this.producto)
        .subscribe(response => console.log("EXITO"))
  }

  

  actualizarProducto(){
    this.productoService.acutalizarProducto(this.producto)
        .subscribe(response => console.log("Actualziado"))
  }

}
