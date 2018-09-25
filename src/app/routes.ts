import { Routes } from '@angular/router';
import { TeamsContainer } from '@app/features/teams/containers/teamsList/teamsList.container';
import { TeamDetailsContainer } from '@app/features/teams/containers/teamDetails/teamDetails.container';


export const routes: Routes = [
    { path: "equipas", children:[
        { path: ":name",component: TeamDetailsContainer},
        { path: "criar",component: TeamDetailsContainer},
        { path: "", component: TeamsContainer}
    ]},
    // { path: "equipa/:name",component: TeamDetailsContainer},
    { path: "**", redirectTo: '/equipas'}
];
