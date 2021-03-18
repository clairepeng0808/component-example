import {
  SET_MODAL_MODE,
  FETCH_COMPANY_LIST,
  FETCH_COMPANY_LIST_SUCCESS,
  FETCH_COMPANY_LIST_FAIL,
  FETCH_FAKE_COMPANY_LIST,
  FETCH_PARENT_ID,
  FETCH_PARENT_ID_SUCCESS,
  FETCH_PARENT_ID_FAIL,
  FETCH_PULL_DOMAINS,
  FETCH_PULL_DOMAINS_SUCCESS,
  FETCH_PULL_DOMAINS_FAIL,
  CREATE_COMPANY,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_FAIL,
  FETCH_COMPANY_BASE_INFO,
  FETCH_COMPANY_BASE_INFO_SUCCESS,
  FETCH_COMPANY_BASE_INFO_FAIL,
  SET_PARENT_ID_OPTIONS,
  PATCH_COMPANY_BASE_INFO,
  PATCH_COMPANY_BASE_INFO_SUCCESS,
  PATCH_COMPANY_BASE_INFO_FAIL,
  FETCH_COMPANY_CONTACTS,
  FETCH_COMPANY_CONTACTS_SUCCESS,
  FETCH_COMPANY_CONTACTS_FAIL,
  ADD_COMPANY_CONTACT,
  ADD_COMPANY_CONTACT_SUCCESS,
  ADD_COMPANY_CONTACT_FAIL,
  EDIT_COMPANY_CONTACT,
  EDIT_COMPANY_CONTACT_SUCCESS,
  EDIT_COMPANY_CONTACT_FAIL,
  DELETE_COMPANY_CONTACT,
  DELETE_COMPANY_CONTACT_SUCCESS,
  DELETE_COMPANY_CONTACT_FAIL,
  FETCH_COMPANY_SERVERS,
  FETCH_COMPANY_SERVERS_SUCCESS,
  FETCH_COMPANY_SERVERS_FAIL,
  ADD_COMPANY_SERVER,
  ADD_COMPANY_SERVER_SUCCESS,
  ADD_COMPANY_SERVER_FAIL,
  EDIT_COMPANY_SERVER,
  EDIT_COMPANY_SERVER_SUCCESS,
  EDIT_COMPANY_SERVER_FAIL,
  DELETE_COMPANY_SERVER,
  DELETE_COMPANY_SERVER_SUCCESS,
  DELETE_COMPANY_SERVER_FAIL,
  FETCH_PURCHASE_SPORTS,
  FETCH_PURCHASE_SPORTS_SUCCESS,
  FETCH_PURCHASE_SPORTS_FAIL,
  EDIT_PURCHASE_SPORTS,
  EDIT_PURCHASE_SPORTS_SUCCESS,
  EDIT_PURCHASE_SPORTS_FAIL,
  FETCH_PURCHASE_GAMES,
  FETCH_PURCHASE_GAMES_SUCCESS,
  FETCH_PURCHASE_GAMES_FAIL,
  EDIT_PURCHASE_GAMES,
  EDIT_PURCHASE_GAMES_SUCCESS,
  EDIT_PURCHASE_GAMES_FAIL,
  FETCH_PURCHASE_ADDON,
  FETCH_PURCHASE_ADDON_SUCCESS,
  FETCH_PURCHASE_ADDON_FAIL,
  EDIT_PURCHASE_ADDON,
  EDIT_PURCHASE_ADDON_SUCCESS,
  EDIT_PURCHASE_ADDON_FAIL,
  FETCH_STREAMING_MODE,
  FETCH_STREAMING_MODE_SUCCESS,
  FETCH_STREAMING_MODE_FAIL,
  ADD_PUSH_DOMAINS,
  ADD_PUSH_DOMAINS_SUCCESS,
  ADD_PUSH_DOMAINS_FAIL,
  PATCH_PUSH_DOMAINS,
  PATCH_PUSH_DOMAINS_SUCCESS,
  PATCH_PUSH_DOMAINS_FAIL,
  REMOVE_PUSH_DOMAINS,
  REMOVE_PUSH_DOMAINS_SUCCESS,
  REMOVE_PUSH_DOMAINS_FAIL,
  ADD_PULL_DOMAINS,
  ADD_PULL_DOMAINS_SUCCESS,
  ADD_PULL_DOMAINS_FAIL,
  PATCH_PULL_DOMAINS,
  PATCH_PULL_DOMAINS_SUCCESS,
  PATCH_PULL_DOMAINS_FAIL,
  REMOVE_PULL_DOMAINS,
  REMOVE_PULL_DOMAINS_SUCCESS,
  REMOVE_PULL_DOMAINS_FAIL,
  SWITCH_TO_PUSH_MODE,
  SWITCH_TO_PUSH_MODE_SUCCESS,
  SWITCH_TO_PUSH_MODE_FAIL,
  SWITCH_TO_PULL_MODE,
  SWITCH_TO_PULL_MODE_SUCCESS,
  SWITCH_TO_PULL_MODE_FAIL,
  SET_SHOW_MODAL,
  SET_COPY_MODAL,
  SET_SELECTED_ID,
  FETCH_DATA_CONFIG,
  FETCH_DATA_CONFIG_SUCCESS,
  FETCH_DATA_CONFIG_FAIL,
  SET_PURCHASE_ITEM_FORM_DATA,
  CHECK_CLEAN_FLOW,
  SET_CDNICP_FORM_DATA,
  SET_BASE_INFO_DATA,
  SET_CONTACT_SERVICE_DATA,
  SET_TAB_EVENT_KEY,
  SET_INNER_TAB_KEY,
  CLICK_COMPANY_INFO,
  RESET_API_FAIL_STATUS,
  RESET_MODAL,
} from '@Actions/companyListAction';

