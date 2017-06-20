export class CounterService {

    totalActiveActions = 0;
    totalInactiveActions = 0;

    incrementActiveUsers() {
        this.totalActiveActions ++;
        console.log('active users = ' + this.totalActiveActions);
    }
    incrementInactiveUsers() {
        this.totalInactiveActions ++;
        console.log('Inactive users = ' + this.totalInactiveActions);
    }
}
