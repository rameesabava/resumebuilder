import apiService from "../api/apiService";

// add resume api called by UserInput 
export const addResumeAPI = async (resumeData) => {
    return await apiService("POST", "/allResumes", resumeData)
}

// get resume api called by viewResume
export const getResumeAPI = async (id) => {
    return await apiService("GET", `/allResumes/${id}`, {})
}

// add resume download api called by viewResume component when download button clicked
export const downloadResumeAPI = async (resumeData) => {
    return await apiService("POST", "/downloads", resumeData)
}

// get all resume download api called by downloads component when page loaded (useEffect hook)
export const getDownloadResumeAPI = async () => {
    return await apiService("GET", "/downloads", {})
}

// delete resume download api called by downloads component when delete btn clicked
export const deleteDownloadResumeAPI = async (resumeId) => {
    return await apiService("DELETE", `/downloads/${resumeId}`, {})
}

