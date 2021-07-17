import MovieItem from './MovieItem';

export default function MovieList({movies}){
	return(
		<>
			<h1 className="title">Welcome to movier!</h1>
			<p className="subtitle">Your app for check your movies</p>
  		<main className="main movies-grid">
  			{movies.map(movie => <MovieItem movie={movie} key={movie.id} />)}
  		</main>
  	</>
	);
}