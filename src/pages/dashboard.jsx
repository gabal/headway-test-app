import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectDoctors, loadDoctors } from '../slices/doctors';

function Dashboard() {
    const dispatch = useDispatch();
    const doctorsList = useSelector(selectDoctors);
    return (
        <div className="Dashboard">
            <header className="App-header">
                <h1>Headway Test App</h1>
            </header>
            <section>
                {doctorsList.status === 'loading' && <CircularProgress />}
                {doctorsList.status !== 'loading' && <ul>
                    {doctorsList.value.map((doctor, key) => <li key={key}>{doctor.name}</li>)}
                </ul>
                }
            </section>
            <Button color="primary" variant="contained" onClick={() => dispatch(loadDoctors())}>Test Button</Button>
        </div>
    );
}

export default Dashboard;