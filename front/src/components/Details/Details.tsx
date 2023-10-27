import { FC, memo, useEffect, useRef } from 'react'
import { clsx } from 'clsx'

import { FullData } from '../../types'
import { getIcons } from '../../utils/getIcon.ts'

import cls from './Details.module.scss'

interface IProps extends FullData {
  onClose: () => void
}
const Details: FC<IProps> = (props) => {
  const {
    name,
    phone,
    email,
    position_name,
    hire_date,
    department,
    onClose
  } = props

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutside = ({ target }: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(target as Node)
      ) {
        onClose()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutside
      )
      document.removeEventListener(
        'keydown',
        handleEscapeKey
      )
    }
  }, [onClose])

  return (
    <div className={cls.modal}>
      <div className={cls.overlay}>
        <div ref={modalRef} className={cls.Details}>
          <div className={cls.header}>
            <span>{name}</span>
            <getIcons.icCross onClick={onClose} />
          </div>
          <div className={cls.info}>
            <div
              className={clsx(
                cls.info__key,
                cls.info__flex
              )}
            >
              <div>Телефон:</div>
              <div>Почта:</div>
              <div>Дата приема:</div>
              <div>Должность:</div>
              <div>Подразделение:</div>
            </div>
            <div
              className={clsx(
                cls.info__value,
                cls.info__flex
              )}
            >
              <div className={cls.value}>{phone}</div>
              <div className={cls.value}>{email}</div>
              <div className={cls.value}>{hire_date}</div>
              <div className={cls.value}>
                {position_name}
              </div>
              <div>{department}</div>
            </div>
          </div>
          <div className={cls.additional}>
            <div className={cls.header}>
              Дополнительная информация:
            </div>
            <div className={cls.text}>
              Разработчики используют текст в качестве
              заполнителя макта страницы. Разработчики
              используют текст в качестве заполнителя макта
              страницы.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Details)
