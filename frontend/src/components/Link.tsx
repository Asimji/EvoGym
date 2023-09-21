import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../shared/types';

type Props = {
    page:String;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void
}

export default function Link({
  page,
  selectedPage,
  setSelectedPage
}: Props) {
    const lowerCasePage=page.toLowerCase().replace(/ /g, '') as SelectedPage 
  return <AnchorLink
  className={`${selectedPage===lowerCasePage ? "text-pink-500" : ""} 
  transition duration-500 hover:text-pink-300
  `}
  href={`#${lowerCasePage}`}
  onClick={()=>setSelectedPage(lowerCasePage)}
  >
    {page}
  </AnchorLink>
}