import Constant from '../Constants';
import ContactsAPI from '../api/ContactsAPI';
import Constants from '../Constants';

export default {
    [Constant.ADD_CONTACT]: (store) => {
        ContactsAPI.addContact(store.state.contact)
            .then((response) => {
                if (response.data.status == "success") {
                    store.dispatch(Constant.CANCEL_FORM);
                    store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
                } else {
                    console.log("연락처 추가 실패 : " + response.data);
                }
            })
    },
    [Constants.UPDATE_CONTACT]: (store) => {
        ContactsAPI.updateContact(store.state.contact)
            .then((response) => {
                if (response.data.status == "success") {
                    store.dispatch(Constant.CANCEL_FORM);
                    store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
                } else {
                    console.log("연락처 수정 실패 : " + response.data);
                }
            })
    },
    [Constant.FETCH_CONTACTS]: (store, payload) => {
        var pageno;
        if (typeof payload == "undefined" || typeof payload.pageno == "undefined") {
            pageno = 1;
        } else pageno = payload.pageno;
        var pagesize = store.state.contactlist.pagesize;

        ContactsAPI.fetchContacts(pageno, pagesize)
            .then((response) => {
                store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
            })
    },
    [Constant.CANCEL_FORM]: (store) => {
        store.commit(Constant.CANCEL_FORM);
    },
    [Constant.DELETE_CONTACT]: (store, payload) => {
        var currentPageNo = store.state.contactlist.pageno;
        ContactsAPI.deleteContact(payload.no)
            .then((response) => {
                store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
            })
    },
    [Constant.ADD_FORM]: (store) => {
        store.commit(Constant.ADD_FORM);
    },
    [Constant.UPDATE_FORM]: (store, payload) => {
        ContactsAPI.fetchContactOne(payload.no)
            .then((response) => {
                store.commit(Constant.UPDATE_FORM, { contact: response.data });
            })
    }
}