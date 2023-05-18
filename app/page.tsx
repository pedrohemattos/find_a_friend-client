import { Roboto, Roboto_Condensed, Nunito } from 'next/font/google';
import Image from 'next/image';
import dogFace from '../public/dogface.svg'
import dogs from '../public/dogs.svg';
import magnifier from '../public/magnifier.svg';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const roboto_condensed = Roboto_Condensed({
  weight: '700',
  subsets: ['latin'],
});

const nunito = Nunito({
  weight: ['800', '600'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#633BBC] px-[15rem] pt-[5rem] text-white">
      <div className='self-start'>
        <h1 className={`${roboto_condensed.className} text-8xl mb-4`}>Find A Friend</h1>
      </div>

      <div className={`bg-[#F15156] w-full flex flex-col flex-1 mt-20 px-28 pt-28 rounded-t-3xl`}>
        <div className='flex items-center gap-2'>
          <Image src={dogFace} alt='rosto de cachorro' />
          <p className='text-2xl'>FindAFriend</p>
        </div>

        <div className='flex justify-between items-end mb-20'>
          <h1 className={`${nunito.className} font-[600] text-[72px] leading-[64.8px] w-[480px]`}>Leve a felicidade para o seu lar</h1>
          <Image src={dogs} alt='cinco cachorros felizes' />
        </div>

        <div>
          <div className='flex justify-between items-center'>
            <p className={`${nunito.className} font-semibold text-xl w-[380px]`}>Encontre o animal de estimação ideal para seu estilo de vida!</p>
            <div className='flex items-center gap-6'>
              <p className={`${nunito.className}`}>Busque por cidade</p>
              <input 
                className={`bg-[#E44449] rounded-xl h-[56px] px-2 placeholder-white text-md text-center cursor-pointer ${nunito.className} font-[800]`}
                placeholder='Florianópolis'
              />
              <div className='bg-[#F4D35E] rounded-[20px] p-4 cursor-pointer'>
                <Image src={magnifier} alt='lupa' className='w-[24px]' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
