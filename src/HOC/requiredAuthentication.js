import React from 'react';

export const requiredAuthentication = ( WrappedComponent ) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <p>my component is authenticated</p>}
      <WrappedComponent />
    </div>
  );
};