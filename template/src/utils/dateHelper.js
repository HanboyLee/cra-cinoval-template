import Moment from 'moment';
import { CURRENT_LOCALE } from '@/assets/constants';
// 语言支持 zh-cn
Moment.locale(CURRENT_LOCALE);
const formatter = 'YYYY-MM-DD HH:mm:ss';
const formatDate = 'YYYY-MM-DD';
const formatMonth = 'MM/DD';
const formatTime = 'HH:mm:ss';

export default {
  constant: {
    DATE: 'DATE',
    MONTH: 'MONTH',
    TIME: 'TIME',
  },
  // 获取七天前至今资料
  //  获取前10天 subtract(10, 'days')
  convertDateWeekToDateRange(date) {
    return [
      Moment(date).add(-7, 'days').format(formatter),
      Moment(date).add(-1, 'days').format(formatter),
    ];
  },
  // 获取前三天至后三天资料
  convertBefore3WithAfter3ToDateRange(date) {
    return [
      Moment(date).add(-3, 'days').format(formatter),
      Moment(date).add(3, 'days').endOf('day').format(formatter),
    ];
  },
  // 获取前一年至今资料
  convertBefore1WithAfterNowToYearRange(date) {
    return [
      Moment(date).add(-1, 'year').format(formatter),
      Moment(date).endOf('day').format(formatter),
    ];
  },
  // 转换资料格式 ex:Thu Jul 14 2022 10:26:09 GMT+0800 => 2022-07-14 10:26:09
  formatDate([start, end]) {
    const startTime = Moment(start).format(formatter);
    const endTime = Moment(end).format(formatter);
    return [startTime, endTime];
  },
  // 转换资料格式 ex:Thu Jul 14 2022 10:26:09 GMT+0800 => 2022-07-14 10:26:09
  /**
   *
   * @param {Date} date 日期
   * @param {String} type 类型 ex: DATE 、 MONTH、不传为默认
   * @returns {Date} 格式化后的值
   */
  singleFormatDate(date, type) {
    if (!date) return;
    switch (type) {
      case this.constant.DATE:
        return Moment(date).format(formatDate);
      case this.constant.MONTH:
        return Moment(date).format(formatMonth);
      case this.constant.TIME:
        return Moment(date).format(formatTime);
      default:
        return Moment(date).format(formatter);
    }
  },
  // 获取本月
  extractThisMonth() {
    let startTime,
      endTime,
      formatter,
      currentDay = new Date().getDate();
    //   day = new Date().setDate(1);
    if (currentDay < 10) {
      //小于10号
      let startTime = Moment()
        .add(-1, 'month')
        .startOf('month')
        .format(formatter);
      let endTime = Moment().add(-1, 'month').endOf('month').format(formatter);
      return [startTime, endTime];
    }
    //大于10号
    startTime = Moment().startOf('month').format(formatter);
    endTime = Moment(new Date()).format(formatter);
    return [startTime, endTime];
  },

  // 获取本季
  extractThisSeason() {
    /**
     * 1-3
     * 4-6
     * 7-9
     * 10-12
     */
    let seasons = [1, 4, 7, 10],
      restMonth,
      seasonsMark = {
        1: 1,
        2: 2,
        3: 3,
        4: 1,
        5: 2,
        6: 3,
        7: 1,
        8: 2,
        9: 3,
        10: 1,
        11: 2,
        12: 3,
      };
    const endTime = new Date();
    const startTime = new Date();
    const currentMonth = new Date().getMonth() + 1;

    const day = startTime.getDate();

    for (let t of seasons) {
      if (currentMonth === t && day < 10) {
        return this._calcSeason([startTime, endTime]);
      } else {
        restMonth = currentMonth - seasonsMark[currentMonth];
      }
    }

    console.log(restMonth);

    return this._calcThisSeason([startTime, endTime], restMonth, seasons);
  },
  _calcSeason([startTime, endTime]) {
    startTime.setMonth(startTime.getMonth() - 3);
    startTime.setDate(1);
    endTime.setMonth(endTime.getMonth() - 1);
    return this.formatDate([startTime, endTime]);
  },
  _calcThisSeason([startTime, endTime], minusNum) {
    startTime.setMonth(minusNum);
    startTime.setDate(1);
    return this.formatDate([startTime, endTime]);
  },

  //	获取上一周----从周六到下周日计算
  extractLastWeek(isFormatter) {
    const start = Moment().subtract(1, 'weeks').startOf('week');
    const end = Moment().subtract(1, 'weeks').endOf('week');

    if (isFormatter) {
      return [start.format(formatter), end.format(formatter)];
    }

    return [start.format(), end.format()];
  },
  // 获取当周周日到周六
  extractCurrentWeekRange(date, format = formatter) {
    return [
      Moment(date).startOf('week').format(format),
      Moment(date).endOf('week').format(format),
    ];
  },
  //	时间排序 默认key=> date
  stringToDateWithinSortHandle(datas, key = 'date') {
    if (datas.length)
      return datas.sort((a, b) => new Date(a[key]) - new Date(b[key]));
    return datas;
  },

  // get last month
  extractLastMonth(isFormatter) {
    const start = Moment().subtract(1, 'months').startOf('month');
    const end = Moment().subtract(1, 'months').endOf('month');
    if (isFormatter) {
      return {
        startDatetime: start.format(formatter),
        endDatetime: end.format(formatter),
      };
    }
    return {
      startDatetime: start,
      endDatetime: end,
    };
  },
};
