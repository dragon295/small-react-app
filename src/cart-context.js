import React, { useState, useEffect, useContext, useReducer } from 'react';

import useFetch from './customHooks/useFetch';

import reducerCart from './reducerCart';
import {
  FETCH_ALL,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  CLEAR_ALL,
  SHOW_AMOUNT,
  FETCH_PER_PAGE,
} from './constants/actionTypes';

const CartContext = React.createContext();

const initialStateCart = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  total: [],
  itemsPerPage: [],
  amount: JSON.parse(localStorage.getItem('amount')) || 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerCart, initialStateCart);
  const [searchProducts, setSearchProducts] = useState('');
  const [sort, setSort] = useState('');
  const [range, setRange] = useState([0, 3_000_000]);
  const [onSale, setOnSale] = useState({
    checked: false,
  });
  const [checkBoxSort, setCheckBoxSort] = useState([
    {
      checked: false,
      nameTag: 'platform',
      value: 'PC',
    },
    {
      checked: false,
      nameTag: 'platform',
      value: 'PS5',
    },
    {
      checked: false,
      nameTag: 'platform',
      value: 'Nintendo',
    },
    {
      checked: false,
      nameTag: 'drm',
      value: 'steam',
    },
    {
      checked: false,
      nameTag: 'drm',
      value: 'epic-game',
    },
    {
      checked: false,
      nameTag: 'drm',
      value: 'other',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'action',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'indie',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'adventure',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'simulation',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'strategy',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'racing',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'RPG',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'horror',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'sports',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'survival',
    },
    {
      checked: false,
      nameTag: 'gerne',
      value: 'multiplayer',
    },
    {
      checked: false,
      nameTag: 'price',
      value: '0',
    },
  ]);

  const [checkBoxStatus, setCheckBoxStatus] = useState([
    {
      checked: false,
      nameTag: 'release_status',
      value: 'released',
    },
    {
      checked: false,
      nameTag: 'release_status',
      value: 'coming-soon',
    },
  ]);
  const [page, setPage] = useState(
    JSON.parse(sessionStorage.getItem('page')) || 1
  );

  const [voucher, setVoucher] = useState('');
  const [checkVoucherVal, setCheckVoucherVal] = useState(false);
  const [displayErrorVoucher, setDisplayErrorVoucher] = useState(false);
  const [addCart, setAddCart] = useState(false);

  let findProducts = `${searchProducts && `q=${searchProducts.trim()}`}`;

  let sortCriteria = `${
    sort &&
    `&_sort=${sort === 'asc' || sort === 'desc' ? 'price' : 'releaseAt'}&`
  }${sort && `_order=${sort === 'asc' || sort === 'new' ? 'asc' : 'desc'}`}`;

  let priceStr = `${
    range[0] !== 0 || range[1] !== 3_000_000
      ? `${`&price_gte=${range[0]}`}${`&price_lte=${range[1]}`}`
      : ''
  }`;

  let criteriaStr = checkBoxSort
    .map((item) => `${item.checked ? `&${item?.nameTag}=${item.value}` : ''}`)
    .join('');

  let criteriaStr2 = checkBoxStatus
    .map((item) => `${item.checked ? `&${item?.nameTag}=${item.value}` : ''}`)
    .join('');

  let pages = `&_page=${page}&_limit=9`;

  let onSaleStr = `${onSale.checked ? `&discountPrice_gte=1` : ''}`;

  let params = `?${findProducts}${pages}${onSaleStr}${sortCriteria}${priceStr}${criteriaStr}${criteriaStr2}`;
  let allParams = `?${findProducts}${onSaleStr}${sortCriteria}${priceStr}${criteriaStr}${criteriaStr2}`;

  const { data, loading } = useFetch(`${params}`);
  const { data: allData } = useFetch(`${allParams}`);

  const handleChangeSort = (e) => {
    setSort(e.target.value);
    setPage(1);
  };

  const minDistance = 500_000;

  const handleChangeRange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
    }

    setPage(1);
  };

  const handleCheckOnSale = (e) => {
    setOnSale((prev) => {
      return { ...prev, checked: e.target.checked };
    });
    setPage(1);
  };

  const handleChangeCheckboxSort = (e) => {
    setCheckBoxSort((prev) =>
      prev.map((item) => {
        if (item.value.includes(e.target.name)) item.checked = e.target.checked;
        return item;
      })
    );
    setPage(1);
  };

  const handleChangeCheckboxStatus = (e) => {
    setCheckBoxStatus((prev) =>
      prev.map((item) => {
        if (item.value.includes(e.target.name)) item.checked = e.target.checked;
        return item;
      })
    );
    setPage(1);
  };

  const handleChangePage = (value) => {
    setPage(parseInt(value));
  };

  const removeCriteria = () => {
    setPage(1);
    setSearchProducts('');
    setSort('');
    setRange([0, 3_000_000]);
    setCheckBoxSort((prev) => [
      ...prev.map((item) => ({ ...item, checked: false })),
    ]);
    setCheckBoxStatus((prev) => [
      ...prev.map((item) => ({ ...item, checked: false })),
    ]);
  };

  // CART INTERACTION

  const addToCart = (id) => {
    dispatch({ type: ADD_TO_CART, payload: id });
    addCart ? setAddCart(true) : setAddCart(true);
  };

  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: INCREMENT_ITEM, payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: DECREMENT_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_ALL });
  };

  const handleSubmitVoucher = (e) => {
    e.preventDefault();
    if (voucher === process.env.REACT_APP_DISCOUNT_VOUCHER) {
      setCheckVoucherVal(true);
      setDisplayErrorVoucher(false);
      setVoucher('');
    } else {
      setCheckVoucherVal(false);
      setDisplayErrorVoucher(true);
      setVoucher('');
    }
  };

  // EFFECT

  useEffect(() => {
    dispatch({ type: FETCH_ALL, payload: allData });
  }, [allData]);

  useEffect(() => {
    dispatch({ type: FETCH_PER_PAGE, payload: data });
  }, [data]);

  useEffect(() => {
    dispatch({ type: SHOW_AMOUNT, payload: state.cart });
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('amount', JSON.stringify(state.amount));
    sessionStorage.setItem('page', JSON.stringify(page));
  }, [state.cart, state.amount, page]);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDisplayErrorVoucher(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  });

  useEffect(() => {
    let resetPage = setTimeout(() => {
      removeCriteria();
    }, 3_600_000);

    return () => clearTimeout(resetPage);
  });

  useEffect(() => {
    const timeOutAddCart = setTimeout(() => {
      setAddCart(false);
    }, 2000);

    return () => clearTimeout(timeOutAddCart);
  }, [addCart]);

  // VALUE

  const value = {
    ...state,
    loading,
    allData,
    searchProducts,
    setSearchProducts,
    sort,
    handleChangeSort,
    range,
    priceStr,
    handleChangeRange,
    criteriaStr,
    checkBoxSort,
    handleChangeCheckboxSort,
    checkBoxStatus,
    handleChangeCheckboxStatus,
    page,
    handleChangePage,
    onSale,
    handleCheckOnSale,
    removeCriteria,
    addToCart,
    increaseItem,
    decreaseItem,
    removeCartItem,
    clearCart,
    voucher,
    setVoucher,
    handleSubmitVoucher,
    checkVoucherVal,
    displayErrorVoucher,
    addCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useGlobalCart = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
