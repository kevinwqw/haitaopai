import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Input, Row, Col, Table, Select } from 'antd';
import { useStore } from '../context';
import DateHelper from '../../common/DateHelper';
import { userWithdrawMapping } from '../../common/constant';

const { Option } = Select;

const WithdrawDetails = () => {
    const store = useStore();
    const {
        isWithdrawHistoryLoading,
        balance,
        paid,
        paying,
        getWithdrawHistory,
        withdrawOrderHistoryTableTotal,
        withdrawOrderHistoryTableData,
        exchangeRate
    } = store;

    const [pagination, updatePagination] = useState({ current: 1, pageSize: 10 });
    const [selectedDateRange, setSelectedDateRange] = useState({ ...DateHelper.getDateRange(1) });

    useEffect(() => {
        updatePagination({ ...pagination, total: withdrawOrderHistoryTableTotal });
    }, [withdrawOrderHistoryTableTotal]);

    const columns = [
        { key: 'date', dataIndex: 'date', title: '日期' },
        { key: 'account', dataIndex: 'account', title: '提现账户' },
        {
            key: 'status',
            dataIndex: 'status',
            title: '提现状态',
            render: (_, record) => <span>{userWithdrawMapping[record.status]}</span>
        },
        {
            key: 'amount',
            dataIndex: 'amount',
            title: '交易金额(单位:人民币)',
            render: (_, record) => <span>{(record.amount * exchangeRate).toFixed(2)}</span>
        }
    ];

    const onClickHandler = () => {
        window.location.href = `${window.location.origin}/user-center/apply-withdraw`;
    };

    const onFilterClick = (value) => {
        updatePagination({ current: 1, pageSize: 10, total: withdrawOrderHistoryTableTotal });
        const { startDate, endDate } = DateHelper.getDateRange(value);
        setSelectedDateRange({ startDate, endDate });
        getWithdrawHistory(1, 10, startDate, endDate);
    };

    const onPagerClick = (page) => {
        updatePagination(page);
        const { current, pageSize } = page;
        const { startDate, endDate } = selectedDateRange;
        getWithdrawHistory(current, pageSize, startDate, endDate);
    };

    return (
        <div className="withdraw-details">
            <div className="card">
                <div className="header">提现明细</div>
                <div className="content">
                    <Row justify="space-evenly" gutter={[16, 48]}>
                        <Col>
                            <Row align="middle">
                                <Col>
                                    <span>待提现：</span>
                                </Col>
                                <Col>
                                    <Input disabled addonBefore="USD" value={paying} />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row align="middle">
                                <Col>
                                    <span>可提现：</span>
                                </Col>
                                <Col>
                                    <Input disabled addonBefore="USD" value={balance} />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row align="middle">
                                <Col>
                                    <span>已提现：</span>
                                </Col>
                                <Col>
                                    <Input disabled addonBefore="USD" value={paid} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="btn-wrapper">
                        <Button style={{ width: 160 }} type="primary" onClick={onClickHandler}>
                            申请提现
                        </Button>
                    </div>
                    <div className="withdraw-table-wrapper">
                        <div className="filter">
                            <Select
                                defaultValue="1"
                                style={{
                                    width: 120
                                }}
                                onChange={onFilterClick}
                            >
                                <Option value="1">1个月</Option>
                                <Option value="3">3个月</Option>
                                <Option value="6">6个月</Option>
                                <Option value="12">12个月</Option>
                            </Select>
                        </div>
                        <Table
                            loading={isWithdrawHistoryLoading}
                            size="small"
                            columns={columns}
                            pagination={pagination}
                            dataSource={withdrawOrderHistoryTableData}
                            onChange={onPagerClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(WithdrawDetails);