const initState = {
  selectedId: null,
  keyword: null,
  companyList: {}, // 打 API 拿到的商戶列表
  companyInfoData: {
    addOn: {}, // 加值購買品項資料列表
    games: { LOL: {}, CSGO: {}, KOG: {}, DOTA2: {}, OTHERS: {} }, // 電競購買品項資料列表
    sports: { SOC: {}, BAK: {}, OTHERS: {} }, // 體育購買品項資料列表
    baseInfo: {}, // 商戶基本信息
    contacts: { PROJ: [], TECH: [] }, // 聯絡人資料列表
    servers: { TEST: [], PROD: [] }, // 伺服器資料列表
    streamingMode: {}, // 視頻流模式
  }, // 打 API 拿到的商戶信息
  fail: null, // 打商戶列表 API 失敗
  errMsg: null, // 錯誤訊息
  success: null, // 打 api 成功
  modalMode: '', // 模式為 'add', 'edit', 'view', 'companyInfo'
  tabEventkey: 1, // 新增商戶內的步驟
  innerTabkey: 1, // 確認新增下的四個tab
  showModal: false, // 新增/編輯/瀏覽商戶資料的 modal
  copyModal: false, // 新增確認帳密 modal
  copyData: {
    // 新增確認的帳密資訊
    account: null,
    password: null,
    projectCode: null,
  },
  dataConfig: {
    parentId: [{ id: 45, nameCn: '量子脈動' }],
    callingCodes: [{ code: '86' }, { code: '886' }],
    cdns: [
      {
        cdnCode: 'ALI',
        nameCn: '阿里',
      },
      {
        cdnCode: 'WSU',
        nameCn: '网宿',
      },
      {
        cdnCode: 'OTH',
        nameCn: '其他',
      },
    ],
    domainRemoveReasons: [],
  }, // 新增商戶表單選項設定
  parentIdOptions: [],
  pullDomains: [], // 取得拉流列表
  formData: {
    addOn: {}, // 加值購買品項資料列表
    games: {}, // 電競購買品項資料列表
    sports: {}, // 體育購買品項資料列表
    baseInfo: {
      nameCn: '量子脈動',
      nameEn: 'Claire',
      alias: '山貓',
    }, // 商戶基本信息
    contacts: {
      PROJ: [
        {
          id: 1,
          name: 'Andy',
          email: 'claire@email.com',
          callingCode: '886',
          phoneNumber: '926633478',
          type: 'PROJ',
        },
      ],
      TECH: [
        {
          id: 2,
          name: 'Claire',
          email: 'claire@email.com',
          callingCode: '886',
          phoneNumber: '926633478',
          type: 'TECH',
        },
      ],
    }, // 聯絡人資料列表
    servers: {
      TEST: [
        { id: 3, ipAddress: '255.192.0.123', regionCode: 'TWN', type: 'TEST' },
      ],
      PROD: [
        { id: 4, ipAddress: '255.192.0.123', regionCode: 'TWN', type: 'PROD' },
      ],
    }, // 伺服器資料列表
    streamingMode: {
      serviceInChina: true,
      icpCertificate: true,
      cdnAdmin: true,
    }, // 視頻流模式資料
  }, // 新增商戶的表單回傳內容
  hasCleanFlow: true, // 是否有勾選乾淨流或是主播流
};

