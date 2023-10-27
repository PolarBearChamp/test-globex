import { FullData } from '../../types'
import Card from '../Card/Card.tsx'
import { FC, useCallback, useState } from 'react'
import cls from './List.module.scss'
import Details from '../Details/Details.tsx'

interface IProps {
  data: FullData[]
}

export const List: FC<IProps> = ({ data }) => {
  const [selectedCard, setSelectedCard] =
    useState<FullData | null>(null)

  const onOpenModal = useCallback((data: FullData) => {
    setSelectedCard(data)
  }, [])

  const onCloseModal = useCallback(() => {
    setSelectedCard(null)
  }, [])

  return (
    <div className={cls.List}>
      {data.map((item) => (
        <Card
          key={item.email}
          onClick={() => onOpenModal({ ...item })}
          {...item}
        />
      ))}
      {selectedCard && (
        <Details onClose={onCloseModal} {...selectedCard} />
      )}
    </div>
  )
}
