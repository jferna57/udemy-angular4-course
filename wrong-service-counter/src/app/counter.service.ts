import { Numero } from './numero.model';

export class CounterService {

    counter: Numero = new Numero(0);

    incrementTotal() {
        this.counter.total ++;
        console.log(this.counter.total);
    }
}
