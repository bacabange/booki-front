import React, { useContext } from 'react';
import AlertContext from '../../context/layout/alert/alertContext';
import uuid from 'uuid';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => {
      const id = uuid.v4();
      return(
        <div key={id} className={`notification is-${alert.type}`}>
          {alert.msg}
        </div>
      )
    })
  );
};

export default Alert;
