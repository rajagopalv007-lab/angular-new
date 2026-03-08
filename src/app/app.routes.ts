import { Routes } from '@angular/router';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ParentComponent } from './parentchild/parent.component';
import { Blog } from './blogs/blogs.components';
import { OptimizedImageDemo } from './blogs/optimizedimagedemo.component';
import { BasicForm } from './forms/basicform.component';
import { ReactiveForm } from './forms/reactiveform.component';

export const routes: Routes = [
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'blogs', component: Blog },
    { path: 'optimizedimage', component: OptimizedImageDemo },
    { path: 'basicform', component: BasicForm },
    { path: 'reactiveform', component: ReactiveForm },
    { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
];
