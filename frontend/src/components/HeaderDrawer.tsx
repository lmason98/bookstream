import {
  AppBar,
  Container, Drawer,
  Toolbar, Typography
} from '@mui/material'

const HeaderDrawer = () => {
  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <Typography variant='h6'>Bookstream</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default HeaderDrawer