import React from '@fluentui/react';

//import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Top from './pages/Top';
import OverView from './pages/OverView';
import Provisioning from './pages/Provisioning';
import Monitoring from './pages/Monitoring';
import NotFound from './pages/NotFound';
import AppLayout from './components/layout/AppLayout';
import StorageSystem from './pages/StorageSystem';
import Iscsi from './pages/Iscsi';
import Fc from './pages/Fc';
import HostGroup from './pages/HostGroup';
import { ApiLoginForm } from './components/layout/AplLoginForm';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { useAuth } from './components/layout/useAuth';


function App() {
  const TopProps = { title:"top"}
  const { isAuthenticated, isAdmin, login } = useAuth();
  return (
    <Router>
      <Routes>
       {/* 公開ルート: ログイン画面 */}
          <Route path="/login" element={
              isAuthenticated ? (
                <Navigate to="/top" replace />
              ) : (
                <ApiLoginForm onLoginSuccess={login} />
              )
            } 
          />
          <Route path="*" element={<ApiLoginForm onLoginSuccess={login}/>}/>
      {/* 認証ユーザ公開：通常非公開 */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
         <Route path="/" element={<AppLayout isAdmin = {isAdmin}/>}>
          <Route index element={<Top {...TopProps} />}/>
           <Route path="/OverView" element={<OverView />}/>
           {isAdmin &&<Route path="/Provisioning" element={<Provisioning />}/>}
           <Route path="/StorageSystem" element={<StorageSystem />}/>
           <Route path="/HostGroup" element={<HostGroup />}/>
           <Route path="/Iscsi" element={<Iscsi isAdmin={isAdmin}/>}/>
           <Route path="/Fc" element={<Fc />}/>
           <Route path="/Monitoring" element={<Monitoring />}/>
           <Route path="*" element={<NotFound />}/>
           </Route>
         </Route>
      </Routes>
    </Router>
  );
}

export default App;
