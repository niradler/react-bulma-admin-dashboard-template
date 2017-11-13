import React, { Component } from 'react';

/*
<DashboardBox boxHeading="Top Seller Total" type="is-primary" levels={[{heading:"Sales",title:"250k"},{heading:"Sales",title:"450K"},{heading:"Sales",title:"250k"}]} boxTitle="59,950"/>
*/
class DashboardBox extends Component {
  render() {
    return (
      <div classNameName="DashboardBox">
             <div className={`box notification ${this.props.type}`}>
              <div className="heading">{this.props.boxHeading}</div>
              <div className="title">{this.props.boxTitle}</div>
              <div className="level">
               { this.props.levels.map((l)=>(
                    <div className="level-item">
                  <div className="">
                    <div className="heading">{l.heading}</div>
                    <div className="title is-5">{l.title}</div>
                  </div>
                </div>
                ))}
              </div>
            </div>
      </div>
    );
  }
}

export default DashboardBox;
