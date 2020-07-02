import Constants from '../Constants.js'

export default {
    [Constants.FETCH_CONTACTS]: function(state, payload) {
        state.contactlist = payload.contactlist;
    },
    [Constants.ADD_FORM]: function(state) {
        state.currentView = "contactForm";
        state.mode = "add";
        state.contact = { no: "", name: "", tel: '', address: '', photo: '' };
    },
    [Constants.UPDATE_FORM]: function(state, payload) {
        state.currentView = "contactForm";
        state.mode = "update";
        state.contact = payload.contact;
    },
    [Constants.CANCEL_FORM]: function(state) {
        state.currentView = null;
    },
}