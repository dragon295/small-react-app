import React from 'react';

import { Alert } from '@mui/material';

import { ErrorMessage } from 'formik';

const ErrorAlert = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errorMsg) => (
        <Alert severity='error' sx={{ mt: 1 }}>
          {errorMsg}
        </Alert>
      )}
    </ErrorMessage>
  );
};

export default ErrorAlert;
