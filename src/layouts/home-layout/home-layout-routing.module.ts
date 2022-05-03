import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLayoutComponent} from "./home-layout.component";

const routes: Routes = [
    {
        path: '', component: HomeLayoutComponent, children: [
            {
                path: '',
                loadChildren: () => import('src/pages/home/home.module')
                    .then(mod => mod.HomeModule),
                pathMatch: 'full'
            },
            {path: '**', redirectTo: '/'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeLayoutRoutingModule {
}
