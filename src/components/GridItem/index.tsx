import { GridItemType } from '../../types/GridItemType'
import * as C from './styles'
import Logo from '/public/svgs/m.svg'
import { Items } from '../../data/items'

type Props = {
  item: GridItemType
  onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container showBackground={item.permanentShown || item.shown} onClick={onClick}>
      {!item.permanentShown && !item.shown && 
        <C.Icon src={Logo} alt="" opacity={.1}/>
      }
    {item.permanentShown || item.shown && item.item !== null && 
      <C.Icon src={Items[item.item].icon} alt="" />
    }
    </C.Container>
  )
}