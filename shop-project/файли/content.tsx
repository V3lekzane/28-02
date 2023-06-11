type Contenttype = {
    text1: string
    text2: string
}
export const Content = ({ text1, text2 }: Contenttype) => {
    return (
        <>
            <h1 id="text"></h1>
            <p className="red">{text1}</p>
            <p>{text2}</p>
        </>
    )
}
