import React from 'react';
import PropTypes from 'prop-types';

const ExpandableMenu = (props) => {
    const { items } = props;
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
                                        {item.children.map((child) => {
                                            return (
                                                <li>
                                                    <a href={child.href ? child.href : 'javascript:void(0);'}>
                                                        {child.label}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                        {index === 0 && <div className="content-style">123</div>}
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
