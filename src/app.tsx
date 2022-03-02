import {GuildSelector} from './components/guildSelector';
import {Body} from './components/Body';

const guilds: IGuild[] = [{id: 1, image: '', name: 'neem'}, {id: 2, image: '', name: 'jeem'}, {
	id: 3,
	image: '',
	name: 'kheem'
}];

export const App = () => (
	<>
		<GuildSelector guilds={guilds}/>
		<section className="sm:ml-20 lg:ml-60">
			<Body/>
		</section>
	</>
);

interface IGuild {
    image: string,
    name: string,
    id: number
}