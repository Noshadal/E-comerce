import React from 'react';
import Card from './Card';
import Zerra from './cardpic/zerra.jpeg';
import nationalketchup from './cardpic/katchup.jpeg';
import mayo from './cardpic/mayo.jpeg';
import katup from './cardpic/katup.jpeg';
// import  from './cardpic/new_katup.jpeg';  // Removed space
import briyani from './cardpic/briyani.jpeg';
import swkh from './cardpic/tika.jpeg';
import tandori from './cardpic/tandori.jpeg';
// import  from './cardpic/cheken_masla.jpeg';  // Removed space
import ALmond from './cardpic/Almond.jpeg';
import Starannes from './cardpic/Starannes.jpeg';
import Custurd from './cardpic/Custurd.jpeg';
import jelly from './cardpic/jelly.jpeg';
import puding from './cardpic/puding.jpeg';
import najelly from './cardpic/najelly.jpeg';
import Cloves from './cardpic/Cloves.jpeg';

const Storecard = () => {
  return (
    <div className='flex flex-wrap m-7'>
      <Card heading='National Classic Mayo' price='300Rs' img={mayo} vote='9.0'/>
      <Card heading='National Ketchup 400gm Fresh Tomato' price='180Rs' img={nationalketchup} vote='3.0'/>
      {/* <Card heading='National Ketchup 1kg' price='350Rs' img={} vote='5.0'/> */}
      <Card heading='National Ketchup 500gm' price='200Rs' img={katup} vote='3.6'/>
      <Card heading='Shan Special Bombay Biryani' price='60Rs' img={briyani} vote='9.0'/>
      <Card heading='Shan Special Tikka Masala' price='60Rs' img={swkh} vote='9.0'/>
      <Card heading='Shan Special Tandoori Masala' price='60Rs' img={tandori} vote='9.0'/>
      {/* <Card heading='Shan Special Chicken Masala' price='60Rs' img={} vote='9.0'/> */}
      <Card heading='Almond 120gm Lahori' price='800Rs' img={ALmond} vote='9.0'/>
      <Card heading='Cumin Seeds 250gm' price='320Rs' img={Zerra} vote='9.0'/>
      <Card heading='Star Anise 120gm Pure and Afghani' price='220Rs' img={Starannes} vote='9.0'/>
      <Card heading='Cloves (Syzygium)' price='200Rs' img={Cloves} vote='9.0'/>
      <Card heading='Custard Vanilla Flavour' price='50Rs' img={Custurd} vote='9.0'/>
      <Card heading='Strawberry Sweet Jelly (Happy Home)' price='40Rs' img={jelly} vote='9.0'/>
      <Card heading='Pudding Cardamom Flavour' price='50Rs' img={puding} vote='9.0'/>
      <Card heading='Jelly Egg Flavour' price='40Rs' img={najelly} vote='9.0'/>
    </div>
  );
};

export default Storecard;
