import React, {useContext} from "react";
import '../Css/index.css';
import { AdDataContext } from "../Context";

export default function EstimateForm() {
  const {categoryValue, monthlyBudget, leadValue} =useContext(AdDataContext)

  console.log("selecte", categoryValue)
  return (
    <div className="headerEstimateDiv">
      <h1>Monthly PPC Ad Estimates</h1>
      <label>These values are set on your selected industry benchmark</label>

      <table width="100%" border="0" cellPadding="5">
        <tbody>
          <tr>
            <td width="65%">
              Monthly Ad Budget {" "}
            </td>
            <td width="45%">
              ${monthlyBudget}
            </td>
    
          </tr>
          <tr>
            <td>
              Daily Ad Spend
            </td>
            <td>
              $ {{monthlyBudget}/30}
            </td>
          </tr>

          <tr>
            <td>CPC (Cost Per Click)</td>
            <td>${categoryValue.cpc}</td>
          </tr>

          <tr>
            <td>Impressions</td>
            <td>{categoryValue.population}</td>
          </tr>

          <tr>
            <td>CTR (Click Through Rate)</td>
            <td>${categoryValue.ctr}</td>
          </tr>

          <tr>
            <td>Website Visits/Interactions</td>
            <td></td>
          </tr>

          <tr>
            <td>CVR (Conversions Rate)</td>
            <td></td>
          </tr>

          <tr>
            <td>Leads/Sales/Inquiries</td>
            <td></td>
          </tr>

          <tr>
            <td>CPL (Cost Per Lead) </td>
            <td></td>
          </tr>
          <tr>
            <td>Leads/Sales Value</td>
            <td>${leadValue}</td>
          </tr>
          <tr style={{height:54, color:"white", backgroundColor:"#3b5997"}}>
            <td  >Potential Monthly ROI</td>
            <td></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
