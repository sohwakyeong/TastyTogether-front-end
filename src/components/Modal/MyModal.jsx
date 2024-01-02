import React from "react";
import * as S from "./style/MyModal.style"

export const MyModal = ({message, onClose ,onConfirm}) => {
    return (
        <S.MyModal>
          <S.Mask onClick={onClose}></S.Mask>
          <S.ModalBody>
            <S.ModalContent >
              <p>{message}</p>
              <button onClick={onClose}>취소</button>
              <button onClick={onConfirm}>확인</button>
            </S.ModalContent>
          </S.ModalBody>
        </S.MyModal>
      );
    };

