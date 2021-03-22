
const initialState = {

  supisAuth: false,
  supErrorMessage:false,
  supErrorMessageServer:false,
  admins:[],agents:[],collaborators:[],
  adminAuth:false,
  wrongadmin:false,
  adminErr:null,agentErr:null,supErr:null,collaboratorErr:null,
  addAdminErr:null

};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case  "clear errors":
      return {
        ...state,errors:null,adminErr:null,agentErr:null,supErr:null,collaboratorErr:null,addAdminErr:null
      };
    case "super admin authorized":
      return {
        ...state,
        supisAuth: true,supErrorMessage: false,errors:null
      };
      case "agentErr":
      return {
        ...state,
        agentErr: payload,
      };
      case "addAdminErr":
        return {
        ...state,
        addAdminErr: payload,
      };
      case "collaboratorErr":
      return {
        ...state,
        collaboratorErr: payload,
      };
      case "supErr":
      return {
        ...state,
        supErr: payload,
      };
      case "super login fail":
      return {
        ...state,
        supErrorMessageServer:true,
      };
      case "get collaborators list success":
      return {
        ...state,
        collaborators:payload,
        errors:null,
      };
      case "get admins list success":
      return {
        ...state,
        admins:payload,
        errors:null,
      };
      case "get agents list success":
        return{...state,
        agents:payload,
        errors:null,};
      case "get admins list failed":
      case "add admin failed":
      return {
        ...state,
        errors:payload,
      };
      case "admin login fail":
      return {
        ...state,
        adminErr:payload,
      };
      case "admin authorized":
        return{...state,adminAuth:true};
      case "wrong admin":
        return({...state,wrongadmin:true})
      case "delete wrong admin":
         return({...state,wrongadmin:false})
    default:
    return state;
};
}
export default userReducer;