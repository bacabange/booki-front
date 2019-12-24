import React, { useContext } from 'react';
import AlertContext from '../../context/layout/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`notification is-${alert.type}`}>
        {/* <button class="delete"></button> */}
        {alert.title &&
          <strong>{alert.title}</strong>
        }
        {alert.message}
      </div>
    )
  );
};

export default Alert;
