import { Routes } from '@angular/router';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';

export const routes: Routes = [
  {
    path: 'app',
    component: LayoutPageComponent,
    children: [
      {
        path: 'formulario',
        component: FormularioComponent,
        title: 'Fomulario ticket',
      },
      {
        path: 'listado',
        component: ListadoComponent,
        title: 'Listado de tickets',
      },
      { path: '**', redirectTo: 'listado', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];
