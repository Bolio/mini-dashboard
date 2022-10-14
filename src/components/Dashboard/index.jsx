import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getInfoDashboardThunk, getInfoUserThunk } from "../../redux/modules/signin";
import LineChart from "../LineChart";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataDashboard, setDataDashboard] = useState({});

  // const useToken = useSelector((state) => state.token);
  // console.log("useToken", useToken);

  const useAccessToken = sessionStorage.getItem('accessToken');
  // console.log('useAccessToken:', useAccessToken);

  const useInfoUser = useSelector((state) => state.user);
  console.log("useInfoUser", useInfoUser);

  const useInfoDashboard = useSelector((state) => state.dashboard);
  console.log("useInfoDashboard", useInfoDashboard);

  useEffect(() => {
    if (useAccessToken) {
      dispatch(getInfoDashboardThunk(useAccessToken));
      dispatch(getInfoUserThunk(useAccessToken));
    }
  }, []);

  useEffect(() => {
    if (useInfoDashboard) {
      setDataDashboard(useInfoDashboard);
      console.log("dataDashboard", dataDashboard);
    }
  }, [useInfoDashboard]);

  const { name, paternalSurname, maternalSurname } = useInfoUser;
  const userName = name ? `${name} ${paternalSurname} ${maternalSurname}` : '';

  const { revenuePerHour, averageTicket, topTicket, topPaymentMethod } = useInfoDashboard;

  const revenue = revenuePerHour?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  // console.log("revenue: ", revenue);

  const paymentMethods = {
    'other': 'Otros',
    'cash': 'Efectivo',
    'card': 'Tarjeta de crédito/débito',
    'wire transfer': 'Transferencia bancaria',
  }

  const getPaymentMethod = (method) => {
    // console.log('method:', method);
    for (let key in paymentMethods) {
      if (method === key) {
        return paymentMethods[key];
      }
    }
    return 'No identificado';
  }

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    navigate("/");
  }

  return (
    <div className="container-fluid">
      <h2>{`Bienvenido ${userName}`}</h2>
      <p>
        Reporte de <b>Hoy</b>
      </p>
      <button
        class="btn btn-outline-secondary"
        type="button"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <p>Ingresos</p>
            <h5>
              <b>{`$${revenue ? revenue : '00'}.00`}</b> MXN
            </h5>
            {/* CHART */}
            <LineChart dataChart={revenuePerHour} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <div className="p-4 bg-light border rounded-3">
              <p>Ticket promedio</p>
              <h5>
                <b>{`$${averageTicket ? averageTicket : '00'}.00`}</b> MXN
              </h5>
            </div>
            <div className="p-4 bg-light border rounded-3">
              <p>Ticket tope</p>
              <h5>
                <b>{`$${topTicket ? topTicket : '00'}.00`}</b> MXN
              </h5>
            </div>
            <div className="p-4 bg-light border rounded-3">
              <p>Método de pago más usado</p>
              <h5>
                <b>{getPaymentMethod(topPaymentMethod)}</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
