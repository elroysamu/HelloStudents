import './App.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import FormComponent from './components/FormComponent/FormComponent';
import TableComponent from './components/TableComponent/TableComponent'

function App() {
  const [data, setData] = useState([])
  const [dataChanged, setDataChanged] = useState(true)
  useEffect(() =>{
      const url = "http://localhost:8080/all"
      axios.get(url)
      .then((res) =>
        setData(res.data)
      )
      .catch((err)=>{
        console.log(err)
      })
    },{dataChanged}
  )

  return (
    <div className="App container-fluid justify-content-center align-items-center">
      <FormComponent setDataChanged = {setDataChanged} dataChanged = {dataChanged}/>
      <TableComponent data = {data}/>
    </div>
  );
}

export default App;
