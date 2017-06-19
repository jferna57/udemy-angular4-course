export class UserService {
    private activeUsers = ['Max', 'Anna'];
    private inactiveUsers = ['Chris', 'Manu'];

    getActiveUsers() {
        return this.activeUsers;
    }

    getInactiveUsers() {
        return this.inactiveUsers;
    }

    inactiveUser(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    activeUser(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}
