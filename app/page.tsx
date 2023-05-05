import { Roboto, Roboto_Condensed, Nunito } from 'next/font/google';
import Image from 'next/image';
import dogFace from '../public/dogface.svg'

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
        <h1 className={`${roboto.className} text-5xl`}>APP</h1>
      </div>

      <div className={`bg-[#F15156] w-full flex flex-1 mt-20 p-28 rounded-t-3xl`}>
        <div className='flex items-center gap-2 mb-20'>
          <Image src={dogFace} alt='rosto de cachorro' />
          <p className='text-2xl'>FindAFriend</p>
        </div>
          
          <h1 className={`${nunito.className} text-5xl w-[350px] mb-24`}>Leve a felicidade para o seu lar</h1>
          <p className={`${nunito.className} font-semibold text-xl`}>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        </div>

        <div>
          <div>
            <p>Busque por cidade</p>
            <input />
          </div>
        </div>
      
    </main>
  )
}
