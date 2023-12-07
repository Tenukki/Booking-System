import Image from 'next/image'
import Navbar from '../components/Navbar'
import RentalPicker from '../components/RentalPicker'
import ExtraCard from '../components/ExtraCard'

export default function Extra() {
    return (
        <main className="flex min-h-screen flex-col">
            <RentalPicker title="Lisävarusteet" >
                <ExtraCard title="Kuljetus" type="unit"/>
                <ExtraCard title="Halkoja" type="count"/>
                <ExtraCard title="Pyyhe" type="count"/>
            </RentalPicker>
        </main>
    )
}
