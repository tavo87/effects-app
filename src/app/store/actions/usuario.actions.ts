import { createAction, props } from '@ngrx/store';
import { usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuarios] Cargar Usuarios',
    props<{ id: string }>()
    );

export const cargarUsuarioSuccess = createAction(
    '[Usuarios] Cargar Usuarios Success',
    props<{ usuario: usuario }>()
);

export const cargarUsuarioError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{ payload: any }>()
);