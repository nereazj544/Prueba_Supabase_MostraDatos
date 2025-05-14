import { Routes } from '@angular/router';
import { ProveedorComponent } from './perfil/proveedor/proveedor.component';
import { AuthLogInComponent } from './src/app/auth/auth-login/auth-login.component';

export const routes: Routes = [
    { path: 'perfil/proveedor', component: ProveedorComponent },
    { path: 'login', component: AuthLogInComponent },
];
