import React from 'react';
import Round from './Round';
import shan from '../assets/shan.jpeg';
import badam from './roundedpic/badam.jpeg';
import dlcheni from './roundedpic/dlcheni.jpeg';
import ilaichi from './roundedpic/ilaichi.jpeg';
import images from './roundedpic/images.jpeg';
import jerra from './roundedpic/jerra.jpeg';
import kajo from './roundedpic/kajo.jpeg';
import BlackCardamom from './roundedpic/BlackCardamom.jpeg';
import niravmacewhole from './roundedpic/nirav mace whole.jpeg';
import nutmegwhole from './roundedpic/nutmeg whole.jpeg';
import pista from './roundedpic/pista.jpg';
import staranise from './roundedpic/star anise.jpeg';
import cloves from './roundedpic/cloves.jpeg';

const Roundedcontaner = () => {
  return (
    <>
    <span className='text-[6vh] text-teal-800 font-semibold hover:text-teal-600 border-b-4 border-double border-b-cyan-500'>PRODUCTS</span>
    <div className='flex justify-center flex-wrap items-center gap-2 p-4 bg-teal-800 mt-2 mb-3 md:mx-10 lg:mx-0 xl:mx-[5v'>
      <Round images={badam} para='Almond' />
      <Round images={dlcheni} para='Cinnamomum Zeylanicum' />
      <Round images={ilaichi} para='cardamom' />
      <Round images={images} para='Black paper' />
      <Round images={jerra} para='Cumin seeds ' />
      <Round images={kajo} para='Cashew nut' />
      <Round images={cloves} para='cloves' />
      <Round images={BlackCardamom} para='Black Cardamom' />
      <Round images={niravmacewhole} para='Nirav mace wholeh7' />
      <Round images={nutmegwhole} para='Nutmeg whole' />
      <Round images={pista} para='Pista' />
      <Round images={staranise} para='Star anise' />
      </div>
      </>
  );
};

export default Roundedcontaner;
