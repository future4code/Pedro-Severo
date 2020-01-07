"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Demand {
    constructor(id, pictureSize, paperType, frameType, borderHight, color) {
        this.id = id;
        this.pictureSize = pictureSize;
        this.paperType = paperType;
        this.frameType = frameType;
        this.borderHight = borderHight;
        this.color = color;
    }
    ;
    calculatePictureSizePrice() {
        switch (this.pictureSize) {
            case PictureSize.MICRO:
                return 20;
            case PictureSize.SMALL:
                return 27.80;
            case PictureSize.MEDIUM:
                return 35.40;
            case PictureSize.LARGE:
                return 42.30;
            case PictureSize.EXTRA_LARGE:
                return 55.60;
        }
        ;
    }
    ;
    calculatePaperRate() {
        switch (this.paperType) {
            case PaperType.BRIGHT:
                return 1;
            case PaperType.FIBER:
                return 1.05;
            case PaperType.MAT:
                return 1.12;
            case PaperType.PEARL:
                return 1.42;
            case PaperType.RESIN:
                return 1.53;
        }
        ;
    }
    ;
    calculateFrameTypePrice() {
        switch (this.frameType) {
            case FrameType.NONE:
                return 0;
            case FrameType.CRUDE:
                return 15;
            case FrameType.CLEAN:
                return 32;
            case FrameType.CLASSIC:
                return 43;
            case FrameType.VINTAGE:
                return 52.50;
            case FrameType.WOOD:
                return 60;
        }
        ;
    }
    ;
    calculateBorderPrice() {
        switch (this.borderHight) {
            case BorderHight.SMALL:
                return this.calculatePictureSizePrice() * 0.25;
            case BorderHight.MEDIUM:
                return this.calculatePictureSizePrice() * 0.50;
            case BorderHight.BIG:
                return this.calculatePictureSizePrice() * 0.75;
        }
        ;
    }
    ;
    calculateImpressionPrice() {
        return this.calculatePictureSizePrice() * this.calculatePaperRate();
    }
    ;
    calculateFramePrice() {
        return this.calculateBorderPrice() + this.calculateFrameTypePrice();
    }
    ;
    calculateFinalPrice() {
        return this.calculateFramePrice() + this.calculateImpressionPrice();
    }
    ;
    getId() {
        return this.id;
    }
    ;
    getPictureSize() {
        return this.pictureSize;
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
var PictureSize;
(function (PictureSize) {
    PictureSize["MICRO"] = "13x18";
    PictureSize["SMALL"] = "21x30";
    PictureSize["MEDIUM"] = "30x30";
    PictureSize["LARGE"] = "30x42";
    PictureSize["EXTRA_LARGE"] = "42x60";
})(PictureSize = exports.PictureSize || (exports.PictureSize = {}));
;
var PaperType;
(function (PaperType) {
    PaperType["BRIGHT"] = "brilhante";
    PaperType["MAT"] = "fosco";
    PaperType["FIBER"] = "fibra";
    PaperType["RESIN"] = "resinado";
    PaperType["PEARL"] = "perola";
})(PaperType = exports.PaperType || (exports.PaperType = {}));
;
var FrameType;
(function (FrameType) {
    FrameType["NONE"] = "";
    FrameType["CRUDE"] = "crua";
    FrameType["CLEAN"] = "lisa";
    FrameType["CLASSIC"] = "classica";
    FrameType["VINTAGE"] = "vintage";
    FrameType["WOOD"] = "madeira";
})(FrameType = exports.FrameType || (exports.FrameType = {}));
;
var BorderHight;
(function (BorderHight) {
    BorderHight["SMALL"] = "pequena";
    BorderHight["MEDIUM"] = "media";
    BorderHight["BIG"] = "grande";
})(BorderHight = exports.BorderHight || (exports.BorderHight = {}));
;
var Color;
(function (Color) {
    Color["YELLOW"] = "amarelo";
    Color["RED"] = "vermelho";
    Color["BLUE"] = "azul";
    Color["ORANGE"] = "laranja";
    Color["GREEN"] = "verde";
    Color["PURPLE"] = "roxo";
})(Color = exports.Color || (exports.Color = {}));
;
