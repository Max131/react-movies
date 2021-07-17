import Header from './Header';
import MovieList from './MovieList';
import Data from '../../Data/movies.json';

export default function Movies(){
	return(
		<>
			<Header />
			<MovieList movies={Data.results}/>
		</>
	);
}