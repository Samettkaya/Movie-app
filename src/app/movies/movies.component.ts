import { Component } from "@angular/core";
import { Movie } from "../movie";
import {MovieService} from"../movie.service";
@Component({
    selector:'movies',
    templateUrl:'movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponenet{

    title="Movie List"
    movies: Movie[];
    selectedMovie: Movie;
    
    constructor(private movieService:MovieService){}

    ngOnInit():void{
        this.getMovies();
    }

    getMovies():void{
        this.movieService.getMovies()
        .subscribe(movies=>{
            this.movies=movies;
        })
    }

    onSelect(movie:Movie):void {
        this.selectedMovie=movie;
    }
}