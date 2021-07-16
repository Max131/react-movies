export default function MovierMovie({movie}){
	//https://api.themoviedb.org/3/configuration?api_key=e53ecf015abd03492284df1361669051
	//base_url
	//size: w185
	//poster_path
	return(
		<figure className="movie">
			<a className="movie__link" href={`https://themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer">
	      <img className="movie__image" 
	      	loading="lazy" 
	      	src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
	      	alt={movie.title} 
	      />
	      <figcaption className="movie__desc">
	      	<h2 className="movie__title">{movie.title}</h2>
	      	<small>
	      	Release date: <timedate>{movie.release_date}</timedate>
	      	</small>
	      </figcaption>
	     </a>
    </figure>
	);
}