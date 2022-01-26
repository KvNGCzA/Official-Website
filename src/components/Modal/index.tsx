import {MutableRefObject, useCallback, useEffect, useRef } from 'react';
import './index.scss';

interface ModalProps {
  children?: any;
  show: boolean;
  onClose?: Function;
};

export const Modal = ({children, show, onClose}: ModalProps) => {
  const bodyRef = useRef() as MutableRefObject<any>;
  const handleClickOutside = useCallback((event: any) => {
    const {target} = event;
    if (!bodyRef.current.contains(target)) {
      onClose?.();
    }
  }, [onClose])

  useEffect(() => {
    if (show) {
      window.addEventListener('click', handleClickOutside)
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    }
  }, [show, handleClickOutside]);

  return <div className='modal modal__overlay' style={{
    display: show ? 'flex' : 'none'
  }}>
    <div className='modal__body' ref={bodyRef}>
      <button className='close-btn' onClick={() => onClose?.()}>close</button>
      {children}
    </div>
  </div>
}
