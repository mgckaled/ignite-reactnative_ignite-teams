import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'

import { Container } from './styles'

export function Groups() {
	const [groups, setGroups] = useState<string[]>([
		'Galera da Rocketseat',
		'Amigos'
	])

	return (
		<Container>
			<Header />
			<Highlight title="Turmas" subtitle="Jogue com a sua turma" />

			{/* keyExtractor: prove um id único para cada valor da lista */}
			{/* renderItem: renderiza um componente por item desestruturado */}
			<FlatList
				data={groups}
				keyExtractor={item => item}
				renderItem={({ item }) => <GroupCard title={item} />}
			/>
		</Container>
	)
}
