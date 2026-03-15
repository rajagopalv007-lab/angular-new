import { Routes } from '@angular/router';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ParentComponent } from './parentchild/parent.component';
import { Blog } from './blogs/blogs.components';
import { OptimizedImageDemo } from './blogs/optimizedimagedemo.component';
import { BasicForm } from './forms/basicform.component';
import { ReactiveForm } from './forms/reactiveform.component';
import { SignalsDemo } from './signals/signalsdemo.component';
import { MaterialComponentDemo } from './material/materialdemo.component';
import { ComponentOutletDemo2Component } from './componentoutlet/componentoutletdemo2.component';
import { ComponentWithFragment } from './templateref/TemplateDemo.component';
import { ComponentWithFragmentTs } from './templateref/ViewContainerDemo.component';


export const routes: Routes = [
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'blogs', component: Blog },
    { path: 'optimizedimage', component: OptimizedImageDemo },
    { path: 'basicform', component: BasicForm },
    { path: 'reactiveform', component: ReactiveForm },
    { path: 'signalsdemo', component: SignalsDemo },
    { path: 'materialdemo', component: MaterialComponentDemo },
    { path: 'dynamiccomponent', component: ComponentOutletDemo2Component },
    { path: 'templateref', component: ComponentWithFragment },
    { path: 'templaterefTs', component: ComponentWithFragmentTs },
    { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
];
