import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'perfil-usuario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule)
          }
        ]
      },
      {
        path: 'agendar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/agendar/agendar.module').then(m => m.AgendarPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'list-usuario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-usuario/list-usuario.module').then(m => m.ListUsuarioPageModule)
          }
        ]
      },
      {
        path: 'add-usuario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
          }
        ]
      },
      {
        path: 'add-usuario/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
          }
        ]
      },
      {
        path: 'perfilUsuario/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
