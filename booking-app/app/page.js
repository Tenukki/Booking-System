import Image from 'next/image'
import Navbar from './components/Navbar'
import RentalPicker from './components/RentalPicker'
import ExtraCard from './components/ExtraCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <RentalPicker title="Valitse vuokrattava tuote">
        <ExtraCard title="Yli 7 päivää - Peräkärrysauna" type="default"/>
        <ExtraCard title="1 päivä - Peräkärrysauna" type="unit"/>
        <ExtraCard title="2 päivää - Peräkärrysauna" type="unit"/>
        <ExtraCard title="3 päivää - Peräkärrysauna" type="unit"/>
        <ExtraCard title="4 päivää - Peräkärrysauna" type="unit"/>
        <ExtraCard title="5 päivää - Peräkärrysauna" type="unit"/>
        <ExtraCard title="6 päivää - Peräkärrysauna" type="unit"/>
        <ExtraCard title="7 päivää - Peräkärrysauna" type="unit"/>
      </RentalPicker>
    </main>
  )
}
