import { makeAutoObservable } from 'mobx';
import DateHelper from '../../common/DateHelper';
import BffSdk from '../../sdk';

class Store {
    isWithdrawHistoryLoading = false;
    isRebateDetailsHistoryLoading = false;
    activeTabName = null;
    inviteCode = '--';
    exchangeRate = null;
    balance = null;
    paid = null;
    paying = null;
    rebateDetailsHistoryTableTotal = null;
    rebateDetailsHistoryTableData = [];
    withdrawOrderHistoryTableTotal = null;
    withdrawOrderHistoryTableData = [];
    isSubmiting = false;
    submitResMsg = '';

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { activeTabName, inviteCode, exchangeRate } = params;
        this.activeTabName = activeTabName;
        this.inviteCode = inviteCode;
        this.exchangeRate = exchangeRate;
        this.getUserBalance();
        const { startDate, endDate } = DateHelper.getDateRange(1);
        if (activeTabName === 'withdraw-details') this.getWithdrawHistory(1, 10, startDate, endDate);
        if (activeTabName === 'rebate-details') this.getRebateHistory(1, 10, startDate, endDate);
    }

    * getUserBalance() {
        const sdk = new BffSdk();
        const res = yield sdk.getUserBalance();
        if (res.success) {
            const { balance, paid, paying } = res.data;
            this.balance = balance;
            this.paid = paid;
            this.paying = paying;
        }
    }

    * getWithdrawHistory(page, pageSize, startDate, endDate) {
        this.isWithdrawHistoryLoading = true;
        const sdk = new BffSdk();
        const res = yield sdk.getWithdrawHistory(page, pageSize, startDate, endDate);
        if (res.success) {
            const { total, records } = res.data;
            this.withdrawOrderHistoryTableTotal = total;
            this.withdrawOrderHistoryTableData = records;
        }
        this.isWithdrawHistoryLoading = false;
    }

    * getRebateHistory(page, pageSize, startDate, endDate) {
        this.isRebateDetailsHistoryLoading = true;
        const sdk = new BffSdk();
        const res = yield sdk.getRebateHistory(page, pageSize, startDate, endDate);
        if (res.success) {
            const { total, records } = res.data;
            this.rebateDetailsHistoryTableTotal = total;
            this.rebateDetailsHistoryTableData = records;
        }
        this.isRebateDetailsHistoryLoading = false;
    }

    * submitWithdraw(params) {
        this.isSubmiting = true;
        const sdk = new BffSdk();
        const res = yield sdk.submitWithdraw(params);
        if (res.success) {
            this.isSubmiting = false;
            if (res.data.code === 200) return { isSuccess: true, title: '提现成功' };

            return { isSuccess: false, title: '提现失败', errorMsg: res.data.message };
        }
        this.isSubmiting = false;
        return { isSuccess: false, title: '提现失败', errorMsg: '系统错误，提现失败' };
    }
}

export default Store;
