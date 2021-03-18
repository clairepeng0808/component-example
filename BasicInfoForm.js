import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import {
  setShowModal,
  setBaseInfoData,
  setModalMode,
  editCompanyBaseInfo,
} from '@Actions/companyListAction';
import BasicButton from '@Basics/BasicButton';
import BasicDatePicker from '@/components/basics/BasicDatePicker';
import BasicSelect2 from '@Basics/BasicsSelect2';
import Input from '@Basics/Input';
import moment from 'moment';
import dateTime from '@/utils/dateTime';
import WarningPopup from '@Basics/WarningPopup';
import {
  StyledNextButtonWrapper,
  StyledButtonWrapper,
} from '@Containers/CompanyTabContents';

const isEmpty = (obj) => Object.keys(obj).length === 0;

const BasicInfoForm = ({
  goToNextTab,
  setCanChangeTab,
  showSaveReminder,
  setShowSaveReminder,
}) => {
  const {
    register,
    errors,
    handleSubmit,
    formState,
    reset,
    control,
    setValue,
    watch,
  } = useForm({ mode: 'onChange' });

  const dispatch = useDispatch();

  // react-hook-form 相關
  const { isValid, dirtyFields } = formState; // form 是否有錯誤或異動的欄位
  const startTimeValue = watch('startTime'); // 監測開始時間欄位，以設定結束日期的限制

  const tabEventkey = useSelector((state) => state.companyList.tabEventkey); // 新增商戶內部的tabs
  const modalMode = useSelector((state) => state.companyList.modalMode); // 目前模式：add, edit, view,companyInfo
  const selectedId = useSelector((state) => state.companyList.selectedId); // 使用者點選要編輯/檢視的商戶Id
  const [disableStartTime, setDisableStartTime] = useState(false); // 開始時間大於現在時間時，disable 開始時間欄位
  const [endDateLimit, setEndDateLimit] = useState(null); // 設定結束日期的限制

  // parent Id 為動態設置 需要打 API 取得，前一層先處理成 react select options 格式
  const parentIdOptions = useSelector(
    (state) => state.companyList.parentIdOptions
  );

  // 確認新增 後台 Store 暫存的商戶資訊
  const storeBaseInfo = useSelector(
    (state) => state.companyList.formData.baseInfo
  );

  // 後台打 API 得到的商戶資訊
  const initBaseInfo = useSelector(
    (state) => state.companyList.companyInfoData.baseInfo
  );

  // 編輯商戶 - 打編輯api前要與api值做比對
  const [apiData, setApiData] = useState(null);

  // 編輯商戶 - 切換tab前要先儲存
  const [reminderMsg, setReminderMsg] = useState('');

  // 各模式設定
  const isAdd = modalMode === 'add' && tabEventkey !== 5; // 新增商戶，非確認新增頁面
  const isConfirm = modalMode === 'add' && tabEventkey === 5; // 新增商戶，確認新增頁面
  const isView = modalMode === 'view'; // 檢視商戶
  const isEdit = modalMode === 'edit'; // 編輯商戶
  const isCompanyInfo = modalMode === 'companyInfo'; // 商戶中台

  // 不同模式下樣式，需要 grid 的 class 才需要 render function
  const renderFormGroupClassName = () => {
    switch (modalMode) {
      case 'companyInfo':
        return ['col-md-6', '', 'col-md-6'];
      case 'add':
        if (tabEventkey === 5) {
          return ['col-md-4', 'col-md-4', 'col-md-8'];
        }
        return ['col-md-3', '', ''];
      case 'view': {
        return ['col-md-4', 'col-md-4', 'col-md-8'];
      }
      default:
        return ['col-md-3', '', ''];
    }
  };

  const renderTextAreaClassName = () => {
    switch (modalMode) {
      case 'companyInfo':
        return ['col-md-12', '', 'col-md-9'];
      case 'add':
        if (tabEventkey === 5) {
          return ['col-md-12', 'col-md-1', 'col-md-11'];
        }
        return ['col-md-12', '', ''];
      case 'view':
        return ['col-md-12', 'col-md-1', 'col-md-11'];
      default:
        return ['col-md-12', '', 'col-md-12'];
    }
  };

  // 新增商戶 整理要給 api 的資訊
  const handleSubmitData = (data) => {
    const info = { ...data };
    delete info.projectCode;
    delete info.secretKey;
    info.parentId = info.parentId?.value;
    return info;
  };

  // 新增商戶：點選下一步
  const handleNextStep = (data) => {
    const newData = handleSubmitData(data);
    dispatch(setBaseInfoData(newData));
    goToNextTab();
  };

  // 編輯/檢視商戶/中台 - 整理打API獲得的商戶資訊
  const handleApiData = (data) => {
    const info = { ...data };
    const now = new Date().getTime();
    const startTime = moment(info.startTime).valueOf();

    delete info.createdTime;
    delete info.updatedTime;

    info.startTime = moment(info.startTime).toISOString();
    info.endTime = moment(info.endTime).toISOString();

    if (now > startTime && isEdit) {
      setDisableStartTime(true);
    }

    setApiData(info);
    return info;
  };

  // 編輯商戶 - 整理要給 api 的資訊，比對資訊是否有修正
  const handleEditSubmitData = (data) => {
    const info = {};

    for (const item of Object.keys(apiData)) {
      // 此三個欄位可允許空值，打編輯api時一定要帶回
      if (['endTime', 'parentId', 'memo'].includes(item)) {
        if (item === 'parentId') {
          info[item] = data[item]?.value;
        } else {
          info[item] = data[item];
        }
      }

      // 剩餘的欄位為有變動才帶回給 api
      if (['nameCn', 'nameEn', 'alias', 'startTime'].includes(item)) {
        if (data[item] !== apiData[item]) {
          if (item === 'startTime') {
            const dataTime = moment(data[item]).valueOf();
            const apiTime = moment(apiData[item]).valueOf();
            if (dataTime !== apiTime) {
              info[item] = data[item];
            }
          } else {
            info[item] = data[item];
          }
        }
      }
    }
    return info;
  };

  // 編輯商戶 - 點選儲存並call編輯商戶資料 api
  const handleEditSave = (data) => {
    const newData = handleEditSubmitData(data);
    if (!isEmpty(newData)) {
      dispatch(editCompanyBaseInfo(selectedId, newData));
    }
  };

  // 編輯商戶：切換tabs跳出提示儲存 modal 的儲存按鈕
  const handleSaveReminder = (data) => {
    handleEditSave(data);
    setShowSaveReminder(false);
  };

  // 新增&確認新增商戶 - 欄位拿 Store 資料
  useEffect(() => {
    if (isAdd || isConfirm) {
      reset(storeBaseInfo);
    }
  }, [tabEventkey]);

  // 父商戶的 default 值
  useEffect(() => {
    // 新增與確認新增時拿 store 資料
    if (isAdd || isConfirm) {
      setTimeout(() => {
        setValue(
          'parentId',
          parentIdOptions?.find(
            (option) => option.value === storeBaseInfo.parentId
          ) || null
        );
      }, 500);
    } else {
      // 其他模式拿 api 資料
      setTimeout(() => {
        setValue(
          'parentId',
          parentIdOptions?.find(
            (option) => option.value === initBaseInfo.parentId
          ) || null
        );
      }, 500);
    }
  }, [initBaseInfo, tabEventkey, modalMode]);

  // 結束時間的日期限制會依照開始時間的值做調整
  useEffect(() => {
    const now = new Date().getTime();
    const newStartTimeValue = moment(startTimeValue).valueOf();

    if (startTimeValue === '') {
      setEndDateLimit(new Date());
    } else if (now > newStartTimeValue) {
      setEndDateLimit(new Date());
    } else {
      setEndDateLimit(startTimeValue);
    }
  }, [startTimeValue]);

  // 中台/編輯/檢視商戶 -帶入打API獲得的商戶資訊
  useEffect(() => {
    if (['view', 'edit', 'companyInfo'].includes(modalMode)) {
      if (!isEmpty(initBaseInfo)) {
        const newData = handleApiData(initBaseInfo);
        reset(newData);
      }
    }
  }, [initBaseInfo]);

  // 編輯商戶 - 當現在時間大於開始時間，disable 開始時間欄位
  useEffect(() => {
    if (isEdit) {
      const now = new Date().getTime();
      const newStartTimeValue = moment(startTimeValue).valueOf();
      if (now > newStartTimeValue) {
        setDisableStartTime(true);
      }
    }
  }, [modalMode]);

  // 編輯商戶：切換tabs跳出提示儲存 modal 的儲存按鈕
  useEffect(() => {
    if (isEdit) {
      if (!isEmpty(dirtyFields)) {
        setCanChangeTab(false);
        setReminderMsg('是否儲存變更？');
        if (!isValid) {
          setReminderMsg('請填選所有必填項目');
        }
      } else {
        setCanChangeTab(true);
      }
    }
  }, [modalMode, formState]);

  return (
    <>
      <Form>
        {isCompanyInfo && <h5>基本信息</h5>}
        <div className="form-wrapper">
          <Form.Row>
            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                中文名称
                {(isAdd || isEdit) && <span>*必填</span>}
              </Form.Label>
              <Input
                grid={renderFormGroupClassName()[2]}
                name="nameCn"
                type="text"
                placeholder={isAdd || isEdit ? '中文名稱 e.g. 量子脈動' : ''}
                ref={register({
                  required: '此欄位為必填',
                  maxLength: { value: 20, message: '不可輸入超過20字元' },
                })}
                errors={errors.nameCn}
              />
            </Form.Group>
            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                英文名称
                {(isAdd || isEdit) && <span>*必填</span>}
              </Form.Label>
              <Input
                grid={renderFormGroupClassName()[2]}
                className="form-control"
                name="nameEn"
                type="text"
                placeholder={isAdd || isEdit ? '英文名稱 e.g. LZMD' : ''}
                ref={register({
                  required: '此欄位為必填',
                  maxLength: { value: 20, message: '不可輸入超過20字元' },
                })}
                errors={errors.nameEn}
              />
            </Form.Group>
            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                专案代号
              </Form.Label>
              <Input
                grid={renderFormGroupClassName()[2]}
                name="projectCode"
                ref={register}
                type="text"
                readOnly
                disabled
                placeholder="不需填寫，由系統產生"
              />
            </Form.Group>
            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                授权码
              </Form.Label>
              <Input
                grid={renderFormGroupClassName()[2]}
                readOnly
                disabled
                ref={register}
                name="secretKey"
                type="text"
                placeholder="不需填寫，由系統產生"
              />
            </Form.Group>
            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                商户别名
                {(isAdd || isEdit) && <span>*必填</span>}
              </Form.Label>
              <Input
                grid={renderFormGroupClassName()[2]}
                name="alias"
                type="text"
                placeholder={isAdd || isEdit ? '中文别名 e.g. 量子脈動' : ''}
                ref={register({
                  required: '此欄位為必填',
                  maxLength: { value: 20, message: '不可輸入超過20字元' },
                })}
                errors={errors.alias}
              />
            </Form.Group>
            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                父商戶
              </Form.Label>
              <Controller
                as={BasicSelect2}
                options={parentIdOptions}
                name="parentId"
                control={control}
                defaultValue=""
                placeholder="選擇關聯父商戶"
                className="input-select"
                grid={`${renderFormGroupClassName()[2]}`}
              />
              {/* <Controller
                name="parentId"
                defaultValue=""
                control={control}
                render={({ onChange, onBlur, value, ref }) => (
                  <BasicSelect2
                    innerRef={ref}
                    className="input-select"
                    grid={`${renderFormGroupClassName()[2]}`}
                    options={parentIdOptions}
                    onBlur={onBlur}
                    onChange={(e) => onChange(e.value)}
                    placeholder="選擇關聯父商戶"
                    selected={value}
                  />
                )}
              /> */}
            </Form.Group>
            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                開始時間
              </Form.Label>
              <Controller
                name="startTime"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <BasicDatePicker
                    name="startTime"
                    showTimeSelect
                    className="input-datePicker"
                    grid={renderFormGroupClassName()[2]}
                    dateFormat={dateTime.datePickerFormat}
                    timeFormat={dateTime.datePickerTimeFormat}
                    minDate={new Date()}
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    disabled={disableStartTime}
                    placeholderText={
                      isAdd || isEdit
                        ? `${moment(new Date()).format(dateTime.dateFormat)}`
                        : ' '
                    }
                  />
                )}
              />
            </Form.Group>

            <Form.Group className={renderFormGroupClassName()[0]}>
              <Form.Label className={renderFormGroupClassName()[1]}>
                結束時間
              </Form.Label>
              <Controller
                name="endTime"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <BasicDatePicker
                    name="endTime"
                    className="input-datePicker"
                    grid={renderFormGroupClassName()[2]}
                    showTimeSelect
                    dateFormat={dateTime.datePickerFormat}
                    timeFormat={dateTime.datePickerTimeFormat}
                    minDate={endDateLimit}
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    placeholderText={isAdd || isEdit ? '合約結束日期' : ' '}
                  />
                )}
              />
            </Form.Group>
            <hr className="basicInfo-styled-line" />
            <Form.Group
              className={`text-area-group ${renderTextAreaClassName()[0]}`}
            >
              <Form.Label className={renderTextAreaClassName()[1]}>
                备注
              </Form.Label>
              <Input
                className="text-area-control"
                grid={renderTextAreaClassName()[2]}
                name="memo"
                as="textarea"
                ref={register({
                  maxLength: { value: 200, message: '不可輸入超過200字元' },
                })}
                errors={errors.memo}
                placeholder={
                  isAdd || isEdit
                    ? '备注栏位，可输入200个中英文大小写数字。'
                    : ''
                }
              />
            </Form.Group>
          </Form.Row>
        </div>

        {/* 新增商戶下方按鈕設定 */}
        {isAdd && (
          <StyledNextButtonWrapper>
            <BasicButton
              unhighlighted
              width={264}
              onClick={(e) => {
                e.preventDefault();
                dispatch(setShowModal(false));
              }}
            >
              取消
            </BasicButton>
            <div>
              <BasicButton
                type="submit"
                width={264}
                onClick={handleSubmit(handleNextStep)}
              >
                下一步
              </BasicButton>
            </div>
          </StyledNextButtonWrapper>
        )}

        {/* 檢視商戶下方按鈕設定 */}
        {isView && (
          <StyledButtonWrapper>
            <BasicButton
              width={260}
              onClick={() => dispatch(setModalMode('edit'))}
            >
              編輯
            </BasicButton>

            <BasicButton
              unhighlighted
              width={260}
              onClick={(e) => {
                e.preventDefault();
                dispatch(setShowModal(false));
              }}
            >
              關閉
            </BasicButton>
          </StyledButtonWrapper>
        )}

        {/* 編輯商戶下方按鈕設定 */}
        {isEdit && (
          <StyledButtonWrapper>
            <BasicButton
              disabled={!isValid || isEmpty(dirtyFields)}
              type="submit"
              width={260}
              onClick={handleSubmit(handleEditSave)}
            >
              儲存
            </BasicButton>

            <BasicButton
              unhighlighted
              width={260}
              onClick={(e) => {
                e.preventDefault();
                dispatch(setShowModal(false));
              }}
            >
              取消
            </BasicButton>
          </StyledButtonWrapper>
        )}
      </Form>

      {/* 提示儲存 Modal */}
      <WarningPopup
        show={showSaveReminder}
        onClickEvent={
          isValid
            ? handleSubmit(handleSaveReminder)
            : () => setShowSaveReminder(false)
        }
        confirmText={isValid ? '储存' : '确定'}
        onCancelEvent={isValid ? () => setShowSaveReminder(false) : null}
        cancelText="取消"
      >
        {reminderMsg}
      </WarningPopup>
    </>
  );
};

BasicInfoForm.defaultProps = {
  goToNextTab: null,
  setCanChangeTab: null,
  showSaveReminder: false,
  setShowSaveReminder: null,
};

BasicInfoForm.propTypes = {
  // 新增商戶 - 跳轉下一個 tab
  goToNextTab: PropTypes.func,
  // 編輯商戶 - 設定是否可以切換 tab
  setCanChangeTab: PropTypes.func,
  // 編輯商戶 - 是否顯示提示儲存 reminder
  showSaveReminder: PropTypes.bool,
  // 編輯商戶 - 設定是否顯示提示 reminder
  setShowSaveReminder: PropTypes.func,
};

export default React.memo(BasicInfoForm);
