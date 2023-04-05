import { styled } from '@mui/material/styles';

export const CustomImgList = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));
