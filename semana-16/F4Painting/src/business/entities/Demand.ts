enum PictureSize {
    MICRO = "13x18 ",
    SMALL = "21x30",
    MEDIUM = "30x30",
    LARGE = "30x42",
    EXTRA_LARGE = "42x60"
};

enum PaperType {
    BRIGHT = "brilhante",
    MAT = "fosco",
    FIBER = "fibra",
    RESIN = "resinado",
    PEARL = "perola"
};

enum PictureFrame {
    CRUDE = "crua",
    CLEAN = "lisa",
    CLASSIC = "classica",
    VINTAGE = "vintage",
    WOOD = "madeira"
};

enum BorderHight {
    SMALL = "pequena",
    MEDIUM = "media",
    BIG = "grande"
};


export class Demand {
    constructor(
        private id: string,
        private pictureSize: PictureSize.MEDIUM,
        private paperType: PaperType.BRIGHT, 
        private pictureFrame: PictureFrame.CLASSIC,
        private borderHight: BorderHight.MEDIUM, 
        private color: string,
    ) {};

    public getId () {
        return this.id
    };

    public getPictureSize() {
        return this.pictureSize
    };

    public getPaperType() {
        return this.paperType
    };

    public getPictureFrame() {
        return this.pictureFrame
    };

    public getBorderHight() {
        return this.borderHight
    };

    public getColor() {
        return this.color
    };
};