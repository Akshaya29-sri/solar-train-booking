import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import AddToCart from './components/AddToCart'

export default function Home() {
  return (
   <main>
    <h1>Hi Akshaya</h1>
    <Link href="/users">Users</Link>
    <ProductCard/>
    
   </main>
   
  )
}
