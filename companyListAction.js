import { data } from 'jquery';

export const SET_MODAL_MODE = 'SET_MODAL_MODE';
export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const SET_COPY_MODAL = 'SET_COPY_MODAL';
export const SET_SELECTED_ID = 'SET_SELECTED_ID';
export const SET_TAB_EVENT_KEY = 'SET_TAB_EVENT_KEY';
export const SET_INNER_TAB_KEY = 'SET_INNER_TAB_KEY';

// 新增商戶的資料存到 store
export const SET_BASE_INFO_DATA = 'SET_BASE_INFO_DATA';
export const SET_CONTACT_SERVICE_DATA = 'SET_CONTACT_SERVICE_DATA';
export const SET_PURCHASE_ITEM_FORM_DATA = 'SET_PURCHASE_ITEM_FORM_DATA';
export const SET_CDNICP_FORM_DATA = 'SET_CDNICP_FORM_DATA';
export const CHECK_CLEAN_FLOW = 'CHECK_CLEAN_FLOW';

// 靜態設置
export const FETCH_DATA_CONFIG = 'FETCH_DATA_CONFIG';
export const FETCH_DATA_CONFIG_SUCCESS = 'FETCH_DATA_CONFIG_SUCCESS';
export const FETCH_DATA_CONFIG_FAIL = 'FETCH_DATA_CONFIG_FAIL';

// 打 API 取得動態資料
export const FETCH_COMPANY_LIST = 'FETCH_COMPANY_LIST';
export const FETCH_COMPANY_LIST_SUCCESS = 'FETCH_COMPANY_LIST_SUCCESS';
export const FETCH_COMPANY_LIST_FAIL = 'FETCH_COMPANY_LIST_FAIL';
export const FETCH_FAKE_COMPANY_LIST = 'FETCH_FAKE_COMPANY_LIST';
export const FETCH_PARENT_ID = 'FETCH_PARENT_ID';
export const FETCH_PARENT_ID_SUCCESS = 'FETCH_PARENT_ID_SUCCESS';
export const FETCH_PARENT_ID_FAIL = 'FETCH_PARENT_ID_FAIL';

// 取得拉流域名列表
export const FETCH_PULL_DOMAINS = 'FETCH_PULL_DOMAINS';
export const FETCH_PULL_DOMAINS_SUCCESS = 'FETCH_PULL_DOMAINS_SUCCESS';
export const FETCH_PULL_DOMAINS_FAIL = 'FETCH_PULL_DOMAINS_FAIL';

// 取得推流域名列表
export const FETCH_PUSH_DOMAINS = 'FETCH_PUSH_DOMAINS';
export const FETCH_PUSH_DOMAINS_SUCCESS = 'FETCH_PUSH_DOMAINS_SUCCESS';
export const FETCH_PUSH_DOMAINS_FAIL = 'FETCH_PUSH_DOMAINS_FAIL';

// 新增商戶
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS';
export const CREATE_COMPANY_FAIL = 'CREATE_COMPANY_FAIL';

// 取得商戶基本資料
export const FETCH_COMPANY_BASE_INFO = 'FETCH_COMPANY_BASE_INFO';
export const FETCH_COMPANY_BASE_INFO_SUCCESS =
  'FETCH_COMPANY_BASE_INFO_SUCCESS';
export const FETCH_COMPANY_BASE_INFO_FAIL = 'FETCH_COMPANY_BASE_INFO_FAIL';

// 編輯商戶 - 父商戶的選項需要特別處理
export const SET_PARENT_ID_OPTIONS = 'SET_PARENT_ID_OPTIONS';

// 修改商戶基本資料
export const PATCH_COMPANY_BASE_INFO = 'PATCH_COMPANY_BASE_INFO';
export const PATCH_COMPANY_BASE_INFO_SUCCESS =
  'PATCH_COMPANY_BASE_INFO_SUCCESS';
export const PATCH_COMPANY_BASE_INFO_FAIL = 'PATCH_COMPANY_BASE_INFO_FAIL';

// 取得商戶聯絡人
export const FETCH_COMPANY_CONTACTS = 'FETCH_COMPANY_CONTACTS';
export const FETCH_COMPANY_CONTACTS_SUCCESS = 'FETCH_COMPANY_CONTACTS_SUCCESS';
export const FETCH_COMPANY_CONTACTS_FAIL = 'FETCH_COMPANY_CONTACTS_FAIL';

