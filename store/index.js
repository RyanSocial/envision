export const state = () => ({

  departments: null,
  folders: null,
  categoryRights: null,
  companyUsersInfo: null,
  staffRole: null,
  roleRights: null,
  template: null,
  updateTemplate: null,
  clientList: null,
  companyClient: null
});

export const mutations = {
  setDepartments(state, departments) {
    state.departments = departments;
  },
  setFolders(state, folders) {
    state.folders = folders;
  },
  setCategoryRights(state, categoryRights) {
    state.categoryRights = categoryRights;
  },
  setCompanyUsersInfo(state, companyUsersInfo) {
    state.companyUsersInfo = companyUsersInfo;
  },
  setStaffRole(state, staffRole) {
    state.staffRole = staffRole;
  },
  setRoleRights(state, roleRights) {
    state.roleRights = roleRights;
  },
  setTemplate(state, template) {
    state.template = template;
  },
  setUpdateTemplate(state, updateTemplate) {
    state.updateTemplate = updateTemplate;
  },
  setClientList(state, clientList) {
    state.clientList = clientList;
  },
  setCompanyClient(state, companyClient) {
    state.companyClient = companyClient;
  }
};

export const actions = {
  setDepartments({ commit }, departments) {
    commit("setDepartments", departments);
  },
  // setPersonalInformationAction({ commit }, personalInfo) {
  //   commit("setPersonalInformation", personalInfo);
  // },
  // setEmploymentAction({ commit }, employmentInfo) {
  //   commit("setEmployment", employmentInfo);
  // },
  // setNextOfKinInformationAction({ commit }, nextOfKin) {
  //   commit("setNextOfKinInformation", nextOfKin);
  // },
  // setBankingDetailsAction({ commit }, bankingInfo) {
  //   commit("setBankingDetails", bankingInfo);
  // },
  // setExpenditureDetailsAction({ commit }, incomeExpenditure) {
  //   commit("setExpenditureDetails", incomeExpenditure);
  // },
  // setDependantDetailsAction(state, dependents) {
  //   state.commit("setDependantDetails", dependents);
  // },
  // setLivingDetailsAction({ commit }, livingCircumstances) {
  //   commit("setLivingDetails", livingCircumstances);
  // }
};
//  export const getters = {

//   dependents:state =>{
//     return state.dependents
//   }
// }

export const getters = {
  // isAppComplete: state => {
  //   return state.application.id !== null;
  // },

  // application: state => {
  //   console.log("in getter")
  //   return state.application;
  // },

  // isPersonalInfoComplete: state => {
  //   if (state.personalInfo) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
};
