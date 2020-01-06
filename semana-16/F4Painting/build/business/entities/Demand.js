"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Demand {
    constructor(id, width, hight, paperType, frameType, borderHight, color) {
        this.id = id;
        this.width = width;
        this.hight = hight;
        this.paperType = paperType;
        this.frameType = frameType;
        this.borderHight = borderHight;
        this.color = color;
    }
    ;
    getId() {
        return this.id;
    }
    ;
    getSize() {
        return `${this.width} X ${this.hight}`;
    }
    ;
    getPaperType() {
        return this.paperType;
    }
    ;
    getFrameType() {
        return this.frameType;
    }
    ;
    getBorderHight() {
        return this.borderHight;
    }
    ;
    getColor() {
        return this.color;
    }
    ;
}
exports.Demand = Demand;
;