// 新增商戶聯絡人
export const ADD_COMPANY_CONTACT = 'ADD_COMPANY_CONTACT';
export const ADD_COMPANY_CONTACT_SUCCESS = 'ADD_COMPANY_CONTACT_SUCCESS';
export const ADD_COMPANY_CONTACT_FAIL = 'ADD_COMPANY_CONTACT_FAIL';

// 編輯商戶聯絡人
export const EDIT_COMPANY_CONTACT = 'EDIT_COMPANY_CONTACT';
export const EDIT_COMPANY_CONTACT_SUCCESS = 'EDIT_COMPANY_CONTACT_SUCCESS';
export const EDIT_COMPANY_CONTACT_FAIL = 'EDIT_COMPANY_CONTACT_FAIL';

// 刪除商戶聯絡人
export const DELETE_COMPANY_CONTACT = 'DELETE_COMPANY_CONTACT';
export const DELETE_COMPANY_CONTACT_SUCCESS = 'DELETE_COMPANY_CONTACT_SUCCESS';
export const DELETE_COMPANY_CONTACT_FAIL = 'DELETE_COMPANY_CONTACT_FAIL';

// 取得商戶服務器環境
export const FETCH_COMPANY_SERVERS = 'FETCH_COMPANY_SERVERS';
export const FETCH_COMPANY_SERVERS_SUCCESS = 'FETCH_COMPANY_SERVERS_SUCCESS';
export const FETCH_COMPANY_SERVERS_FAIL = 'FETCH_COMPANY_SERVERS_FAIL';

// 新增商戶服務器環境
export const ADD_COMPANY_SERVER = 'ADD_COMPANY_SERVER';
export const ADD_COMPANY_SERVER_SUCCESS = 'ADD_COMPANY_SERVER_SUCCESS';
export const ADD_COMPANY_SERVER_FAIL = 'ADD_COMPANY_SERVER_FAIL';

// 編輯商戶服務器環境
export const EDIT_COMPANY_SERVER = 'EDIT_COMPANY_SERVER';
export const EDIT_COMPANY_SERVER_SUCCESS = 'EDIT_COMPANY_SERVER_SUCCESS';
export const EDIT_COMPANY_SERVER_FAIL = 'EDIT_COMPANY_SERVER_FAIL';

// 刪除商戶服務器環境
export const DELETE_COMPANY_SERVER = 'DELETE_COMPANY_SERVER';
export const DELETE_COMPANY_SERVER_SUCCESS = 'DELETE_COMPANY_SERVER_SUCCESS';
export const DELETE_COMPANY_SERVER_FAIL = 'DELETE_COMPANY_SERVER_FAIL';

// 取得商戶購買品項 - 體育
export const FETCH_PURCHASE_SPORTS = 'FETCH_PURCHASE_SPORTS';
export const FETCH_PURCHASE_SPORTS_SUCCESS = 'FETCH_PURCHASE_SPORTS_SUCCESS';
export const FETCH_PURCHASE_SPORTS_FAIL = 'FETCH_PURCHASE_SPORTS_FAIL';

// 編輯商戶購買品項 - 體育
export const EDIT_PURCHASE_SPORTS = 'EDIT_PURCHASE_SPORTS';
export const EDIT_PURCHASE_SPORTS_SUCCESS = 'EDIT_PURCHASE_SPORTS_SUCCESS';
export const EDIT_PURCHASE_SPORTS_FAIL = 'EDIT_PURCHASE_SPORTS_FAIL';

// 取得商戶購買品項 - 電競
export const FETCH_PURCHASE_GAMES = 'FETCH_PURCHASE_GAMES';
export const FETCH_PURCHASE_GAMES_SUCCESS = 'FETCH_PURCHASE_GAMES_SUCCESS';
export const FETCH_PURCHASE_GAMES_FAIL = 'FETCH_PURCHASE_GAMES_FAIL';

// 編輯商戶購買品項 - 電競
export const EDIT_PURCHASE_GAMES = 'EDIT_PURCHASE_GAMES';
export const EDIT_PURCHASE_GAMES_SUCCESS = 'EDIT_PURCHASE_GAMES_SUCCESS';
export const EDIT_PURCHASE_GAMES_FAIL = 'EDIT_PURCHASE_GAMES_FAIL';

// 取得商戶購買品項 - 加值內容
export const FETCH_PURCHASE_ADDON = 'FETCH_PURCHASE_ADDON';
export const FETCH_PURCHASE_ADDON_SUCCESS = 'FETCH_PURCHASE_ADDON_SUCCESS';
export const FETCH_PURCHASE_ADDON_FAIL = 'FETCH_PURCHASE_ADDON_FAIL';

