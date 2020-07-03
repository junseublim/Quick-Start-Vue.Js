//상태를 변화시키는 작업의 목록을 상수로 작성하면 편리하다

export default {
    FETCH_CONTACTS: "fetchContacts", //연락처 조회
    ADD_CONTACT: "addContact", //연락처 추가
    UPDATE_CONTACT: "updateContact", //연락처 수정
    FETCH_CONTACT_ONE: "fetchContactOne",
    UPDATE_PHOTO: "updatePhoto", //사진 수정
    DELETE_CONTACT: "deleteContact", //연락처 삭제
    INITIALIZE_CONTACT_ONE: "initializeContactOne"
}