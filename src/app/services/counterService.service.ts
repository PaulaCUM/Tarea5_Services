export class counterService {
    cActive = 0;
    cInactive = 0;
    countActive () {
        this.cActive++;
        console.log('You made ' + this.cActive + ' change(s) to Active');
    }

    countInactive () {
        this.cInactive++;
        console.log('You made ' + this.cInactive + ' change(s) to Inactive');
    }
}