import { Subject } from 'rxjs/Subject';

export class UsersService {

    userActivated = new Subject();

    userDesactivated = new Subject();

}
