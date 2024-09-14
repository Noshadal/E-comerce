import React from 'react';
import Card from './Card';
import Zerra from './cardpic/zerra.jpeg';
import nationalketchup from './cardpic/katchup.jpeg';
import mayo from './cardpic/mayo.jpeg';
import katup from './cardpic/katup.jpeg';
import briyani from './cardpic/briyani.jpeg';
import swkh from './cardpic/tika.jpeg';
import tandori from './cardpic/tandori.jpeg';
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
      <Card heading='National Classic Mayo' price='30' img={mayo} vote='9.0'/>
      <Card heading='National Ketchup 400gm Fresh Tomato' price='20' img={nationalketchup} vote='3.0'/>
      <Card heading='National Ketchup 500gm' price='15' img={katup} vote='3.6'/>
      <Card heading='Shan Special Bombay Biryani' price='20' img={briyani} vote='9.0'/>
      <Card heading='Shan Special Tikka Masala' price='3' img={swkh} vote='9.0'/>
      <Card heading='Shan Special Tandoori Masala' price='2' img={tandori} vote='9.0'/>
      <Card heading='Almond 120gm Lahori' price='200' img={ALmond} vote='9.0'/>
      <Card heading='Cumin Seeds 250gm' price='20' img={Zerra} vote='9.0'/>
      <Card heading='Star Anise 120gm Pure and Afghani' price='220' img={Starannes} vote='9.0'/>
      <Card heading='Cloves (Syzygium)' price='10' img={Cloves} vote='9.0'/>
      <Card heading='Custard Vanilla Flavour' price='5' img={Custurd} vote='9.0'/>
      <Card heading='Strawberry Sweet Jelly (Happy Home)' price='40' img={jelly} vote='9.0'/>
      <Card heading='Pudding Cardamom Flavour' price='5' img={puding} vote='9.0'/>
      <Card heading='Jelly Egg Flavour' price='3' img={najelly} vote='9.0'/>
    </div>
  );
};

export default Storecard;
