import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';

const Header = () => {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
				color: 'black',
				p: 0,
			}}
		>
			<Container maxWidth="xl">
				<Toolbar>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Button href="/">Home</Button>

						<Button href="/gallery">Gallery</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
