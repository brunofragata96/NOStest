import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamDetailsComponent } from './features/teams/components/teamDetails/teamDetails.component';
import { TeamDetailsContainer } from '@app/features/teams/containers/teamDetails/teamDetails.container';
import { TeamsComponent } from '@app/features/teams/components/teamsList/teamsList.component';
import { TeamsContainer } from '@app/features/teams/containers/teamsList/teamsList.container';
import { NavbarComponent } from './core/Navbar/navbar.component';
import { SearchBarComponent } from './features/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { routes } from '@app/routes';
import { ServiceService } from '@app/common/services/service.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTeamsService }  from '@app/common/services/in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TeamDetailsComponent,
    TeamDetailsContainer,
    TeamsContainer,
    TeamsComponent,
    NavbarComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryTeamsService, { dataEncapsulation: false }
)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
