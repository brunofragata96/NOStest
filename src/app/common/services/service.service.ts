import { Injectable } from '@angular/core';
import { TEAMS } from '@app/mockTeams';
import { Team } from '@app/common/models/team';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ServiceService {
    private apiEndpoint: string = "api/equipas";
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    constructor(
        private http: HttpClient
    ) { 
    }
    
    getTeams():Observable<Team[]> {
        // this.set('teams', InMemoryTeamsService);
        // return InMemoryTeamsService;
        return this.http.get<Team[]>(this.apiEndpoint);
    }

    deleteTeam(team: Team) {
        return this.http.delete(`${this.apiEndpoint}/${team.id}`, this.httpOptions)
    }

    updateTeam (team: Team): Observable<any> {
        return this.http.put(this.apiEndpoint, team, this.httpOptions).pipe(
        //tap(_ => this.log(`updated hero id=${hero.id}`)),
        //catchError(this.handleError<any>('updateHero'))
        );
    }

    
}
