import { FC, memo, SVGProps } from 'react'
import { clsx } from 'clsx'
import cls from './IconBlock.module.scss'

interface IProps {
  classname?: string
  Icon: FC<SVGProps<SVGSVGElement>>
  text: string
}
const IconBlock: FC<IProps> = (props) => {
  const { classname, Icon, text } = props
  return (
    <div className={clsx(cls.IconBlock, classname)}>
      {<Icon />}
      <span>{text}</span>
    </div>
  )
}
export default memo(IconBlock)
