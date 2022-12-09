import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import theme from '@theme/theme'
import { Groups } from '@screens/Groups'

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Groups />
			<StatusBar style="auto" />
		</ThemeProvider>
	)
}
