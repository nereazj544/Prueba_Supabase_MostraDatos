import { Component, inject } from '@angular/core';
import { ShowService } from '../../shared/show.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent {
  private _showService = inject(ShowService);

  id: string = '';
  username: string = '';
  imagen_perfil: string = '';
  banner: string = '';
  presentacion: string = '';
  genero: boolean = false;
  location: string = '';

  async ngOnInit() {
    const { data, error } = await this._showService.getUserProfileById(this.id);
    if (error) {
      console.error('Error fetching user profile:', error);
      return;
    }
    console.log('User profile data:', data);
    this.id = data.id;
    this.username = data.username;
    this.imagen_perfil = data.imagen_perfil;
    this.banner = data.banner;
    this.presentacion = data.presentacion;
    this.genero = data.genero;
    this.location = data.location;
  }


}
