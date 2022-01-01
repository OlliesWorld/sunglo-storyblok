import React from 'react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import Hero from './Hero'
import Slide from './Slide'
import Placeholder from './Placeholder'
import Article from './Article'
import FeatureArticle from './FeatureArticle'
import SideBar from './SideBar'
import Navigation from './Navigation'
import Video from './Video'
import NavItem from './NavItem'
import Logo from './Logo'
import NavBar from './NavBar'
import Ctabutton from './Ctabutton'
import Estimate from './Estimate'
import FooterBar from './FooterBar'


const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'slide': Slide,
  'article': Article,
  'feature-article': FeatureArticle,
  'side-bar': SideBar,
  'navigation': Navigation,
  'hero': Hero,
  'video': Video,
  'NavItem': NavItem, 
  'logo': Logo,
  'navbar': NavBar,
  'ctabutton': Ctabutton,
  'estimate': Estimate,
  'footerbar': FooterBar
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid}/>
  }
 
  return  blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default DynamicComponent