// 編輯商戶購買品項 - 加值內容
export const EDIT_PURCHASE_ADDON = 'EDIT_PURCHASE_ADDON';
export const EDIT_PURCHASE_ADDON_SUCCESS = 'EDIT_PURCHASE_ADDON_SUCCESS';
export const EDIT_PURCHASE_ADDON_FAIL = 'EDIT_PURCHASE_ADDON_FAIL';

// 取得視頻流模式
export const FETCH_STREAMING_MODE = 'FETCH_STREAMING_MODE';
export const FETCH_STREAMING_MODE_SUCCESS = 'FETCH_STREAMING_MODE_SUCCESS';
export const FETCH_STREAMING_MODE_FAIL = 'FETCH_STREAMING_MODE_FAIL';

// 新增商戶推流域名
export const ADD_PUSH_DOMAINS = 'ADD_PUSH_DOMAINS';
export const ADD_PUSH_DOMAINS_SUCCESS = 'ADD_PUSH_DOMAINS_SUCCESS';
export const ADD_PUSH_DOMAINS_FAIL = 'ADD_PUSH_DOMAINS_FAIL';

// 修改商戶推流域名
export const PATCH_PUSH_DOMAINS = 'PATCH_PUSH_DOMAINS';
export const PATCH_PUSH_DOMAINS_SUCCESS = 'PATCH_PUSH_DOMAINS_SUCCESS';
export const PATCH_PUSH_DOMAINS_FAIL = 'PATCH_PUSH_DOMAINS_FAIL';

// 刪除商戶推流域名
export const REMOVE_PUSH_DOMAINS = 'REMOVE_PUSH_DOMAINS';
export const REMOVE_PUSH_DOMAINS_SUCCESS = 'REMOVE_PUSH_DOMAINS_SUCCESS';
export const REMOVE_PUSH_DOMAINS_FAIL = 'REMOVE_PUSH_DOMAINS_FAIL';

// 新增商戶拉流域名
export const ADD_PULL_DOMAINS = 'ADD_PULL_DOMAINS';
export const ADD_PULL_DOMAINS_SUCCESS = 'ADD_PULL_DOMAINS_SUCCESS';
export const ADD_PULL_DOMAINS_FAIL = 'ADD_PULL_DOMAINS_FAIL';

// 修改商戶拉流域名
export const PATCH_PULL_DOMAINS = 'PATCH_PULL_DOMAINS';
export const PATCH_PULL_DOMAINS_SUCCESS = 'PATCH_PULL_DOMAINS_SUCCESS';
export const PATCH_PULL_DOMAINS_FAIL = 'PATCH_PULL_DOMAINS_FAIL';

// 刪除商戶拉流域名
export const REMOVE_PULL_DOMAINS = 'REMOVE_PULL_DOMAINS';
export const REMOVE_PULL_DOMAINS_SUCCESS = 'REMOVE_PULL_DOMAINS_SUCCESS';
export const REMOVE_PULL_DOMAINS_FAIL = 'REMOVE_PULL_DOMAINS_FAIL';

// 切換推流模式
export const SWITCH_TO_PUSH_MODE = 'SWITCH_TO_PUSH_MODE';
export const SWITCH_TO_PUSH_MODE_SUCCESS = 'SWITCH_TO_PUSH_MODE_SUCCESS';
export const SWITCH_TO_PUSH_MODE_FAIL = 'SWITCH_TO_PUSH_MODE_FAIL';

// 切換拉流模式
export const SWITCH_TO_PULL_MODE = 'SWITCH_TO_PULL_MODE';
export const SWITCH_TO_PULL_MODE_SUCCESS = 'SWITCH_TO_PULL_MODE_SUCCESS';
export const SWITCH_TO_PULL_MODE_FAIL = 'SWITCH_TO_PULL_MODE_FAIL';

// 編輯或檢視商戶個別信息
export const CLICK_COMPANY_INFO = 'CLICK_COMPANY_INFO';

// api 錯誤訊息視窗開關
export const RESET_API_FAIL_STATUS = 'RESET_API_FAIL_STATUS';

// 關閉 modal
export const RESET_MODAL = 'RESET_MODAL';

export function fetchCompanyList(keyword, current = 1, size = 30) {
  let url = '/api/v1/merchants?current=' + current + '&size=' + size;
  if (keyword && keyword.get('searchKey')) {
    url += '&keyword=' + keyword.get('searchKey');
  }
  return {
    type: FETCH_COMPANY_LIST,
    ajax: {
      url,
      method: 'get',
    },
  };
}

