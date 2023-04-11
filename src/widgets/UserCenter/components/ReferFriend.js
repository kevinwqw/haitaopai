import React from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from 'antd';
import { useStore } from '../context';

const { Paragraph } = Typography;

const ReferFriend = () => {
    const store = useStore();
    const { inviteCode } = store;

    return (
        <div className="refer-friend">
            <div className="card">
                <div className="header">好友推荐计划</div>
                <div className="content">
                    <ul>
                        <li>您每推荐一个朋友下单即可拿到$5现金奖励</li>
                    </ul>
                    <div className="section-header">告诉朋友</div>
                    <div className="refer-link-section">
                        <span>分享专属邀请码</span>
                        <span>可以将您的专属邀请码分享到微信，微博或者QQ等，当您朋友注册时，输入您的专属邀请码。</span>
                        <div className="invite-code-wrapper">
                            <span>我的专属邀请码：</span>
                            <Paragraph copyable={{ tooltips: ['复制', '复制成功'] }}>{inviteCode}</Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="header">常见问题</div>
                <div className="content">
                    <h4>推荐好友规则</h4>
                    <p>当您的好友在注册且成功下单并取得返利后，您的推荐奖励$5生效。</p>
                    <h4>友情提示</h4>
                    <p>Blink保留取消您的推荐奖励的权利，包括但不限于：</p>
                    <p>重复推荐帐户，自我推荐，涉嫌欺诈，退货或账户异常活动等。</p>
                    <p>如推荐奖励发放后发现任何上述问题，Blink将有权收回您的推荐奖励，并有权关停账号。</p>
                </div>
            </div>
        </div>
    );
};

export default observer(ReferFriend);
