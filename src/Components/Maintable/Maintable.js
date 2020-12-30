import './Maintable.css'
import "semantic-ui-css/semantic.min.css";

const Maintable = () => {
    return(
       <div className="main-table">
           <table class="ui selectable celled table">
  <thead>
    <tr>
      <th></th>
      <th>persons</th>
      <th>My Status</th>
      <th>Status</th>
      <th>Date</th>
      <th>contact</th>
    </tr>
  </thead>
  <tbody>
    <tr class="blue-border">
      <td className="blue-border">alex</td>
      <td><i class="big user circle icon"></i></td>
      <td>Apr 10</td>
      <td class="positive">Working on it</td>
      <td>Apr 10</td>
      <td>9829900737</td>
    </tr>
    <tr>
      <td>alex</td>
      <td><i class="big user circle icon"></i></td>
      <td>Apr 10</td>
      <td class="positive">Working on it</td>
      <td>Apr 10</td>
      <td>9829900737</td>
    </tr>

    <tr>
      <td>alex</td>
      <td><i class="big user circle icon"></i></td>
      <td>Apr 10</td>
      <td class="positive">Working on it</td>
      <td>Apr 10</td>
      <td>9829900737</td>
    </tr>
    <tr>
      <td>alex</td>
      <td><i class="big user circle icon"></i></td>
      <td>Apr 10</td>
      <td class="positive">Working on it</td>
      <td>Apr 10</td>
      <td>9829900737</td>
    </tr>
    <tr>
      <td>alex</td>
      <td><i class="big user circle icon"></i></td>
      <td>Apr 10</td>
      <td class="positive">Working on it</td>
      <td>Apr 10</td>
      <td>9829900737</td>
    </tr>
    
   
      
  </tbody>
</table>
       </div>
    )
}

export default Maintable;