export class Post {    
    constructor (
        private picture: string, 
        private description: string, 
        private type: PostType,
        private userId: string,
        private creationDate: Date = new Date(),
    ) {};

    public getPicture(): string {
        return this.picture;
    };

    public getDescription(): string {
        return this.description;
    };

    public getType(): PostType {
        return this.type;
    };

    public getDate(): Date {
        return this.creationDate;
    };

    public getUserId(): string {
        return this.userId
    };
};

export enum PostType {
    EVENT = "EVENT",
    NORMAL = "NORMAL"
};

