import React from "react";
import { ModalClose, ModalContent, ModalOverLay, ModalProvider, ModalTrigger } from "./Modal";

/**
 * The Common Modal Component to use for user
 *
 * @param {string} openTrigger The trigger to open the modal
 *
 * @param {string} closeTrigger The trigger to close the modal
 *
 * @param {boolean} isBackground The Boolean value indicating if the modal should be opened
 *
 * @param {string} content The content of the modal
 *
 * @returns {Function} The Common Modal
 */

const CommonModal = ({
  openTrigger,
  closeTrigger,
  isBackground,
  content
}) => {
  return /*#__PURE__*/React.createElement(ModalProvider, null, /*#__PURE__*/React.createElement(ModalTrigger, {
    openTrigger: openTrigger
  }), /*#__PURE__*/React.createElement(ModalOverLay, {
    isBackground: isBackground
  }), /*#__PURE__*/React.createElement(ModalContent, null, content, /*#__PURE__*/React.createElement(ModalClose, {
    closeTrigger: closeTrigger
  })));
};
export { CommonModal };