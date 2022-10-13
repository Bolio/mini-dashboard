import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoDashboardThunk } from "../../redux/modules/signin";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [dataDashboard, setDataDashboard] = useState({});

  const useToken = useSelector((state) => state.token);
  console.log("useToken", useToken);
  
  const useInfoUser = useSelector((state) => state.user);
  console.log("useInfoUser", useInfoUser);

  const useInfoDashboard = useSelector((state) => state.dashboard);
  console.log("useInfoDashboard", useInfoDashboard);

  useEffect(() => {
    if (useToken) {
      console.log("useEffect - Dashboard.jsx");
      dispatch(getInfoDashboardThunk(useToken));
    }
  }, []);

  useEffect(() => {
    if (useInfoDashboard) {
      setDataDashboard(useInfoDashboard);
      console.log("dataDashboard", dataDashboard);
    }
  }, [useInfoDashboard]);

  return (
    <div className="container-fluid">
      <h2>Bienvenido</h2>
      <p>
        Reporte de <b>Hoy</b>
      </p>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <p>Ingresos</p>
            <h5>
              <b>$442,000</b> MXN
            </h5>
            {/* CHART */}
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <div className="p-4 bg-light border rounded-3">
              <p>Ticket promedio</p>
              <h5>
                <b>$1,200</b> MXN
              </h5>
            </div>
            <div className="p-4 bg-light border rounded-3">
              <p>Ticket tope</p>
              <h5>
                <b>$3,400</b> MXN
              </h5>
            </div>
            <div className="p-4 bg-light border rounded-3">
              <p>Método de pago más usado</p>
              <h5>
                <b>$442,000</b> MXN
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
