import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { usuario } from 'src/app/models/usuario.model';

export interface usuariosState{
    users: usuario[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: usuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(usuariosInitialState,
    on( cargarUsuarios, state => ({ ...state, loading: true })),

    on( cargarUsuariosSuccess, ( state, { usuarios } ) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: { ...usuarios }
    })),

    on( cargarUsuariosError, ( state, { payload } ) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.url,
            message: payload.message
        }
    }))
);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}