export function fetchFakeCompanyList(data) {
  return {
    type: FETCH_FAKE_COMPANY_LIST,
    payload: data,
  };
}

export function setModalMode(modeName) {
  return {
    type: SET_MODAL_MODE,
    payload: modeName,
  };
}

export function setShowModal(status) {
  return {
    type: SET_SHOW_MODAL,
    payload: status,
  };
}

export function setCopyModal(status) {
  return {
    type: SET_COPY_MODAL,
    payload: status,
  };
}

export function setSelectedId(merchantId) {
  return {
    type: SET_SELECTED_ID,
    payload: merchantId,
  };
}

export function fetchDataConfig() {
  return {
    type: FETCH_DATA_CONFIG,
    ajax: {
      url: '/api/v1/settings',
      method: 'get',
    },
  };
}

export function fetchParentId() {
  return {
    type: FETCH_PARENT_ID,
    ajax: {
      url: '/api/v1/merchant/parents',
      method: 'get',
    },
  };
}

export function fetchPullDomains(cdn, status, ids, current = 1, size = 10) {
  let url = `/api/v1/domain/pullDomains?current=${current}&size=${size}`;
  if (cdn) {
    url += `&cdn=${cdn}`;
  } else if (status) {
    url += `&status=${status}`;
  } else if (ids) {
    url += `&ids=${ids}`;
  }
  return {
    type: FETCH_PULL_DOMAINS,
    ajax: {
      url,
      method: 'get',
    },
  };
}

export function fetchPushDomains(current = 1, size = 10) {
  return {
    type: FETCH_PUSH_DOMAINS,
    ajax: {
      url: `/api/v1/domain/pushDomains?current=${current}&size=${size}`,
      method: 'get',
    },
  };
}

export function createCompany(data) {
  return {
    type: CREATE_COMPANY,
    ajax: {
      url: `/api/v1/merchant`,
      method: 'post',
      data: data,
    },
    dispatch: fetchCompanyList.bind(null),
  };
}

export function fetchCompanyBaseInfo(merchantId) {
  return {
    type: FETCH_COMPANY_BASE_INFO,
    ajax: {
      url: `/api/v1/merchant/${merchantId}`,
      method: 'get',
    },
  };
}

export function setParentIdOptions(options) {
  return {
    type: SET_PARENT_ID_OPTIONS,
    payload: options,
  };
}

export const editCompanyBaseInfo = (merchantId, data) => {
  return {
    type: PATCH_COMPANY_BASE_INFO,
    ajax: {
      url: `/api/v1/merchant/${merchantId}`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchCompanyBaseInfo.bind(null, merchantId),
  };
};

export function fetchCompanyContacts(merchantId) {
  return {
    type: FETCH_COMPANY_CONTACTS,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/contacts`,
      method: 'get',
    },
  };
}

export function addCompanyContact(merchantId, data) {
  return {
    type: ADD_COMPANY_CONTACT,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/contact`,
      method: 'post',
      data: data,
    },
    dispatch: fetchCompanyContacts.bind(null, merchantId),
  };
}

export function editCompanyContact(contactId, data, merchantId) {
  return {
    type: EDIT_COMPANY_CONTACT,
    ajax: {
      url: `/api/v1/merchant/contact/${contactId}`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchCompanyContacts.bind(null, merchantId),
  };
}

export function deleteCompanyContact(contactId, merchantId) {
  return {
    type: DELETE_COMPANY_CONTACT,
    ajax: {
      url: `/api/v1/merchant/contact/${contactId}`,
      method: 'delete',
    },
    dispatch: fetchCompanyContacts.bind(null, merchantId),
  };
}

export function fetchCompanyServers(merchantId) {
  return {
    type: FETCH_COMPANY_SERVERS,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/servers`,
      method: 'get',
    },
  };
}

export function addCompanyServer(merchantId, data) {
  return {
    type: ADD_COMPANY_SERVER,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/server`,
      method: 'post',
      data: data,
    },
    dispatch: fetchCompanyServers.bind(null, merchantId),
  };
}

