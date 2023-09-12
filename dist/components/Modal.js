import React, { createContext, useContext, useState } from "react";
const ModalContext = /*#__PURE__*/createContext(null);

/**
 * The Context Api Surrounding Modal Components
 * @param {string} children the Modal Components
 * @returns {Function} - the Modal Context Api
 */

const ModalProvider = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: {
      isOpen,
      onOpenModal,
      onCloseModal
    }
  }, children);
};

/**
 * The Modal Trigger Opening Modal Components
 * @param {string} openTrigger - the Modal Trigger Elements
 * @returns {Function} - the Modal Trigger Component
 */

const ModalTrigger = ({
  openTrigger
}) => {
  const {
    onOpenModal
  } = useContext(ModalContext);
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-trigger",
    onClick: onOpenModal
  }, openTrigger);
};

/**
 * The Modal OverLay Closeings Modal Components likes Background
 * @param {string} isBackground - The Boolean value indicating whether the ModalOverlay is showed
 * @returns {Function} - the Modal OVerLay
 */

const ModalOverLay = ({
  isBackground
}) => {
  const {
    isOpen,
    onCloseModal
  } = useContext(ModalContext);
  return isBackground && isOpen && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onCloseModal
  });
};

/**
 * The Modal Content showing information related by Modal
 * @param {string} children - The Infomation related by Modal
 * @returns {Function} - the Modal Content
 */

const ModalContent = ({
  children
}) => {
  const {
    isOpen
  } = useContext(ModalContext);
  return isOpen && /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children);
};

/**
 * The Modal Trigger Closing Modal Components
 * @param {string} closeTrigger -  the Modal Trigger Elements
 * @returns {Function} - the Modal Close
 */

const ModalClose = ({
  closeTrigger
}) => {
  const {
    onCloseModal
  } = useContext(ModalContext);
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-close",
    onClick: onCloseModal
  }, closeTrigger);
};
export { ModalProvider, ModalTrigger, ModalOverLay, ModalContent, ModalClose };