import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandableMenu = (props) => {
    const { items } = props;
    const [activeID, setActiveID] = useState('li-0');

    const onLiChange = (e) => {
        setActiveID(e.currentTarget.id);
    };

    return (
        <div className="expandable-menu">
            <ul className="top-level-menu">
                {items &&
                    items.map((item, index) => {
                        return (
                            <li>
                                <a href={item.href ? item.href : 'javascript:void(0);'}>{item.label}</a>
                                {item.children && (
                                    <ul className={index === 0 ? 'sub-level-menu customized' : 'sub-level-menu'}>
                                        {item.children.map((child, childIndex) => {
                                            return (
                                                <li id={`li-${childIndex}`} onMouseEnter={onLiChange}>
                                                    <a href={child.href ? child.href : 'javascript:void(0);'}>
                                                        {child.label}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                        {index === 0 &&
                                            item.children.map((child, childIndex) => {
                                                return (
                                                    <div
                                                    className="content-style"
                                                        style={{
                                                            display:
                                                                activeID === `li-${childIndex}` && childIndex !== 0
                                                                    ? 'flex'
                                                                    : 'none'
                                                        }}
                                                    >
                                                        <div>
                                                            {child.subMenuListItems &&
                                                                child.subMenuListItems.map((subItem) => {
                                                                    return (
                                                                        <a href={subItem.link} target="_blank">
                                                                            <div>
                                                                                <img
                                                                                    src={`/images/stores/${subItem.imgSrc}.png`}
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    );
                                                                })}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

ExpandableMenu.propTypes = {
    items: PropTypes.array.isRequired
};

export default ExpandableMenu;
