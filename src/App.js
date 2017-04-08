import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
var myDB = require('./db.json');
class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <div>
          <h4>ชื่อ: {myDB[0].name}</h4>
          <h5>ราคารวม: {Object.keys(myDB[0].purchase).map((e) => myDB[0].purchase[e].map((e) => e.amount).reduce((prev,curr) => prev+curr)).reduce((prev,curr) => prev+curr)}</h5>{/* อันนี้ผลรวมของแต่ละ user แต่ทีนี้ สมมติอยากจะหาผลรวมของทุก user เนี่ยสิ ทำไงดีน้า */}
        </div>
        <div className="col-md-3" style={{textAlign:"center"}}>
          <button className="btn">แก้ไขรายการ</button>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <td>
                  Category 1
                </td>
                <td>
                  ราคา
                </td>
              </tr>
            </thead>
            <tbody>
              {myDB[0].purchase.threeStraight.map((e) => <tr key={e.number}><td>{e.number}</td><td>{e.amount}</td></tr>)}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  รวม
                </td>
                <td>
                  {myDB[0].purchase.threeStraight.map((e) => e.amount).reduce((prev,curr) => prev+curr)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="col-md-3" style={{textAlign:"center"}}>
          <button className="btn">แก้ไขรายการ</button>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <td>
                  Category 2
                </td>
                <td>
                  ราคา
                </td>
              </tr>
            </thead>
            <tbody>
              {myDB[0].purchase.threeRunning.map((e) => <tr key={e.number}><td>{e.number}</td><td>{e.amount}</td></tr>)}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  รวม
                </td>
                <td>
                  {myDB[0].purchase.threeRunning.map((e) => e.amount).reduce((prev,curr) => prev+curr)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="col-md-3" style={{textAlign:"center"}}>
          <button className="btn">แก้ไขรายการ</button>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <td>
                  Category 3
                </td>
                <td>
                  ราคา
                </td>
              </tr>
            </thead>
            <tbody>
              {myDB[0].purchase.twoUpper.map((e) => <tr key={e.number}><td>{e.number}</td><td>{e.amount}</td></tr>)}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  รวม
                </td>
                <td>
                  {myDB[0].purchase.twoUpper.map((e) => e.amount).reduce((prev,curr) => prev+curr)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="col-md-3" style={{textAlign:"center"}}>
          <button className="btn">แก้ไขรายการ</button>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <td>
                  Category 4
                </td>
                <td>
                  ราคา
                </td>
              </tr>
            </thead>
            <tbody>
              {myDB[0].purchase.twoLower.map((e) => <tr key={e.number}><td>{e.number}</td><td>{e.amount}</td></tr>)}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  รวม
                </td>
                <td>
                  {myDB[0].purchase.twoLower.map((e) => e.amount).reduce((prev,curr) => prev+curr)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
