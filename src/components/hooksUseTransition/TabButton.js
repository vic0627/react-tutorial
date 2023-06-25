const TabButton = ({ children, isActive, onClick }) => {
    if (isActive) {
        return <p className="tab_button">{children}</p>;
    }
    return (
        <p
            onClick={() => {
                onClick();
            }}
            className="tab_button tab_button_active"
        >
            {children}
        </p>
    );
};

export default TabButton;
