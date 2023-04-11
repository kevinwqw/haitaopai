class LocalHelper {
    getDefinedChineseLocal() {
        const definedChineseLocal = {
            lang: {
                locale: 'zh_CN',
                placeholder: '请选择日期',
                rangePlaceholder: ['开始日期', '结束日期'],
                today: '今天',
                now: 'Now',
                backToToday: '回到今天',
                ok: '确认',
                clear: '清楚',
                month: '月',
                year: '年',
                timeSelect: 'Select time',
                dateSelect: '选择日期',
                monthSelect: '选择月份',
                yearSelect: '选择年份',
                decadeSelect: 'Choose a decade',
                yearFormat: 'YYYY年',
                dateFormat: 'M/D/YYYY',
                dayFormat: 'D',
                dateTimeFormat: 'M/D/YYYY HH:mm:ss',
                monthFormat: 'M月',
                monthBeforeYear: true,
                previousMonth: 'Previous month (PageUp)',
                nextMonth: 'Next month (PageDown)',
                previousYear: 'Last year (Control + left)',
                nextYear: 'Next year (Control + right)',
                previousDecade: 'Last decade',
                nextDecade: 'Next decade',
                previousCentury: 'Last century',
                nextCentury: 'Next century'
            },
            timePickerLocale: {
                placeholder: 'Select time'
            },
            dateFormat: 'YYYY-MM-DD',
            dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
            weekFormat: 'YYYY-wo',
            monthFormat: 'YYYY-MM'
        };

        return definedChineseLocal;
    }
}
export default new LocalHelper();
