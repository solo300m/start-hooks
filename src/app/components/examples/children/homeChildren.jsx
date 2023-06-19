import React from "react";
import PropTypes from "prop-types";

const ParentWrapComponent = ({ children }) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
                {React.Children.map(children, (child, index) => {
                    return (
                        <li className="list-group-item">
                            {React.cloneElement(child, {
                                text: `${index + 1} ${child.props.text}`
                            })}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
ParentWrapComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildTextBlock = ({ name, text, classStr }) => {
    return (
        <>
            <span id={name} className={classStr}>
                {text}
            </span>
        </>
    );
};
ChildTextBlock.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    classStr: PropTypes.string
};

const ParentComponent = () => {
    return (
        <>
            <ParentWrapComponent>
                <ChildTextBlock
                    name={"firstBlock"}
                    text={"Any text number 1"}
                    classStr={"p-2"}
                />
                <ChildTextBlock
                    name={"secondBlock"}
                    text={"Any text number 2"}
                    classStr={"p-2"}
                />
                <ChildTextBlock
                    name={"theedBlock"}
                    text={"Any text number 3"}
                    classStr={"p-2"}
                />
                <ChildTextBlock
                    name={"forthBlock"}
                    text={"Any text number 4"}
                    classStr={"p-2"}
                />
            </ParentWrapComponent>
        </>
    );
};

export default ParentComponent;
