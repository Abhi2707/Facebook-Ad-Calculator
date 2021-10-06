import React from "react";
import '../Css/index.css'

export default function EstimateForm() {
  return (
    <div
      style={{ backgroundColor: "#e9ecea", paddingLeft: 15, paddingRight: 15 }}
    >
      <h1>Monthly PPC Ad Estimates</h1>
      <label>These values are set on your selected industry benchmark</label>

      <table width="100%" border="0" cellPadding="5">
        <tbody>
          <tr>
            <td width="65%">
              Monthly Ad Budget {" "}
            </td>
            <td width="45%">
              $200
            </td>
    
          </tr>
          <tr>
            <td>
              Daily Ad Spend
            </td>
            <td>
              $17
            </td>
          </tr>

          <tr>
            <td>CPC (Cost Per Click)</td>
            <td>$18</td>
          </tr>

          <tr>
            <td>Impressions</td>
            <td>322323</td>
          </tr>

          <tr>
            <td>CTR (Click Through Rate)</td>
            <td></td>
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
            <td></td>
          </tr>
          <tr>
            <td >Potential Monthly ROI</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
