import {Button, Text, Link} from 'rebass'

const button = ({mx = 'auto'}) => {
	return (
		<Button
			m={4}
			bg="#1c7ed6"
			mx={mx}
			sx={{borderRadius: 10, boxShadow: '0 0 1px black'}}
		>
			<Link variant="nav" href="/register">
				<Text sx={{fontFamily: 'IBM Plex Sans'}} color="white" fontWeight="normal" fontSize={[3, 4, 5]}>
					<b>Register now!</b>
				</Text>
			</Link>
		</Button>
	)
}

export default button
