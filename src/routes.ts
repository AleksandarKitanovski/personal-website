import { Routes } from "@angular/router";
import { LandingPageComponent } from "./app/landing-page/landing-page.component";
import { AboutMeComponent } from "./app/about-me/about-me.component";
import { ProjectsComponent } from "./app/projects/projects.component";

const routeConfig: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        title: 'Aleksandar Kitanovski'
    },
    {
        path: 'about-me',
        component: AboutMeComponent,
        title: 'About Me'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects'
    }
]

export default routeConfig;