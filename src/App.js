import React from 'react';
import './App.css';


function TransportationTitle(props){
  return (
      <div>
          <h2>{props.title}</h2><br/>{props.subtitle}
      </div>
  ) 
}

function TransportationSubtitle(props){
  return (<h2>{props.title}</h2>) 
}

function NewOnlyCheckbox(props){
  return (<div>{props.label}
  <input type="checkbox" 
    id="coding" 
    name="interest" 
    value="coding" checked/> </div>) 
}

function TypeOptions(props){
  return (<div><p/>
Select Type
<select>
<option value ={props.options[0]}>{props.options[0]}</option>
<option value ={props.options[1]}>{props.options[1]}</option>
<option value ={props.options[2]}>{props.options[2]}</option>
<option value ={props.options[3]}>{props.options[3]}</option>
</select>

</div>) 
}

function AllItems (props){
  return (<div>
    <Cars years = {["2013", "2011", "2016"]} 
          models = {["A","B","B"]}
          prices = {["$32000", "$4400", "$15500"]}/>
    <Trucks years = {["2014", "2013"]} 
          models = {["D","E"]}
          prices = {["$18000", "$5200"]}/>
    <Convertibles years = {["2009", "2010", "2012", "2017"]} 
          models = {["F","G","H","M"]}
          prices = {["$2000", "$6000", "$12500", "$50000"]}/>
  </div>)
}

function Cars(props){
 return (<div>
      <h2>Cars</h2>

      <ul>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                <tr>
                    <td>{props.years[0]}</td>
                    <td>{props.models[0]}</td>
                    <td>{props.prices[0]}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </table>
        </ul>
        <ul>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                <tr>
                    <td>{props.years[1]}</td>
                    <td>{props.models[1]}</td>
                    <td>{props.prices[1]}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </table>
        </ul>
        <ul>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                <tr>
                    <td>{props.years[2]}</td>
                    <td>{props.models[2]}</td>
                    <td>{props.prices[2]}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </table>
        </ul>
    </div>
    ) 
}


function Trucks(props){
  return (<div>
    <h2>Trucks</h2>

    <ul>
          <table>
              <tr>
                  <th>Year</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Buy</th>
              </tr>
              <tr>
                  <td>{props.years[0]}</td>
                  <td>{props.models[0]}</td>
                  <td>{props.prices[0]}</td>
                  <td><button>Buy Now</button></td>
              </tr>
          </table>
      </ul>
      <ul>
          <table>
              <tr>
                  <th>Year</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Buy</th>
              </tr>
              <tr>
                  <td>{props.years[1]}</td>
                  <td>{props.models[1]}</td>
                  <td>{props.prices[1]}</td>
                  <td><button>Buy Now</button></td>
              </tr>
          </table>
      </ul>
      
  </div>) 
 }

 
function Convertibles(props){
  return (<div>
    <h2>Convertibles</h2>

    <ul>
          <table>
              <tr>
                  <th>Year</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Buy</th>
              </tr>
              <tr>
                  <td>{props.years[0]}</td>
                  <td>{props.models[0]}</td>
                  <td>{props.prices[0]}</td>
                  <td><button>Buy Now</button></td>
              </tr>
          </table>
      </ul>
      <ul>
          <table>
              <tr>
                  <th>Year</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Buy</th>
              </tr>
              <tr>
                  <td>{props.years[1]}</td>
                  <td>{props.models[1]}</td>
                  <td>{props.prices[1]}</td>
                  <td><button>Buy Now</button></td>
              </tr>
          </table>
      </ul>
      <ul>
          <table>
              <tr>
                  <th>Year</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Buy</th>
              </tr>
              <tr>
                  <td>{props.years[2]}</td>
                  <td>{props.models[2]}</td>
                  <td>{props.prices[2]}</td>
                  <td><button>Buy Now</button></td>
              </tr>
          </table>
      </ul>
      <ul>
          <table>
              <tr>
                  <th>Year</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Buy</th>
              </tr>
              <tr>
                  <td>{props.years[3]}</td>
                  <td>{props.models[3]}</td>
                  <td>{props.prices[3]}</td>
                  <td><button>Buy Now</button></td>
              </tr>
          </table>
      </ul>
  </div>) 
 }

function App() {
  return (
    <div>
          <TransportationTitle title = "Welcome to React Transportation" 
              subtitle = "The best place to but vehicles online"   /> 
          <p/>
          <TransportationSubtitle title = "Choose Options"/> 
          <NewOnlyCheckbox label = "NewOnly"/> 
          <TypeOptions options = {["All", "Cars", "Trucks", "Convertibles"]}/> 
          <AllItems/>

    </div>
  );
}

export default App;
