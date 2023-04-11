import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Input, Row, Col, Table, Select } from 'antd';
import { useStore } from '../context';
import DateHelper from '../../common/DateHelper';
import { userRebateStatusMapping } from '../../common/constant';

const { Option } = Select;

const RebateDetails = () => {
    const store = useStore();
    const {
        isRebateDetailsHistoryLoading,
        balance,
        paid,
        paying,
        getRebateHistory,
        rebateDetailsHistoryTableTotal,
        rebateDetailsHistoryTableData
    } = store;

    const [pagination, updatePagination] = useState({ current: 1, pageSize: 10 });
    const [selectedDateRange, setSelectedDateRange] = useState({ ...DateHelper.getDateRange(1) });

    useEffect(() => {
        updatePagination({ ...pagination, total: rebateDetailsHistoryTableTotal });
    }, [rebateDetailsHistoryTableTotal]);

    const columns = [
        { key: 'orderTime', dataIndex: 'orderTime', title: '下单日期' },
        { key: 'brandName', dataIndex: 'brandName', title: '返利商家' },
        { key: 'type', dataIndex: 'type', title: '返利类型' },
        { key: 'account', dataIndex: 'account', title: '交易金额(单位:USD)' },
        {
            key: 'status',
            dataIndex: 'status',
            title: '状态',
            render: (_, record) => <span>{userRebateStatusMapping[record.status]}</span>
        }
    ];

    const onClickHandler = () => {
        window.location.href = `${window.location.origin}/user-center/apply-withdraw`;
    };

    const onFilterClick = (value) => {
        updatePagination({ current: 1, pageSize: 10, total: rebateDetailsHistoryTableTotal });
        const { startDate, endDate } = DateHelper.getDateRange(value);
        setSelectedDateRange({ startDate, endDate });
        getRebateHistory(1, 10, startDate, endDate);
    };

    const onPagerClick = (page) => {
        updatePagination(page);
        const { current, pageSize } = page;
        const { startDate, endDate } = selectedDateRange;
        getRebateHistory(current, pageSize, startDate, endDate);
    };

    return (
        <div className="rebate-details">
            <div className="card">
                <div className="header">返利明细</div>
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
                    <div className="rebate-table-wrapper">
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
                            loading={isRebateDetailsHistoryLoading}
                            size="small"
                            columns={columns}
                            pagination={pagination}
                            dataSource={rebateDetailsHistoryTableData}
                            onChange={onPagerClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(RebateDetails);
