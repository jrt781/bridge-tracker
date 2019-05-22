import { Item } from './item';

export class Check {

    public visited: boolean = false;
    public available: boolean = false;

    constructor(
        public name: string,
        public region: string,
        public dependencies: Item[]
    ) {

    }
}