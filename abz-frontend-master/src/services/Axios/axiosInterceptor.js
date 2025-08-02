import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Request interceptor
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);



//user*****************************************
const signup = (formData) => {
  return instance.post("api/user/register", formData);
};
// Use the instance for login
const login = (data) => {
  return instance.post("api/user/login", data);
};
const getAllUser = (data)=>{
  return instance.get("/api/user/getAllUsers",data)
}
const getAdminById= (_id,data)=>{
  return instance.get(`/api/user/getUserById/${_id}`,data);
}
// const allUsers=(data)=>{
//   return instance.get('/api/user/getAllUsers',data)
// }
const userUpdate = (_id, formData) => {
  return instance.put(`/api/user/updateUserProfile/${_id}`, formData);
}

const getAllControlOnAdminSide=(data)=>{
  return instance.get("/api/user/getAllControlOnAdminSide",data)
}
const deleteUser=(_id,data)=>{
  return instance.delete(`/api/user/deleteUser/${_id}`,data)
}
const getTotalCounts= (data)=>{
  return instance.get("/api/user/getTotalCounts",data)
}



// Program******************************************************

const getAllActiveProgram= (data)=>{
  return instance.get("/api/program/getPrograms",data)
}
const getAllActivePrograms= (data)=>{
  return instance.get("/api/program/getAllActiveProgram",data)
}
const addProgram=(data)=>{
  return instance.post("/api/program/createProgram",data)
}
const UpdateProgram=(_id,formData)=>{
  return instance.put(`/api/program/updateProgram/${_id}`,formData)
}

// company****************************************************
const getAllCompany= (data)=>{
  return instance.get("/api/user/getAllCompanies",data)
}
const addCompany = (formData)=>{

  return instance.post('/api/user/register',formData)

  return instance.post('/api/company/create',formData)

}
// ✅ CORRECTED
const updateCompanyById = (_id, formData) => {
  return instance.put(`/api/company/updateCompany/${_id}`, formData);
};

const deleteCompanyById=(_id,formData)=>{
  return instance.delete(`/api/company/deleteCompany/${_id}`, formData);
}

// Researcher axios**************************************************************

const deleteResearcherById=(_id,formData)=>{
  return instance.delete(`/api/researcher/researchDeleted/${_id}`, formData);
}
const updateResearcherById=(_id,formData)=>{
  return instance.delete(`/api/researcher/researchUpdated/${_id}`, formData);
}


// Report.........................................................

const createReport = (formData)=>{
  return instance.post(`/api/report/submitreport`,formData)
           
}
const getAllReports = (data) => {
  return instance.get("/api/report/getAllReport", data);

}
const updateReport= (_id,fromData)=>{
  return instance.put(`/api/report/updateReport/${_id}`,fromData)
}


const DataService = {
  login,
  signup,
  getAllUser,
  getAllCompany,
  getAllActiveProgram,
  getAllReports,
  createReport,
  getAdminById,
  getAllCompany,
  addCompany,
  updateCompanyById,
  updateResearcherById,
  userUpdate,
  addProgram,
  UpdateProgram,
  getAllControlOnAdminSide,
  deleteCompanyById,
  deleteResearcherById,
  getAllActivePrograms,
  deleteUser,
  updateReport,
  getTotalCounts

};

export { instance }; // ✅ Export this for other uses
export default DataService;
