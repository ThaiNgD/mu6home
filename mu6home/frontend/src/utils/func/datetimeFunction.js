import i18next from "i18next";

// Pad single digits with leading zero
function pad(num) {
  return num.toString().padStart(2, "0");
}

const months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  vi: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
};

const weekdays = {
  en: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  vi: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ],
};

const getFormat = () => {
  const lang = i18next.language;
  if (lang.startsWith("vi")) {
    return { months: months.vi, weekdays: weekdays.vi };
  }
  return { months: months.en, weekdays: weekdays.en };
};

// 1. dd/mm/yyyy
function formatDMY(date) {
  return `${pad(date.getDate())}/${pad(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
}

// 2. yyyy-mm-dd (common in databases / ISO-like)
function formatYMD(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}

// 3. dd-mm-yyyy hh:mm
function formatDMYHM(date) {
  return `${formatDMY(date)} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

// 4. dd/mm/yyyy hh:mm:ss
function formatDMYHMS(date) {
  return `${formatDMY(date)} ${pad(date.getHours())}:${pad(
    date.getMinutes()
  )}:${pad(date.getSeconds())}`;
}

function formatYear(date) {
  const year = date.getFullYear();
  return `${year}`;
}

function formatDayMonthYear(date) {
  const formattedDate = getFormat();
  const day = pad(date.getDate());
  const monthName = formattedDate.months[lang][date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${monthName}, ${year}`;
}

// 2. Month Year
function formatMonthYear(date) {
  const formattedDate = getFormat();
  const monthName = formattedDate.months[lang][date.getMonth()];
  const year = date.getFullYear();
  return `${monthName} ${year}`;
}

export {
  formatDayMonthYear,
  formatDMY,
  formatDMYHM,
  formatDMYHMS,
  formatMonthYear,
  formatYear,
  formatYMD,
};
