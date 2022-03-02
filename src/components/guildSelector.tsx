import styles from './guildSelector.module.css';

const GuildButton = ({guild}: { guild: IGuild }) => (
	<li className={styles.ButtonContainer + ' group'}>
		<button className={styles.Button}>
			<span className={styles.ButtonImage + ' group-hover:rounded'}/>
			<img src={guild.image} alt=""/>
			<span className={styles.ButtonText + ' group-hover:text-gray-700'}>{guild.name}</span>
		</button>
	</li>
);

export const GuildSelector = ({guilds}: props) => (
	<div className={styles.Bar}>
		<ul className={styles.List}>
			{
				guilds.map(x => <GuildButton key={x.id} guild={x}/>)
			}
		</ul>
	</div>
);

interface props {
    guilds: IGuild[]
}

interface IGuild {
    image: string,
    name: string,
    id: number
}