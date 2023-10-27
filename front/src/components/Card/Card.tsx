import { FC, memo } from 'react'
import cls from './Card.module.scss'
import IconBlock from '../IconBlock/IconBlock.tsx'
import { getIcons } from '../../utils/getIcon.ts'
import { FullData } from '../../types'

interface IProps extends FullData {
  onClick: (data: any) => void
}

const Card: FC<IProps> = (props) => {
  const { onClick, ...rest } = props
  return (
    <>
      <div className={cls.Card} onClick={onClick}>
        <h2 className={cls.name}>{rest.name}</h2>
        <div className={cls.info}>
          <IconBlock
            Icon={getIcons.icPhone}
            text={rest.phone}
          />
          <IconBlock
            Icon={getIcons.icMail}
            text={rest.email}
          />
        </div>
      </div>
    </>
  )
}

export default memo(Card)