export default function companyList(state = initState, action) {
  switch (action.type) {
    // 取得商戶列表
    case FETCH_COMPANY_LIST:
      return state;
    case FETCH_COMPANY_LIST_SUCCESS:
      return {
        ...state,
        companyList: action.data.data,
        keyword: action.data.data.keyword,
        fail: null,
      };
    case FETCH_COMPANY_LIST_FAIL:
      return {
        ...state,
        companyList: {},
        keyword: null,
        fail: action,
      };

    // 取得商戶列表假資料
    case FETCH_FAKE_COMPANY_LIST:
      return {
        ...state,
        companyList: action.payload,
      };

    // 取得動態 ParentId
    case FETCH_PARENT_ID:
      return state;
    case FETCH_PARENT_ID_SUCCESS:
      return {
        ...state,
        dataConfig: {
          ...state.dataConfig,
          parentId: action.data.data,
        },
      };
    case FETCH_PARENT_ID_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得動態 拉流列表
    case FETCH_PULL_DOMAINS:
      return state;
    case FETCH_PULL_DOMAINS_SUCCESS:
      return {
        ...state,
        pullDomains: action.data.data.data,
      };
    case FETCH_PULL_DOMAINS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得靜態設置
    case FETCH_DATA_CONFIG:
      return state;
    case FETCH_DATA_CONFIG_SUCCESS:
      return {
        ...state,
        dataConfig: {
          ...state.dataConfig,
          cdns: action.data.data.cdns,
          regions: action.data.data.regions,
          callingCodes: action.data.data.callingCodes,
          domainRemoveReasons: action.data.data.domainRemoveReasons,
        },
      };
    case FETCH_DATA_CONFIG_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 新增商戶
    case CREATE_COMPANY:
      return state;
    case CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        success: true,
        copyData: {
          account: action.data.data.account,
          password: action.data.data.password,
          projectCode: action.data.data.projectCode,
        },
      };
    case CREATE_COMPANY_FAIL:
      return {
        ...state,
        fail: action,
        copyData: {
          account: null,
          password: null,
          projectCode: null,
        },
        errMsg: action.data.message,
      };

    // 取得商戶基本資料
    case FETCH_COMPANY_BASE_INFO:
      return state;
    case FETCH_COMPANY_BASE_INFO_SUCCESS:
      return {
        ...state,
        companyInfoData: {
          ...state.companyInfoData,
          baseInfo: action.data.data,
        },
      };
    case FETCH_COMPANY_BASE_INFO_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 父商戶選項設定
    case SET_PARENT_ID_OPTIONS: {
      return {
        ...state,
        parentIdOptions: action.payload,
      };
    }
    // 修改商戶基本資料
    case PATCH_COMPANY_BASE_INFO:
      return state;
    case PATCH_COMPANY_BASE_INFO_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case PATCH_COMPANY_BASE_INFO_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得商戶聯絡人
    case FETCH_COMPANY_CONTACTS:
      return state;
    case FETCH_COMPANY_CONTACTS_SUCCESS:
      return {
        ...state,
        companyInfoData: {
          ...state.companyInfoData,
          contacts: action.data.data,
        },
      };
    case FETCH_COMPANY_CONTACTS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 新增商戶聯絡人
    case ADD_COMPANY_CONTACT:
      return state;
    case ADD_COMPANY_CONTACT_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case ADD_COMPANY_CONTACT_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 編輯商戶聯絡人
    case EDIT_COMPANY_CONTACT:
      return state;
    case EDIT_COMPANY_CONTACT_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case EDIT_COMPANY_CONTACT_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 刪除商戶聯絡人
    case DELETE_COMPANY_CONTACT:
      return state;
    case DELETE_COMPANY_CONTACT_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case DELETE_COMPANY_CONTACT_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得商戶服務器環境
    case FETCH_COMPANY_SERVERS:
      return state;
    case FETCH_COMPANY_SERVERS_SUCCESS:
      return {
        ...state,
        companyInfoData: {
          ...state.companyInfoData,
          servers: action.data.data,
        },
      };
    case FETCH_COMPANY_SERVERS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 新增商戶服務器環境
    case ADD_COMPANY_SERVER:
      return state;
    case ADD_COMPANY_SERVER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case ADD_COMPANY_SERVER_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 編輯商戶服務器環境
    case EDIT_COMPANY_SERVER:
      return state;
    case EDIT_COMPANY_SERVER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case EDIT_COMPANY_SERVER_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 刪除商戶服務器環境
    case DELETE_COMPANY_SERVER:
      return state;
    case DELETE_COMPANY_SERVER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case DELETE_COMPANY_SERVER_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得商戶購買品項 - 體育
    case FETCH_PURCHASE_SPORTS:
      return state;
    case FETCH_PURCHASE_SPORTS_SUCCESS:
      return {
        ...state,
        companyInfoData: {
          ...state.companyInfoData,
          sports: action.data.data,
        },
      };
    case FETCH_PURCHASE_SPORTS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 編輯商戶購買品項 - 體育
    case EDIT_PURCHASE_SPORTS:
      return state;
    case EDIT_PURCHASE_SPORTS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case EDIT_PURCHASE_SPORTS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得商戶購買品項 - 電競
    case FETCH_PURCHASE_GAMES:
      return state;
    case FETCH_PURCHASE_GAMES_SUCCESS:
      return {
        ...state,
        companyInfoData: {
          ...state.companyInfoData,
          games: action.data.data,
        },
      };
    case FETCH_PURCHASE_GAMES_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 編輯商戶購買品項 - 電競
    case EDIT_PURCHASE_GAMES:
      return state;
    case EDIT_PURCHASE_GAMES_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case EDIT_PURCHASE_GAMES_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得商戶購買品項 - 加值內容
    case FETCH_PURCHASE_ADDON:
      return state;
    case FETCH_PURCHASE_ADDON_SUCCESS:
      return {
        ...state,
        companyInfoData: {
          ...state.companyInfoData,
          addOn: action.data.data,
        },
      };
    case FETCH_PURCHASE_ADDON_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 編輯商戶購買品項 - 加值內容
    case EDIT_PURCHASE_ADDON:
      return state;
    case EDIT_PURCHASE_ADDON_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case EDIT_PURCHASE_ADDON_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 取得視頻流模式
    case FETCH_STREAMING_MODE:
      return state;
    case FETCH_STREAMING_MODE_SUCCESS:
      return {
        ...state,
        companyInfoData: {
          ...state.companyInfoData,
          streamingMode: action.data.data,
        },
      };
    case FETCH_STREAMING_MODE_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 新增商戶推流域名
    case ADD_PUSH_DOMAINS:
      return state;
    case ADD_PUSH_DOMAINS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case ADD_PUSH_DOMAINS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 編輯商戶推流域名
    case PATCH_PUSH_DOMAINS:
      return state;
    case PATCH_PUSH_DOMAINS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case PATCH_PUSH_DOMAINS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 刪除商戶推流域名
    case REMOVE_PUSH_DOMAINS:
      return state;
    case REMOVE_PUSH_DOMAINS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case REMOVE_PUSH_DOMAINS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 新增拉流域名
    case ADD_PULL_DOMAINS:
      return state;
    case ADD_PULL_DOMAINS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case ADD_PULL_DOMAINS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 編輯拉流域名
    case PATCH_PULL_DOMAINS:
      return state;
    case PATCH_PULL_DOMAINS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case PATCH_PULL_DOMAINS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 刪除拉流域名
    case REMOVE_PULL_DOMAINS:
      return state;
    case REMOVE_PULL_DOMAINS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case REMOVE_PULL_DOMAINS_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 視頻流模式切換為推流
    case SWITCH_TO_PUSH_MODE:
      return state;
    case SWITCH_TO_PUSH_MODE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case SWITCH_TO_PUSH_MODE_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    // 視頻流模式切換為拉流
    case SWITCH_TO_PULL_MODE:
      return state;
    case SWITCH_TO_PULL_MODE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case SWITCH_TO_PULL_MODE_FAIL:
      return {
        ...state,
        fail: action,
        errMsg: action.data.message,
      };

    case SET_MODAL_MODE:
      return {
        ...state,
        modalMode: action.payload,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case SET_COPY_MODAL:
      return {
        ...state,
        copyModal: action.payload,
      };
    case SET_SELECTED_ID:
      return {
        ...state,
        selectedId: action.payload,
      };
    case SET_TAB_EVENT_KEY:
      return {
        ...state,
        tabEventkey: action.payload,
      };
    case SET_INNER_TAB_KEY:
      return {
        ...state,
        innerTabkey: action.payload,
      };

    case SET_BASE_INFO_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          baseInfo: action.payload,
        },
      };
    case SET_CONTACT_SERVICE_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          contacts: action.payload.contacts,
          servers: action.payload.servers,
        },
      };
    case SET_PURCHASE_ITEM_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          sports: {
            SOC: action.payload.sports.soc,
            BAK: action.payload.sports.bak,
            OTHERS: action.payload.sports.otherSports,
          },
          games: {
            LOL: action.payload.games.lol,
            CSGO: action.payload.games.cs,
            KOG: action.payload.games.kog,
            DOTA2: action.payload.games.dota,
            OTHERS: action.payload.games.otherGames,
          },
          addOn: action.payload.addOn,
        },
      };
    case CHECK_CLEAN_FLOW:
      return {
        ...state,
        hasCleanFlow: action.payload,
      };
    case SET_CDNICP_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          streamingMode: action.payload,
        },
      };

    case CLICK_COMPANY_INFO:
      return {
        ...state,
        modalMode: action.payload.status,
        showModal: true,
        selectedRow: action.payload.row,
      };

    case RESET_API_FAIL_STATUS: {
      return {
        ...state,
        fail: null,
        errMsg: null,
      };
    }

    case RESET_MODAL:
      return {
        ...state,
        formData: initState.formData,
        localFormData: initState.localFormData,
        tabEventkey: initState.tabEventkey,
        innetTabkey: initState.innerTabkey,
        fail: initState.fail,
        errMsg: initState.errMsg,
      };
    default:
      return state;
  }
}
