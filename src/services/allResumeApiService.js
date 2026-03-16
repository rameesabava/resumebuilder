import apiService from "../api/apiService";

// add resume api called by UserInput 
export const addResumeAPI = async (resumeData)=>{
    return await apiService("POST","/allResumes",resumeData)
}

// get resume api called by viewResume
export const getResumeAPI = async (id)=>{
    return await apiService("GET",`/allResumes/${id}`,{})
}

