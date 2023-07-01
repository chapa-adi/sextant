import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="whole">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='toptext'>
          Dashboard
        </h1>
        <div id="alertcon">
</div>

       <div className="info">
  <label htmlFor="tech">Name  </label>
  <input type="text" id="tech" required/>
  <label htmlFor="tools">Tool  </label>
  <input type="text" id="tools" required/>
  <button onClick={Row}>Add</button>
  </div>
  <div className='case'>
  <table id="data">
  <tr>
    <th>Names</th>
    <th>Tools Used</th>
  </tr>
</table>
</div>

</header>
    </div>
    );
} 


  function Row() {
    var tech = document.getElementById('tech').value;
    var tools = document.getElementById('tools').value;

    var table = document.getElementById('data');
    var row = table.insertRow();
   if (tech === '' || tools === '') {
    var alertcon = document.getElementById('alertcon');
    alertcon.innerHTML = 'Please fill all the fields.';
    alertcon.classList.add('alert');
   return;
  }


    var techCell = row.insertCell(0);
    var toolsCell = row.insertCell(1);

    techCell.innerHTML = tech;
    toolsCell.innerHTML = tools;
    document.getElementById('tech').value = '';
    document.getElementById('tools').value = '';
  }


export default App;
