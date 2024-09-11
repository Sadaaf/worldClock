import PropTypes from "prop-types";

const Popup = ({ togglePopup, popupContent }) => {
  return (
    <div style={popupStyle}>
      <div style={overlayStyle} onClick={togglePopup}></div>
      <div style={popupContentStyle}>
        <div>{popupContent}</div>
      </div>
    </div>
  );
};

const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const popupContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  zIndex: 10,
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
};

Popup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  popupContent: PropTypes.object,
};

export default Popup;
