import React, { useEffect, useState } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import BasicButton from '@Basics/BasicButton';
import color from '@/style/color';
import SearchBox from '@/components/searchbox/SearchBox';
import {
  setModalMode,
  setShowModal,
  setCopyModal,
  fetchCompanyList,
  // fetchFakeCompanyList,
  fetchParentId,
  fetchPullDomains,
  fetchDataConfig,
  // resetApiFailStatus,
  resetModal,
  setParentIdOptions,
} from '@/actions/companyListAction';
import { BsPlusCircle } from 'react-icons/bs';
import { Modal } from 'react-bootstrap';
import Breadcrumb from '@Basics/Breadcrumb';
import StyledTitleContainer from '@/components/containers/StyledTitleContainer';
import StyledButtonListContainer from '@/components/containers/StyledButtonListContainer';
import BasicModal from '@Basics/BasicModal';
// import WarningPopup from '@Basics/WarningPopup';
import CompanyTable from './components/CompanyTable';
import AddCompany from './components/CompanyModal/AddCompany';
import EditViewCompany from './components/CompanyModal/EditViewCompany';
import CopyModal from './components/CompanyModal/CopyModal';
// import { testData } from './testData';

const CompanyList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showModal = useSelector((state) => state.companyList.showModal);
  const modalMode = useSelector((state) => state.companyList.modalMode);
  const copyModal = useSelector((state) => state.companyList.copyModal);
  const copyData = useSelector((state) => state.companyList.copyData);
  const [modalTitle, setModalTitle] = useState('新增商戶');
  const apiParentIdOptions = useSelector(
    (state) => state.companyList.dataConfig.parentId
  );
  const apiError = useSelector((state) => state.companyList.fail);
  const apiErrorMsg = useSelector((state) => state.companyList.errMsg);
  const [showApiError, setShowApiError] = useState(false);

  useEffect(() => {
    switch (modalMode) {
      case 'add':
        setModalTitle('新增商戶');
        break;
      case 'edit':
        setModalTitle('編輯商戶');
        break;
      case 'view':
        setModalTitle('檢視商戶');
        break;
      default:
        break;
    }
  }, [modalMode]);

  useEffect(() => {
    dispatch(fetchCompanyList());
    // dispatch(fetchFakeCompanyList(testData));
  }, []);

  useEffect(() => {
    dispatch(fetchDataConfig());
    dispatch(fetchParentId());
    dispatch(fetchPullDomains());
  }, []);

  useEffect(() => {
    const newParentIdOptions = apiParentIdOptions?.map((parent) => ({
      value: parent.id,
      label: parent.nameCn,
    }));
    newParentIdOptions.unshift({ value: '', label: '選擇關聯父商戶' });
    dispatch(setParentIdOptions(newParentIdOptions));
  }, [apiParentIdOptions]);

  // 判定是否顯示 API 錯誤訊息
  useEffect(() => {
    if (apiError) {
      setShowApiError(true);
    } else {
      setShowApiError(false);
    }
  }, [apiError]);

  useEffect(() => {
    if (showApiError) {
      const timer = setTimeout(() => {
        setShowApiError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showApiError]);

  // 關閉 modal 清除資料
  useEffect(() => {
    dispatch(resetModal());
    dispatch(fetchCompanyList());
  }, [showModal]);

  return (
    <div>
      <StyledTitleContainer>
        <h1>{t('companyList')}</h1>
        <Breadcrumb />
      </StyledTitleContainer>
      <StyledButtonListContainer>
        <SearchBox
          showFilterPanel={false}
          submitSearch={(word) => dispatch(fetchCompanyList(word))}
        />
        <BasicButton
          className="d-flex align-items-center"
          warning
          width={138}
          onClick={() => {
            dispatch(setShowModal(true));
            dispatch(setModalMode('add'));
          }}
        >
          <BsPlusCircle size={24} style={{ marginRight: '12px' }} />
          新增商戶
        </BasicButton>
      </StyledButtonListContainer>
      <CompanyTable />
      <StyledModal
        cusmin="620px"
        show={showModal}
        onHide={() => {
          dispatch(setShowModal(false));
        }}
        dialogClassName="lg"
        title={modalTitle}
        closebutton
        padding="0.875rem 2rem 0.5rem 2rem"
        backdrop="static"
      >
        <StyledToast showApiError={showApiError}>
          <img src="images/icons/delect.svg" alt="icon-warning" />
          {apiErrorMsg || '內部系統錯誤，請稍後再試'}
        </StyledToast>
        <Modal.Body>
          {modalMode === 'add' ? <AddCompany /> : <EditViewCompany />}
        </Modal.Body>
      </StyledModal>
      <CopyModal
        copyModal={copyModal}
        closeCopyModal={() => dispatch(setCopyModal(false))}
        copyData={copyData}
      />
    </div>
  );
};
const StyledModal = styled(BasicModal)`
  .lg {
    max-width: 1040px;
  }
`;

const FADEIN = keyframes`
   from {top: 0; opacity: 0;}
    to {top: 20px; opacity: 1;}
`;

const FADEOUT = keyframes`
   from {top: 20px; opacity: 1;}
    to {top: 0; opacity: 0;}
`;

const StyledToast = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 113, 113, 0.4);
  color: ${color.contrastPrimary};
  border-radius: 6px;
  padding: 10px 24px;
  width: 50%;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  visibility: ${(props) => (props.showApiError ? 'visible' : 'hidden')};
  -webkit-animation: ${FADEIN} 1s, ${FADEOUT} 1s 3s;
  animation: ${FADEIN} 1s ${FADEOUT} 1s 3s;
  img {
    width: 28px;
    height: 28px;
    display: inline;
    margin-right: 15px;
  }
`;

CompanyList.propTypes = {};

export default withTranslation(['common', 'enum', 'cms', 'sidebar'], {
  wait: true,
})(CompanyList);
