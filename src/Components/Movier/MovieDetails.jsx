export default function MovieDetails({movie}){
	console.log(movie);
	return(
		<div className="movie-detail">
			<figure className="movie-detail__image">
				<img src="" alt="" className="movie-detail__poster" />
			</figure>
			<div className="movie-detail__desc">
				<p>{movie.overview}</p></p>
			</div>
		</div>
	);
}