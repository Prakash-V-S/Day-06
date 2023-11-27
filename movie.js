class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.defaultRating = "PG-13";
        this.rating = (rating !== undefined) ? rating : this.defaultRating;// "PG" as default when no rating is provided.
    }
    getPG() {
        return ` Movie  : ${this.title}\n Studio : ${this.studio}\n Rating : ${this.rating}`
    }
}
let movie1 = new Movie("Casino Royale", "Eon Productions",);
console.log(movie1.getPG());





