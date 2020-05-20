import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { usuario } from 'src/app/models/usuario.model';

export interface usuarioState{
    id: string,
    user: usuario,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuarioInitialState: usuarioState = {
    id:null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,
    on( cargarUsuario, ( state, { id }) => ({ 
        ...state, 
        loading: true,
        id: id
    })),

    on( cargarUsuarioSuccess, ( state, { usuario } ) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user: { ...usuario }
    })),

    on( cargarUsuarioError, ( state, { payload } ) => ({ 
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

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}