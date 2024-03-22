import { Routes } from "@angular/router";
import { LandingPageComponent } from "./app/landing-page/landing-page.component";
import { AboutMeComponent } from "./app/about-me/about-me.component";
import { ProjectsComponent } from "./app/projects/projects.component";
import { TechnologiesComponent } from "./app/technologies/technologies.component";
import { SkillsComponent } from "./app/skills/skills.component";

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
    },
    {
        path: 'technologies',
        component: TechnologiesComponent,
        title: 'Technologies'
    },
    {
        path: 'skills',
        component: SkillsComponent,
        title: 'Skills'
    }
]

export default routeConfig;