import React from "react";
import { Modal } from "antd";

function LogoutModal({ isOpen, onClose, onLogout }) {
  return (
    <Modal
      title="Sign Out"
      open={isOpen}
      onOk={onLogout}
      onCancel={onClose}
      okText="Yes, Logout"
      cancelText="Cancel"
      okButtonProps={{ danger: true }}
    >
      <p>Haqiqatan ham tizimdan chiqmoqchimisiz?</p>
    </Modal>
  );
}

export default LogoutModal;
