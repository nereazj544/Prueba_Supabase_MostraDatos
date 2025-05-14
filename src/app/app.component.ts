import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProveedorComponent } from "./perfil/proveedor/proveedor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prueba_Supabase_MostraDatos';
}
