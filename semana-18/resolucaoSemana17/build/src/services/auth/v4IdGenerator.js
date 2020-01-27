import { v4 } from 'uuid';
export class V4IdGenerator {
    generateId() {
        return v4();
    }
}
