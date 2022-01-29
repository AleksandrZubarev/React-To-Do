import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

    const data = [
        {name: "John", salary: 800, increase: true},
        {name: "Alex", salary: 3000},
        {name: "Carl", salary: 5000},
        {name: "Den", salary: 5000},
        {name: "Ron", salary: 7000},
        {name: "Sly", salary: 9000},
        {name: "Rut", salary: 8000},
        {name: "Sendi", salary: 8000},
        {name: "Серёга", salary: 1},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>

            <EmployersAddForm/>
            
        </div>
    );
}

export default App;