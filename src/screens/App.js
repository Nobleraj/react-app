import React from 'react';
import { Admin, Resource,Title } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { Grid, PostIcon } from '../components/DataGrid';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="dashboard" list={Grid} icon={PostIcon}/>
        <Title title="Dashboard" />
    </Admin>
  );
}

export default App;
