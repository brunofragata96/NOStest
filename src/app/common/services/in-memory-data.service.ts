import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from '@app/common/models/team';

export class InMemoryTeamsService implements InMemoryDbService {
    createDb() {
        const equipas: Team[] = [
            { id: 0, name: 'Sporting', matchesPlayed: 10, matchesWon: 8, matchesLost: 1, coach: 'José Peseiro'  },
            { id: 1, name: 'Benfica', matchesPlayed: 10, matchesWon: 7, matchesLost: 2, coach: 'Rui Vitória'  },
            { id: 2, name: 'Porto', matchesPlayed: 10, matchesWon: 4, matchesLost: 3, coach: 'Sérgio Conceição'  },
            { id: 3, name: 'Braga', matchesPlayed: 10, matchesWon: 5, matchesLost: 3, coach: 'Abel Ferreira'  },
            { id: 4, name: 'Vitória SC', matchesPlayed: 10, matchesWon: 2, matchesLost: 6, coach: 'Luís Castro'  },
            { id: 5, name: 'Nacional', matchesPlayed: 10, matchesWon: 2, matchesLost: 8, coach: 'Costinha'  },
            { id: 6, name: 'Rio Ave', matchesPlayed: 10, matchesWon: 0, matchesLost: 10, coach: 'José Manuel Gomes'  },
          ];
          return {equipas};
    }
}