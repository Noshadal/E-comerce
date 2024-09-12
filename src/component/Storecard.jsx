import React from 'react'
import Card from './Card'
import Zerra from './cardpic/zerra.jpeg'
import nationalketchup from './cardpic/katchup.jpeg'
import mayo from './cardpic/mayo.jpeg'
import katup from './cardpic/katup.jpeg'
import newkatup from './cardpic/new katup.jpeg'
import briyani from './cardpic/briyani.jpeg'
import swkh from './cardpic/tika.jpeg'
import tandori from './cardpic/tandori.jpeg'
import chekenmasala from './cardpic/cheken masla.jpeg'
import ALmond from './cardpic/Almond.jpeg'
import Starannes from './cardpic/Starannes.jpeg'
import Custurd from './cardpic/Custurd.jpeg'
import jelly from './cardpic/jelly.jpeg'
import puding from './cardpic/puding.jpeg'
import najelly from './cardpic/najelly.jpeg'
import Cloves from './cardpic/Cloves.jpeg'
const Storecard = () => {
  return (
    <div className='flex flex-wrap m-7' oncl>
      <Card heading='National Classic Mayo' prise='300Rs' img={mayo} vote='9.0'/>
      <Card heading='Nationa katchup 400gm fresh tomato' prise='180Rs' img={nationalketchup} vote='3.0'/>
      <Card heading='National katchup 1kg' prise='350Rs' img={newkatup} vote='5.0'/>
      <Card heading='Nationa katchup 500gm' prise='200Rs' img={katup} vote='3.6'/>
      <Card heading='Shan Spical bombay biryani' prise='60Rs' img={briyani} vote='9.0'/>
      <Card heading='Shan Spical Tikka Masalah ' prise='60Rs' img={swkh} vote='9.0'/>
      <Card heading='Shan Spical Tandoori Masalah' prise='60Rs' img={tandori} vote='9.0'/>
      <Card heading='Shan Spical Cheken Masalah' prise='60Rs' img={chekenmasala} vote='9.0'/>
      <Card heading='ALmond 120gm Lahori' prise='800' img={ALmond} vote='9.0'/>
      <Card heading='Cumin Seeds 250gm ' prise='320' img={Zerra} vote='9.0'/>
      <Card heading='Star anise 120gm Pure And Afgani' prise='220' img={Starannes} vote='9.0'/>
      <Card heading='Cloves the dried, unopened, nail-shaped flower buds of the evergreen tree Syzygium ' prise='200' img={Cloves} vote='9.0'/>
      <Card heading='Custurd vanilla flavour' prise='50Rs' img={Custurd} vote='9.0'/>
      <Card heading='Stobery Sweet jelly happy home' prise='40Rs' img={jelly} vote='9.0'/>
      <Card heading='puding cardamom flavour' prise='50Rs' img={puding} vote='9.0'/>
      <Card heading='jelly Egg flavour' prise='40Rs' img={najelly} vote='9.0'/>
      <Card heading='new' prise='5500' img={Zerra} vote='9.0'/>
      <Card heading='new' prise='5500' img={Zerra} vote='9.0'/>
      <Card heading='new' prise='5500' img={Zerra} vote='9.0'/>
      <Card heading='new' prise='5500' img={Zerra} vote='9.0'/>
    </div>
  )
}

export default Storecard;
