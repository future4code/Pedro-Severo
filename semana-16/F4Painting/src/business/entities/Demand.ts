export class Demand {
    constructor(
        private id: string,
        private width: number,
        private hight: number,
        private paperType: string, 
        private frameType: string,
        private borderHight: string, 
        private color: string,
    ) {};

    public getId () {
        return this.id
    };

    public getSize() {
        return `${this.width} X ${this.hight}`
    };

    public getPaperType() {
        return this.paperType
    };

    public getFrameType() {
        return this.frameType
    };

    public getBorderHight() {
        return this.borderHight
    };

    public getColor() {
        return this.color
    };
};