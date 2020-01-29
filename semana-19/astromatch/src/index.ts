import { SignUpEndpoint } from './presentation/SignUpEndpoint';
import { LoginEndpoint } from './presentation/LoginEndpoint';
import { GetAllUsersEndpoint } from './presentation/GetAllUsersEndpoint';
import { MatchEndpoint } from './presentation/MatchEndpoint';
import { UnmatchEndpoint } from './presentation/UnmatchEndpoint';
import { GetAllMatchesEndpoint } from './presentation/GetAllMatchesEndpoint';

const app = require('./app')

exports.handler = async (event: any) => {

  switch (event.both.path) { 
    case 'signup': 
      return SignUpEndpoint;
    case 'login': 
      return LoginEndpoint;
    case 'users': 
      return GetAllUsersEndpoint;
    case 'match': 
      return MatchEndpoint;
    case 'unmatch': 
      return UnmatchEndpoint;
    case 'matches': 
      return GetAllMatchesEndpoint;
  };
};