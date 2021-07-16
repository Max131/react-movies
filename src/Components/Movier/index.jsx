import MovierHeader from './MovierHeader';
import MovierGrid from './MovierGrid';
import Data from '../../Data/movies.json';

export default function Movies(){
	return(
		<>
			<MovierHeader />
			<MovierGrid movies={Data.results}/>
		</>
	);
}