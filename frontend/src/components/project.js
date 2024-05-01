export class Project {
    title;
    amount;
    start;
    finish;
    rating;
    comment;
    constructor(title,
        amount,
        start,
        finish,
        rating,
        comment) {
        this.title = title;
        this.amount = amount;
        this.start = start;
        this.finish = finish;
        this.rating = rating;
        this.comment = comment;
    }
}
