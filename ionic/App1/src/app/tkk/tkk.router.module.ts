import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TkkPage } from './tkk.page';

const routes: Routes = [
  {
    path: 'tkk',
    component: TkkPage,
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
        path: 'tab1/detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../to1-detail/to1-detail.module').then(m => m.To1DetailPageModule)
          }
        ]
      },
      {
        path: 'tab1/detail2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tkk1-detail/tkk1-detail.module').then(m => m.Tkk1DetailPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
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
export class TkkPageRoutingModule {}
