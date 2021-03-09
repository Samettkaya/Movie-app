import { Component } from "@angular/core";
import { Movie } from "../movie";
import { Movies } from"../movie.datasource";
@Component({
    selector:'movies',
    templateUrl:'movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponenet{

    title="Movie List"
    movies=Movies;
    selectedMovie!: Movie;
    onSelect(movie:Movie):void {
        this.selectedMovie=movie;
    }
}