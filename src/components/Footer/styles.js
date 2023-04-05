import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  customTextfield: {
    '& .MuiInputBase-root': {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      color: '#ffffff80',
      '& input': {
        backgroundColor: 'transparent',
      },
    },
  },
});

export default useStyles;