export function editCompanyServer(serverId, data, merchantId) {
  return {
    type: EDIT_COMPANY_SERVER,
    ajax: {
      url: `/api/v1/merchant/server/${serverId}`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchCompanyServers.bind(null, merchantId),
  };
}

export function deleteCompanyServer(serverId, merchantId) {
  return {
    type: DELETE_COMPANY_SERVER,
    ajax: {
      url: `/api/v1/merchant/server/${serverId}`,
      method: 'delete',
    },
    dispatch: fetchCompanyServers.bind(null, merchantId),
  };
}

export function fetchPurchaseSports(merchantId) {
  return {
    type: FETCH_PURCHASE_SPORTS,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/purchaseSports`,
      method: 'get',
    },
  };
}

export function editPurchaseSports(data, merchantId) {
  return {
    type: EDIT_PURCHASE_SPORTS,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/purchaseSports`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchPurchaseSports.bind(null, merchantId),
  };
}

export function fetchPurchaseGames(merchantId) {
  return {
    type: FETCH_PURCHASE_GAMES,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/purchaseGames`,
      method: 'get',
    },
  };
}

export function editPurchaseGames(data, merchantId) {
  return {
    type: EDIT_PURCHASE_GAMES,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/purchaseGames`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchPurchaseGames.bind(null, merchantId),
  };
}

export function fetchPurchaseAddOn(merchantId) {
  return {
    type: FETCH_PURCHASE_ADDON,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/purchaseAddOn`,
      method: 'get',
    },
  };
}

export function editPurchaseAddOn(data, merchantId) {
  return {
    type: EDIT_PURCHASE_ADDON,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/purchaseAddOns`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchPurchaseAddOn.bind(null, merchantId),
  };
}

export function fetchStreamingMode(merchantId) {
  return {
    type: FETCH_STREAMING_MODE,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/streamingMode`,
      method: 'get',
    },
  };
}

export function addPullDomains(merchantId, data) {
  return {
    type: ADD_PULL_DOMAINS,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/pullDomain`,
      method: 'post',
      data: data,
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function patchPullDomains(pullDomainId, data, merchantId) {
  return {
    type: PATCH_PULL_DOMAINS,
    ajax: {
      url: `/api/v1/merchant/pullDomain/${pullDomainId}`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function removePullDomains(pullDomainId, data, merchantId) {
  return {
    type: REMOVE_PULL_DOMAINS,
    ajax: {
      url: `/api/v1/merchant/pullDomain/${pullDomainId}`,
      method: 'delete',
      data: data,
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function addPushDomain(merchantId, data) {
  return {
    type: ADD_PUSH_DOMAINS,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/pushDomain`,
      method: 'post',
      data: data,
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function patchPushDomain(pushDomainId, data, merchantId) {
  return {
    type: PATCH_PUSH_DOMAINS,
    ajax: {
      url: `/api/v1/merchant/pushDomain/${pushDomainId}`,
      method: 'patch',
      data: data,
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function removePushDomain(pushDomainId, data, merchantId) {
  return {
    type: REMOVE_PUSH_DOMAINS,
    ajax: {
      url: `/api/v1/merchant/pushDomain/${pushDomainId}`,
      method: 'delete',
      data: data,
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function switchToPushMode(merchantId) {
  return {
    type: SWITCH_TO_PUSH_MODE,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/streamingMode/push`,
      method: 'put',
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function switchToPullMode(merchantId) {
  return {
    type: SWITCH_TO_PULL_MODE,
    ajax: {
      url: `/api/v1/merchant/${merchantId}/streamingMode/pull`,
      method: 'put',
    },
    dispatch: fetchStreamingMode.bind(null, merchantId),
  };
}

export function clickCompanyInfo(status, row) {
  return {
    type: CLICK_COMPANY_INFO,
    payload: { status, row },
  };
}

export function setBaseInfoData(baseInfo) {
  return {
    type: SET_BASE_INFO_DATA,
    payload: baseInfo,
  };
}

export function setContactServiceData(contacts, servers) {
  return {
    type: SET_CONTACT_SERVICE_DATA,
    payload: { contacts, servers },
  };
}

export const setPurchaseItemFormData = (sports, games, addOn) => ({
  type: SET_PURCHASE_ITEM_FORM_DATA,
  payload: {
    sports,
    games,
    addOn,
  },
});

export const checkCleanFlow = (clean) => ({
  type: CHECK_CLEAN_FLOW,
  payload: clean,
});

export function setCdnIcpFormData(streamingMode) {
  return {
    type: SET_CDNICP_FORM_DATA,
    payload: streamingMode,
  };
}

export const setTabEventkey = (tabEventkey) => ({
  type: SET_TAB_EVENT_KEY,
  payload: tabEventkey,
});

export const setInnerTabkey = (innerTabkey) => ({
  type: SET_INNER_TAB_KEY,
  payload: innerTabkey,
});

export const resetApiFailStatus = () => ({
  type: RESET_API_FAIL_STATUS,
});

export const resetModal = () => ({
  type: RESET_MODAL,
});
