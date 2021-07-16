import MovierMovie from './MovierMovie';

export default function MovierGrid({movies}){
	return(
		<>
			<h1 className="title">Welcome to movier!</h1>
			<p className="subtitle">Your app for check your movies</p>
  		<main className="main movies-grid">
  			{movies.map(movie => <MovierMovie movie={movie} key={movie.id} />)}
  		</main>
  	</>
	);
}