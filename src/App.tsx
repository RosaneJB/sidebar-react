import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './routes';
import { Layout } from './pages';

function App() {
  return (
    <>
      <Layout>
        <MainRoutes />
      </Layout>
    </>
  );
}

export default App;
