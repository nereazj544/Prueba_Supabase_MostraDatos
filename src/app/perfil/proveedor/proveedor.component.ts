import { Component, inject, OnInit } from '@angular/core';
import { ShowService } from '../../shared/show.service';
import { SupabaseService } from '../../shared/supabase.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent implements OnInit {
  id = '';
  username = '';
  imagen_perfil = '';
  banner = '';
  presentacion = '';
  genero = '';
  location = '';

  constructor(
    private showService: ShowService,
    private supabaseService: SupabaseService
  ) {}

  async ngOnInit() {
    const userId = await this.supabaseService.getCurrentUserId();
    if (!userId) {
      console.error('No hay usuario autenticado');
      return;
    }
    this.id = userId;
    const { data, error } = await this.showService.getUserProfileById(this.id);
    if (error) {
      console.error('Error al obtener perfil:', error);
      return;
    }
    this.username = data.username;
    this.imagen_perfil = data.imagen_perfil;
    this.banner = data.banner;
    this.presentacion = data.presentacion;
    this.genero = data.genero;
    this.location = data.location;
  }
}
