export class Demand {
    constructor(
        private id: string,
        private pictureSize: PictureSize,
        private paperType: PaperType,
        private frameType: FrameType,
        private borderHight: BorderHight,
        private color: Color,
    ) { };

    private calculatePictureSizePrice(): number {
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
        };
    };

    private calculatePaperRate(): number {
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
        };
    };

    private calculateFrameTypePrice(): number {
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
        };
    };

    private calculateBorderPrice(): number {
        switch (this.borderHight) {
            case BorderHight.SMALL:
                return this.calculatePictureSizePrice() * 0.25;
            case BorderHight.MEDIUM:
                return this.calculatePictureSizePrice() * 0.50;
            case BorderHight.BIG:
                return this.calculatePictureSizePrice() * 0.75;
        };
    };

    public calculateImpressionPrice(): number {
        return this.calculatePictureSizePrice() * this.calculatePaperRate()
    };

    public calculateFramePrice(): number {
        return this.calculateBorderPrice() + this.calculateFrameTypePrice()
    };

    public calculateFinalPrice(): number {
        return this.calculateFramePrice() + this.calculateImpressionPrice();
    };

    public getId() {
        return this.id
    };

    public getPictureSize() {
        return this.pictureSize
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

export enum PictureSize {
    MICRO = "13x18",
    SMALL = "21x30",
    MEDIUM = "30x30",
    LARGE = "30x42",
    EXTRA_LARGE = "42x60"
};

export enum PaperType {
    BRIGHT = "brilhante",
    MAT = "fosco",
    FIBER = "fibra",
    RESIN = "resinado",
    PEARL = "perola"
};

export enum FrameType {
    NONE = "",
    CRUDE = "crua",
    CLEAN = "lisa",
    CLASSIC = "classica",
    VINTAGE = "vintage",
    WOOD = "madeira"
};

export enum BorderHight {
    SMALL = "pequena",
    MEDIUM = "media",
    BIG = "grande"
};

export enum Color {
    YELLOW = "amarelo",
    RED = "vermelho",
    BLUE = "azul",
    ORANGE = "laranja",
    GREEN = "verde",
    PURPLE = "roxo"
};