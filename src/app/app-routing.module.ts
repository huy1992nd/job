import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './common/auth.guard';
import {AuthPostGuard} from './common/authPost.guard';
import {TranslateModule, TranslateService, TranslatePipe, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {LandingComponent} from './components/landing/landing.component';
import {DashboardComponent} from './components/landing/dashboard/dashboard.component';
import {ProductComponent} from './components/landing/product/product.component'
import {IntroduceComponent} from './components/landing/introduce/introduce.component'


const routes: Routes = [
    {
		path: '',
        component: LandingComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'introduce',
                component: IntroduceComponent
            },
            {
                path: 'product',
                component: ProductComponent
            },
        ],
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes), TranslateModule],
    exports: [RouterModule, TranslatePipe],
    providers: [TranslateModule, TranslateService]
})
export class AppRoutingModule {
}
