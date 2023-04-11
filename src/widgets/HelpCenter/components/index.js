import React from 'react';
import { Divider } from 'antd';
import { helpCenterLabels } from '../../common/constant';

const {
    REGULAR_QUESTIONS,
    QUESTION_1,
    QUESTION_2,
    QUESTION_3,
    QUESTION_4,
    QUESTION_5,
    QUESTION_6,
    QUESTION_7,
    QUESTION_8,
    QUESTION_9,
    QUESTION_10,
    ANSWER_1,
    ANSWER_2,
    ANSWER_3,
    ANSWER_4,
    ANSWER_5,
    ANSWER_6,
    ANSWER_7,
    ANSWER_8,
    ANSWER_9
} = helpCenterLabels;

const HelpCenter = () => (
    <div id="help-center-widget">
        <Divider style={{ fontWeight: 600, marginBottom: 30 }} orientation="left">
            {REGULAR_QUESTIONS}
        </Divider>
        <h3>{QUESTION_1}</h3>
        <p>{ANSWER_1}</p>
        <h3>{QUESTION_2}</h3>
        <p>{ANSWER_2}</p>
        <h3>{QUESTION_3}</h3>
        <p>{ANSWER_3}</p>
        <h3>{QUESTION_4}</h3>
        <p>{ANSWER_4}</p>
        <h3>{QUESTION_5}</h3>
        <p>{ANSWER_5}</p>
        <h3>{QUESTION_6}</h3>
        <p>{ANSWER_6}</p>
        <h3>{QUESTION_7}</h3>
        <p>{ANSWER_7}</p>
        <h3>{QUESTION_8}</h3>
        <p>{ANSWER_8}</p>
        <h3>{QUESTION_9}</h3>
        <p>{ANSWER_9}</p>
        <h3>{QUESTION_10}</h3>
        <img className="qr-image" alt="" src="images/wechat.jpg" />
    </div>
);

export default HelpCenter;
