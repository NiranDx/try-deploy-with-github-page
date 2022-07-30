import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div>
      <h4>CRUD application</h4>
      <div>
        <input type="text" name="name"/>
        <input type="date" name="date"/>
        <input type="text" name="name"/>
        <button >ADD</button>
      </div>
      <div>

      </div>
    </div>
  )
}
