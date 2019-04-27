export default theme => ({
  form: {
    display: 'flex',
    backgroundColor: theme.palette ? theme.palette.background.paper : '',
    padding: theme.spacing ? theme.spacing.unit : 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    border: `solid ${theme.palette ? theme.palette.primary.main : ''}`,
    boxShadow: `1px 1px 10px`
  },
  text: {
    width: '75%'
  }
})
