import axios from "axios";

const testService = {
    endPoint: 'https://api.clockify.me/api/v1/workspaces'
};

testService.getWorkspace = () =>{
    const config = {
        method: "GET",
        url: testService.endPoint,
        headers: { "Content-Type": "application/json",
        "X-Api-Key" : "ODRhNmQ5ZGQtMGQ2OS00NDI0LWI0ZGEtOGY1YTAwNGVhNjQ5"
     },
      };
      return axios(config)
}
testService.users = (id) =>{
    const config = {
        method: "GET",
        url: `${testService.endPoint}/${id}/users/`,
        headers: { "Content-Type": "application/json",
        "X-Api-Key" : "ODRhNmQ5ZGQtMGQ2OS00NDI0LWI0ZGEtOGY1YTAwNGVhNjQ5"
     },
      };
      return axios(config)
}
testService.timeEntries = (id, userId , pageIndex, pageSize) =>{
    const config = {
        method: "GET",
        url: `${testService.endPoint}/${id}/user/${userId}/time-entries?hydrated=true&page-size=${pageSize}&page=${pageIndex}`,
        headers: { "Content-Type": "application/json",
        "X-Api-Key" : "ODRhNmQ5ZGQtMGQ2OS00NDI0LWI0ZGEtOGY1YTAwNGVhNjQ5"
     },
      };
      return axios(config)
}
testService.projects = (id) =>{
    const config = {
        method: "GET",
        url:`${testService.endPoint}/${id}/projects/`,
        headers: { "Content-Type": "application/json",
        "X-Api-Key" : "ODRhNmQ5ZGQtMGQ2OS00NDI0LWI0ZGEtOGY1YTAwNGVhNjQ5"
     },
      };
      return axios(config)
}
export default testService