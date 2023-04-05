import { styled } from '@mui/material/styles';

export const CustomImg = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '60%',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));
