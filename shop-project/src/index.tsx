import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

//React Element
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')
// const app = React.createElement(
//     'div',
//     null,
//     React.createElement('p', { id: 'test' }, 'Hello p')
// )
//JSX
// const app = <h1 id="text">Hello app</h1>
// const app = (
//     <div>
//         <h1 id="text"></h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
//             porro aspernatur? Repellat blanditiis rem et labore fugit excepturi
//             at voluptatem voluptates facilis, debitis in necessitatibus non
//             nostrum cumque culpa quidem.
//         </p>
//     </div>
// )
// const App = () => {
//     return <h1>Hello App component</h1>
// }
const Title = () => {
    return (
        <div>
            <App />
            <Content />
        </div>
    )
}
const App = () => {
    return (
        <>
            <h1 id="text"></h1>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                porro aspernatur? Repellat blanditiis rem et labore fugit
                excepturi at voluptatem voluptates facilis, debitis in
                necessitatibus non nostrum cumque culpa quidem.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias facilis facere natus nihil veniam officia, distinctio
                saepe possimus animi atque quos tempora nisi quidem architecto
                hic, repellat voluptates tempore suscipit!
            </p>
        </>
    )
}
const Content = () => {
    return (
        <React.Fragment>
            <h1 id="text"></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                porro aspernatur? Repellat blanditiis rem et labore fugit
                excepturi at voluptatem voluptates facilis, debitis in
                necessitatibus non nostrum cumque culpa quidem.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias facilis facere natus nihil veniam officia, distinctio
                saepe possimus animi atque quos tempora nisi quidem architecto
                hic, repellat voluptates tempore suscipit!
            </p>
        </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
    </React.StrictMode>
)
