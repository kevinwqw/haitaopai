import dayjs from 'dayjs';

const getDateRange = (selectedRange) => {
    const endDate = dayjs().add(1, 'day').format('YYYY/MM/DD');
    const startDate = dayjs().subtract(selectedRange, 'month').format('YYYY/MM/DD');

    return { startDate, endDate };
};

const getExportTime = () => dayjs().format('YYYYMMDD_HHmmss');

export default {
    getDateRange,
    getExportTime
};
