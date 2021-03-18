import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronUp,
  FiChevronDown,
} from 'react-icons/fi';
import styled from 'styled-components';
import color from '@/style/color';

const DatePickerBox = (props) => {
  const {
    currSelectDate,
    currHour,
    currMinute,
    setCurrHour,
    setCurrMinute,
    showTimeSelect,
    minDate,
    maxDate,
  } = props;
  const [currMonthYear, setCurrMonthYear] = useState(currSelectDate || new Date());
  const firstMonthDay = moment(currMonthYear).startOf('month');
  const firstWeekDay = moment(firstMonthDay).startOf('isoWeek').format('YYYY-MM-DD');
  const Dates = [];

  // render 小時以及分鐘選項
  for (let i = 0; i <= 6; i++) {
    const currDate = moment(firstWeekDay).add(i, 'day').locale('zh-cn').format('dd');
    Dates.push({
      label: currDate,
      value: currDate,
      isHoliday: i > 4,
      isWeek: true,
    });
  }

  let removeLastWeek = false;
  for (let i = 0; i <= 34; i++) {
    const currDate = moment(firstWeekDay).add(i, 'day').format('YYYY-MM-DD');
    const isCurrMonth = moment(currDate).get('month') === moment(currMonthYear).get('month');
    const isSelectDate =
      moment(currDate).format('YYYY-MM-DD') === moment(currSelectDate).format('YYYY-MM-DD');
    // 檢查最後一週是否依然屬於當月
    if (i === 28) {
      if (isCurrMonth) {
        Dates.push({
          label: moment(currDate).get('date'),
          value: currDate,
          isFade: !isCurrMonth,
          isSelectDate,
        });
      } else {
        removeLastWeek = true;
      }
    } else if (!removeLastWeek) {
      Dates.push({
        label: moment(currDate).get('date'),
        value: currDate,
        isFade: !isCurrMonth,
        isSelectDate,
      });
    }
  }

  const updateHour = (value, isAdd) => {
    if (isAdd) {
      if (value === 23) {
        setCurrHour(0);
      } else {
        setCurrHour(value + 1);
      }
    } else {
      if (value === 0) {
        setCurrHour(23);
      } else {
        setCurrHour(value - 1);
      }
    }
  };

  const updateMinute = (value, isAdd) => {
    if (isAdd) {
      if (value === 59) {
        setCurrMinute(0);
      } else {
        setCurrMinute(value + 1);
      }
    } else {
      if (value === 0) {
        setCurrMinute(59);
      } else {
        setCurrMinute(value - 1);
      }
    }
  };

  return (
    <StyledDatePickerBox showPicker={props.showPicker} showTimeSelect={showTimeSelect}>
      <div className="dpPickerBox">
        <div className="dpTitle">选择日期和时间</div>
        <div className="dpContent">
          <div className="dpCalendarBox">
            <div className="dpMonth">
              <span onClick={() => setCurrMonthYear(moment(currMonthYear).subtract(1, 'year'))}>
                <FiChevronsLeft size={20} />
              </span>
              <span onClick={() => setCurrMonthYear(moment(currMonthYear).subtract(1, 'month'))}>
                <FiChevronLeft size={20} />
              </span>
              {moment(currMonthYear).locale('zh-cn').format('MMMM YYYY')}
              <span onClick={() => setCurrMonthYear(moment(currMonthYear).add(1, 'month'))}>
                <FiChevronRight size={20} />
              </span>
              <span onClick={() => setCurrMonthYear(moment(currMonthYear).add(1, 'year'))}>
                <FiChevronsRight size={20} />
              </span>
            </div>
            <div
              className="dbCalendar"
            >
              {
                Dates.map((d) => {
                  if (d.isWeek) {
                    return (
                      <div
                        className={d.isHoliday ? 'isHoliday' : 'isFade'}
                        key={d.value}
                      >
                        {d.label}
                      </div>
                    )
                  } else {
                    const isBefore = minDate ? moment(d.value).isBefore(minDate, 'date') : false;
                    const isAfter = maxDate ? moment(d.value).isAfter(maxDate, 'date') : false;
                    return (
                      <div
                        className={
                          d.isSelectDate ? 'isSelectDate' : isBefore || isAfter ? 'isFade' : d.isFade ? 'isFade isDate' : 'isDate'
                        }
                        key={d.value}
                        onClick={() => {
                          if (!isBefore && !isAfter) {
                            props.updateSelectDate(moment(d.value).set({hour: currHour, minute: currMinute}));
                            showTimeSelect || props.closePicker();
                          }
                        }}
                      >
                        {d.label}
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          {showTimeSelect ? (
            <div className="dpTimeBox">
              <div>
                <div className="timeBtn" onClick={() => updateHour(currHour, true)}>
                  <FiChevronUp size={32} />
                </div>
                {currHour < 10 ? '0' + currHour : currHour}
                <div className="timeBtn" onClick={() => updateHour(currHour, false)}>
                  <FiChevronDown size={32} />
                </div>
              </div>
              <div>:</div>
              <div>
                <div className="timeBtn" onClick={() => updateMinute(currMinute, true)}>
                  <FiChevronUp size={32} />
                </div>
                {currMinute < 10 ? '0' + currMinute : currMinute}
                <div className="timeBtn" onClick={() => updateMinute(currMinute, false)}>
                  <FiChevronDown size={32} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="clearArea" onClick={() => props.closePicker()} />
      </div>
    </StyledDatePickerBox>
  );
};

const DatePicker = (props) => {
  const [currSelectDate, setCurrSelectDate] = useState(moment(props.selected).toISOString());
  const [currHour, setCurrHour] = useState(currSelectDate ? moment(currSelectDate).get('hour') : 0);
  const [currMinute, setCurrMinute] = useState(
    currSelectDate ? moment(currSelectDate).get('minute') : 0,
  );

  useEffect(() => {
    if (props.selected) {
      setCurrSelectDate(moment(props.selected).toISOString());
      setCurrHour(moment(props.selected).get('hour'));
      setCurrMinute(moment(props.selected).get('minute'));
    }
  }, [props.selected]);

  useEffect(() => {
    if (props.onChange && currSelectDate) props.onChange(currSelectDate);
  }, [currSelectDate]);

  useEffect(() => {
    if (currSelectDate) {
      const newTime = moment(currSelectDate).set('hour', currHour).toISOString();
      if (props.onChange && currSelectDate) props.onChange(newTime);
      setCurrSelectDate(newTime);
    }
  }, [currHour]);

  useEffect(() => {
    if (currSelectDate) {
      const newTime = moment(currSelectDate).set('minute', currMinute).toISOString();
      if (props.onChange && currSelectDate) props.onChange(newTime);
      setCurrSelectDate(newTime);
    }
  }, [currMinute]);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        className={!currSelectDate ? 'textPlaceholder inputField' : 'inputField'}
        disabled={props.disabled}
        onClick={() => (!props.disabled ? props.updateShowPicker(true) : null)}
      >
        {currSelectDate
          ? moment(currSelectDate).format(props.dateFormat || 'YYYY/MM/DD')
          : props.placeholderText
          ? props.placeholderText
          : '选择日期'}
      </div>
      <DatePickerBox
        showPicker={props.showPicker}
        currSelectDate={currSelectDate}
        currHour={currHour}
        currMinute={currMinute}
        setCurrHour={setCurrHour}
        setCurrMinute={setCurrMinute}
        updateSelectDate={(date) => setCurrSelectDate(moment(date).toISOString())}
        closePicker={() => props.updateShowPicker(false)}
        dateFormat={props.dateFormat}
        showTimeSelect={props.showTimeSelect}
        disabled={props.disabled}
        minDate={props.minDate}
        maxDate={props.maxDate}
      />
    </div>
  );
};

const StyledDatePickerBox = styled.div`
  position: absolute;
  left: -13px;
  display: ${(props) => (props.showPicker ? 'block' : 'none')};
  margin-top: 6px;

  .dpPickerBox {
    z-index: 6;
    position: absolute;
    border-radius: 6px;
    box-shadow: 0 20px 20px 0 rgba(44, 39, 56, 0.04), 0 4px 8px 0 rgba(44, 39, 56, 0.04);
    border: solid 1px ${color.bgShade};
    background-color: ${color.white};
    user-select: none;
    overflow: hidden;

    .dpTitle {
      background-color: ${color.highLight};
      color: ${color.contrastPrimary};
      padding: 6px 4px 4px 24px;
    }
    .dpContent {
      display: grid;
      grid-template-columns: 265px 1fr;
      padding: 10px 10px 18px 10px;

      > div {
        width: 100%;
        height: 100%;
      }

      .dpCalendarBox {
        padding-right: ${(props) => (props.showTimeSelect ? '27px' : null)};
        border-right: ${(props) =>
          props.showTimeSelect ? 'solid 1px rgba(44, 39, 56, 0.3)' : null};
        z-index: 6;
        .dpMonth {
          display: grid;
          grid-template-columns: 30px 30px 1fr 30px 30px;
          place-items: center;
          margin-bottom: 10px;
          cursor: pointer;

          > span {
            display: grid;
            place-items: center;
            padding: 3px;
            &:hover {
              background-color: ${color.highLight};
              border-radius: 25px;
            }
          }
        }
        .dbCalendar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);

          > div {
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            margin: 0 2px 0 2px;
          }

          .isDate {
            cursor: pointer;
            &:hover {
              background-color: ${color.highLight};
              border-radius: 25px;
            }
          }
          .isHoliday {
            color: ${color.warningDark};
          }
          .isFade {
            color: #c5c3cd;
          }
          .isSelectDate {
            color: ${color.white};
            background-color: ${color.primary};
            border-radius: 25px;
          }
        }
      }
      .dpTimeBox {
        z-index: 6;
        display: grid;
        grid-template-columns: 1fr 20px 1fr;
        place-items: center;
        padding: 0 15px 0 22px;

        > div {
          display: grid;
          place-items: center;
          font-size: 32px;

          .timeBtn {
            display: grid;
            place-items: center;
            width: 100%;
            cursor: pointer;
            width: 50px;
          }
        }
      }
    }
  }
  .clearArea {
    display: ${(props) => (props.showPicker ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: 5;
    cursor: default;
    overflow: hidden;
  }
`;

const StyledDatePickerInputBox = styled.div`
  height: 38px;
  border: solid 1px ${color.bgShade};
  color: ${(props) => (props.disabled ? color.secondary : null)};
  border-radius: 6px;
  padding: 6px 40px 6px 6px;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &[disabled] {
    padding: 6px 0;
  }

  .inputField {
    width: 100%;
    height: 100%;
    color: ${(props) => (props.fontColor ? props.fontColor : color.contrastPrimary)};

    &[disabled] {
      color: ${color.secondary};
    }
  }
  .textPlaceholder {
    color: rgba(44, 39, 56, 0.24);
  }
  &::placeholder {
    color: rgba(44, 39, 56, 0.24);
  }

  border: ${(props) => (props.showPicker ? 'solid 2px ' + color.primary : null)};
  border-width: ${(props) => (props.disabled ? '0 !important' : null)};
  box-shadow: ${(props) => (props.disabled ? 'none !important' : null)};
  /* &:active,
  &:focus {
    border: solid 2px ${color.primary};
  } */

  background: ${(props) =>
    !props.disabled ? 'url(images/icons/icon-calendar.svg) no-repeat right center' : null};
  background-size: 28px 28px;
  background-color: #fff;
  background-position: right 0.2em top 50%, 0 0;
`;

const StyledDatePickerContainer = styled.div`
  padding: 0;
`;

const BasicDatePicker = React.forwardRef((props, ref) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <StyledDatePickerContainer className={props.grid}>
      <StyledDatePickerInputBox {...props} inputRef={ref} showPicker={showPicker}>
        <DatePicker
          {...props}
          showPicker={showPicker}
          updateShowPicker={(value) => setShowPicker(value)}
        />
      </StyledDatePickerInputBox>
    </StyledDatePickerContainer>
  );
});

BasicDatePicker.defaultProps = {
  grid: null,
};
BasicDatePicker.propTypes = {
  // grid 的 className e.g. col-sm-8
  grid: PropTypes.string,
};

export default React.memo(BasicDatePicker);
