export class Comment {
    constructor (
        private id: string,
        private name: string,
        private text: string,
        private userId: string,
        private postId: string,
        private creationDate: Date = new Date(),
    ) {};

    public getId(): string {
        return this.id;
    };

    public getName(): string {
        return this.name;
    };

    public getText(): string {
        return this.text;
    };

    public getPostId(): string {
        return this.postId;
    };

    public getDate(): Date {
        return this.creationDate;
    };

    public getUserId(): string {
        return this.userId
    };
};