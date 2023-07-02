import React from 'react'
import './Valute.scss'
type Props = {}

const Valute = (props: Props) => {
    return (
        <div className="valutes">
            <button id="USD">USD</button>
            <button id="EUR">EUR</button>
            <button id="UAH">UAH</button>
            <button id="ZLT">ZLT</button>
        </div>
    )
}
const button: HTMLElement | null = document.getElementById('USD')

button?.addEventListener('click', function handleClick() {
    console.log('click')
})
export default Valute
