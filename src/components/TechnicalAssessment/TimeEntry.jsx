import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import testService from "./timeService";

function TimeEntry({ user, employee }) {
  const [tableData, setTableData] = useState({
    currentPage: 1,
    pageSize: 50,
    bigArray: [],
  });
  useEffect(() => {
    if (employee) {
      testService
        .timeEntries(
          user.defaultWorkspace,
          employee,
          tableData.currentPage,
          tableData.pageSize
        )
        .then(onGetUserSuccessSingle);
    } else {
      testService
        .timeEntries(
          user.defaultWorkspace,
          user.id,
          tableData.currentPage,
          tableData.pageSize
        )
        .then(onGetUserSuccess);
    }
  }, [employee]);

  const onGetUserSuccess = (response) => {
    let array = response.data;
    setTableData((prev) => {
      let td = { ...prev };
      td.bigArray = prev.bigArray.concat(array);
      td.tableRows = array.flatMap(mapEntries);
      return td;
    });
  };

  const onGetUserSuccessSingle = (response) => {
    let array = response.data;
    setTableData((prev) => {
      let td = { ...prev };
      td.arrayOfEntries = array;
      td.tableRows = array.flatMap(mapEntries);
      return td;
    });
  };

  const mapEntries = (obj) => {
    return (
      <tr role="row" key={obj.id}>
        <td role="cell" className="align-middle">
          <div className="d-flex align-items-center"></div>
        </td>
        <td role="cell" className="align-middle">
          {employee ? employee : user.name}
        </td>
        <td role="cell" className="align-middle">
          {obj.project.name}
        </td>
        <td role="cell" className="align-middle">
          {obj.description}
        </td>
        <td role="cell" className="align-middle">
          {moment(obj.timeInterval.start).format("MMM Do YYYY")}
        </td>
        <td role="cell" className="align-middle">
          {moment(obj.timeInterval.end).diff(obj.timeInterval.start, "hours")}
        </td>
      </tr>
    );
  };

  return <React.Fragment>{tableData.tableRows}</React.Fragment>;
}
export default TimeEntry;
