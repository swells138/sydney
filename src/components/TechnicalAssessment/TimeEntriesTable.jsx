import React, { useEffect, useState } from "react";
import timeService from "./timeService";
import { Card, Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import moment from "moment/moment";

function TimeEntriesTable() {
  const [workplace, setWorkplace] = useState({
    currentPage: 1,
    filtered: [],
    users: [],
    timeEntries: [],
    startIndex: 0,
    endIndex: 10,
  });

  const entriesPerPage = 10;

  useEffect(() => {
    timeService
      .getWorkspace()
      .then(onGetWorkspaceSuccess)
      .catch(onGetWorkspaceError);
  }, []);

  const onGetWorkspaceSuccess = (response) => {
    let workplaceId = response.data[0].id;
    setWorkplace((prev) => {
      let wd = { ...prev };
      wd.workplaceId = workplaceId;
      return wd;
    });
    timeService.users(workplaceId).then(onGetUsersSuccess);
  };

  const onGetWorkspaceError = (error) => {
    console.log(error);
  };

  const onGetUsersSuccess = (response) => {
    let array = response.data;
    let filteredArray = array.filter(filterBad);
    const promises = filteredArray.map(mapUsers);

    Promise.all(promises)
      .then((resolvedEntries) => {
        let timeEntries = resolvedEntries.flat();
        setWorkplace((prev) => {
          let wd = { ...prev };
          wd.timeEntries = timeEntries;
          wd.dashboardItems = filteredArray.map(mapDropItem);
          return wd;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterBad = (obj) => {
    console.log(obj, "during filter");
    return obj.defaultWorkspace !== "5e0cc37a515c84221ad4ff3d";
  };

  const mapUsers = (element) => {
    return timeService
      .timeEntries(
        element.activeWorkspace,
        element.id,
        workplace.currentPage,
        50
      )
      .then((response) => {
        let array = response.data.map(mapTime);
        return array;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  };

  const mapTime = (entry) => {
    return {
      workplace: entry.workspaceId,
      id: entry.id,
      employeeName: renderName(entry.userId),
      projectName: entry.project.name,
      workDescription: entry.description,
      date: moment(entry.timeInterval.start).format("YYYY-MM-DD"),
      duration:
        moment(entry.timeInterval.end).diff(entry.timeInterval.start, "hours") +
        " hours",
    };
  };

  const mapDropItem = (obj) => {
    return <Dropdown.Item eventKey={obj.id}>{obj.name}</Dropdown.Item>;
  };

  const onDropDown = (e) => {
    timeService
      .timeEntries(workplace.workplaceId, e, 1, 50)
      .then((response) => {
        let array = response.data.map(mapTime);
        setWorkplace((prev) => ({
          ...prev,
          currentPage: 1,
          startIndex: 0,
          endIndex: entriesPerPage,
          timeEntries: array,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderName = (id) => {
    switch (id) {
      case "5f04d33235be762a3d2ea5fc":
        return "Ashley Simonds";
      case "5e0cc379515c84221ad4ff3a":
        return "Gabriel Russo";
      case "5e0e0e5a55189674f524e7bc":
        return "Jacob Dahlke";
      case "6464c6c2b2a18e35788d24d9":
        return "Dev Candidate";
      case "5e9871aeea8094116e9205f5":
        return "Tim Schlein";
      default:
        return "No Name";
    }
  };

  const goToPage = (page) => {
    setWorkplace((prev) => ({
      ...prev,
      currentPage: page,
      startIndex: (page - 1) * entriesPerPage,
      endIndex: page * entriesPerPage,
    }));
  };

  const nextPage = () => {
    setWorkplace((prev) => ({
      ...prev,
      currentPage: prev.currentPage + 1,
      startIndex: prev.endIndex,
      endIndex: prev.endIndex + entriesPerPage,
    }));
  };

  const prevPage = () => {
    setWorkplace((prev) => ({
      ...prev,
      currentPage: prev.currentPage - 1,
      startIndex: prev.startIndex - entriesPerPage,
      endIndex: prev.startIndex,
    }));
  };

  const totalPages = Math.ceil(workplace.timeEntries.length / entriesPerPage);
  const currentPage = workplace.currentPage;
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  const currentPageEntries = workplace.timeEntries.slice(
    workplace.startIndex,
    workplace.endIndex
  );

  return (
    <React.Fragment>
      <Container>
        <Row className="pt-1">
          <Col>
            <h1>Employee Time Entries</h1>
          </Col>
          <Col className="align-items-center pt-1">
            <Dropdown onSelect={onDropDown}>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Employee Entries
              </Dropdown.Toggle>
              <Dropdown.Menu>{workplace.dashboardItems}</Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Card className="col-12">
          <div className="table-responsive border-0 overflow-y-hidden">
            <Table className="text-nowrap table table-hover">
              <thead className="table-light">
                <tr>
                  <th></th>
                  <th colSpan="1" role="columnheader">
                    Employee Name
                  </th>
                  <th colSpan="1" role="columnheader">
                    Project Name
                  </th>
                  <th colSpan="1" role="columnheader">
                    Work Description
                  </th>
                  <th colSpan="1" role="columnheader">
                    Date
                  </th>
                  <th colSpan="1" role="columnheader">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageEntries.map((entry) => (
                  <tr key={entry.id}>
                    <td></td>
                    <td>{entry.employeeName}</td>
                    <td>{entry.projectName}</td>
                    <td>{entry.workDescription}</td>
                    <td>{entry.date}</td>
                    <td>{entry.duration}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
        <div className="pagination-container mt-3">
          <button
            className="btn btn-link"
            disabled={isFirstPage}
            onClick={prevPage}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`btn btn-link ${
                index + 1 === currentPage ? "active" : ""
              }`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-link"
            disabled={isLastPage}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TimeEntriesTable;
