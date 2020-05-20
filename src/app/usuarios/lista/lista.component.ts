import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  usuarios: usuario[] = [];
  loading: boolean;
  error: any;
  constructor(public store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    } );

    this.store.dispatch( cargarUsuarios() )
  }

}
