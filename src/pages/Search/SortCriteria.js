import React, { useEffect } from 'react';

import { useGlobalCart } from '../../cart-context';

import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Slider,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const SortCriteria = () => {
  const {
    searchProducts,
    setSearchProducts,
    sort,
    handleChangeSort,
    range,
    handleChangeRange,
    criteriaStr,
    checkBoxSort,
    handleChangeCheckboxSort,
    checkBoxStatus,
    handleChangeCheckboxStatus,
    removeCriteria,
    page,
    onSale,
    handleCheckOnSale,
  } = useGlobalCart();

  const navigate = useNavigate();

  function currencyFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(3) + 'M'; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  useEffect(() => {
    navigate({
      search: `?${searchProducts && `s=${searchProducts}`}${
        page > 1 ? `&page=${page}` : ''
      }${onSale.checked ? `&on-sale=${onSale.checked}` : ''}${
        sort && `&sort=${sort}`
      }${
        range[0] !== 0 || range[1] !== 3_000_000
          ? `${`&min=${range[0]}`}${`&max=${range[1]}`}`
          : ''
      }${criteriaStr}`,
    });
  }, [searchProducts, navigate, sort, range, criteriaStr, page, onSale]);

  return (
    <Box
      component={'section'}
      sx={{
        textTransform: 'capitalize',
        bgcolor: 'black',
        pt: 2,
        px: 2,
        color: 'white',
        '& .sortTitle': {
          my: 1,
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          htmlFor='search'
          sx={{
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
            },
          }}
        >
          Search something...
        </InputLabel>
        <OutlinedInput
          id='search'
          label='Search something...'
          type='text'
          inputProps={{ maxLength: 25 }}
          value={searchProducts}
          onChange={(e) => setSearchProducts(e.target.value)}
          endAdornment={
            <>
              <InputAdornment position='end'>
                {searchProducts ? (
                  <IconButton onClick={() => setSearchProducts('')}>
                    <CloseIcon sx={{ color: 'white' }} />
                  </IconButton>
                ) : (
                  ''
                )}
              </InputAdornment>
            </>
          }
          sx={{
            pr: 0,
            outline: 'none',
            color: 'white',
            '& fieldset': {
              borderColor: 'white !important',
            },
          }}
        />
      </FormControl>

      <Typography variant='h6' className='sortTitle'>
        Sort By
      </Typography>
      <FormControl fullWidth sx={{ borderColor: 'white !important', mb: 2 }}>
        <InputLabel
          id='sort-id'
          sx={{
            color: 'white',

            '&.Mui-focused': {
              color: 'white !important',
            },
          }}
        >
          Sort
        </InputLabel>
        <Select
          variant='outlined'
          labelId='sort-id'
          id='demo-simple-select'
          value={sort}
          label='Sort'
          onChange={handleChangeSort}
          sx={{
            color: 'white !important',
            '& fieldset': {
              color: 'red',
              border: '2px solid white !important',
            },
            '& li': {
              bgColor: 'red',
              textTransform: 'capitalize',
            },
          }}
        >
          <MenuItem value={''}>Unset</MenuItem>
          <MenuItem value={'asc'}>Price (low to high)</MenuItem>
          <MenuItem value={'desc'}>Price (high to low)</MenuItem>
          <MenuItem value={'old'}>Release Date ( newer )</MenuItem>
          <MenuItem value={'new'}>Release Date ( older )</MenuItem>
        </Select>
      </FormControl>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='price-content'
          id='price-header'
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 'auto', mt: 2 }}>
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={range}
              onChange={handleChangeRange}
              valueLabelDisplay='on'
              valueLabelFormat={(value) => (
                <div>{currencyFormatter(value)}</div>
              )}
              min={0}
              max={3_000_000}
              disableSwap
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='onsale-content'
          id='onsale-header'
        >
          <Typography>on sale</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            label='On Sale'
            control={<Checkbox color='success' />}
            checked={onSale.checked}
            onChange={handleCheckOnSale}
            name='on-sale'
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='platforms-content'
          id='platforms-header'
        >
          <Typography>platform</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            label='PC'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[0].checked}
            onChange={handleChangeCheckboxSort}
            name='PC'
          />
          <FormControlLabel
            label='PS5'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[1].checked}
            onChange={handleChangeCheckboxSort}
            name='PS5'
          />
          <FormControlLabel
            label='Nintendo'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[2].checked}
            onChange={handleChangeCheckboxSort}
            name='Nintendo'
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='platforms-content'
          id='platforms-header'
        >
          <Typography>DRM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            label='Steam'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[3].checked}
            onChange={handleChangeCheckboxSort}
            name='steam'
          />
          <FormControlLabel
            label='Epic game'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[4].checked}
            onChange={handleChangeCheckboxSort}
            name='epic-game'
          />
          <FormControlLabel
            label='other'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[5].checked}
            onChange={handleChangeCheckboxSort}
            name='other'
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='platforms-content'
          id='platforms-header'
        >
          <Typography>genre</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            label='action'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[6].checked}
            onChange={handleChangeCheckboxSort}
            name='action'
          />
          <FormControlLabel
            label='indie'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[7].checked}
            onChange={handleChangeCheckboxSort}
            name='indie'
          />
          <FormControlLabel
            label='adventure'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[8].checked}
            onChange={handleChangeCheckboxSort}
            name='adventure'
          />
          <FormControlLabel
            label='simulation'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[9].checked}
            onChange={handleChangeCheckboxSort}
            name='simulation'
          />
          <FormControlLabel
            label='strategy'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[10].checked}
            onChange={handleChangeCheckboxSort}
            name='strategy'
          />
          <FormControlLabel
            label='racing'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[11].checked}
            onChange={handleChangeCheckboxSort}
            name='racing'
          />
          <FormControlLabel
            label='RPG'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[12].checked}
            onChange={handleChangeCheckboxSort}
            name='RPG'
          />
          <FormControlLabel
            label='horror'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[13].checked}
            onChange={handleChangeCheckboxSort}
            name='horror'
          />
          <FormControlLabel
            label='sports'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[14].checked}
            onChange={handleChangeCheckboxSort}
            name='sports'
          />
          <FormControlLabel
            label='survival'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[15].checked}
            onChange={handleChangeCheckboxSort}
            name='survival'
          />
          <FormControlLabel
            label='multiplayer'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[16].checked}
            onChange={handleChangeCheckboxSort}
            name='multiplayer'
          />
          <FormControlLabel
            label='free'
            control={<Checkbox color='success' />}
            checked={checkBoxSort[17].checked}
            onChange={handleChangeCheckboxSort}
            name='0'
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='platforms-content'
          id='platforms-header'
        >
          <Typography>release status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            label='released'
            control={<Checkbox color='success' />}
            checked={checkBoxStatus[0].checked}
            onChange={handleChangeCheckboxStatus}
            name='released'
          />
          <FormControlLabel
            label='coming soon'
            control={<Checkbox color='success' />}
            checked={checkBoxStatus[1].checked}
            onChange={handleChangeCheckboxStatus}
            name='coming-soon'
          />
        </AccordionDetails>
      </Accordion>
      <Button
        fullWidth
        variant='contained'
        sx={{
          my: 2,
          bgcolor: '#b90000',
          '&:active': {
            bgcolor: ' #b90000',
          },
          '&:hover': {
            bgcolor: ' #b90000',
          },
          '&.Mui-disabled': {
            bgcolor: '#525252',
            color: 'rgba(0, 0, 0, 0.65)',
          },
        }}
        onClick={removeCriteria}
      >
        remove all criteria
      </Button>
    </Box>
  );
};

export default SortCriteria;
