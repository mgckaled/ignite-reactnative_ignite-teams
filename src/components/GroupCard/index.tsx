import { TouchableOpacityProps } from 'react-native'

import { Container, Icon, Title } from './styles'

// união entre types: permite o componente receber as propriedades do componente nativo
type Props = TouchableOpacityProps & {
	title: string
}

export function GroupCard({ title, ...rest }: Props) {
	return (
		<Container {...rest}>
			<Icon />
			<Title>{title}</Title>
		</Container>
	)
}
