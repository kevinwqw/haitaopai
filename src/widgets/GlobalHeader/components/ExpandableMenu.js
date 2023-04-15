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
                                        {index === 0 && (
                                            <div className="content-style">
                                                {item.children.map((child, childIndex) => {
                                                    return (
                                                        <div
                                                            style={{
                                                                display:
                                                                    activeID === `li-${childIndex}` ? 'flex' : 'none'
                                                            }}
                                                        >
                                                            {child.subMenuListItems &&
                                                                child.subMenuListItems.map((subItem) => {
                                                                    return (
                                                                        <a href="https://www.55haitao.com/">
                                                                            <img
                                                                                style={{
                                                                                    height: 100,
                                                                                    width: 100,
                                                                                    margin: 10
                                                                                }}
                                                                                src={subItem.imgSrc}
                                                                            />
                                                                        </a>
                                                                    );
                                                                })}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
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
