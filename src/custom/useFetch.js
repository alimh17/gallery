import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const copyData = []
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    data.map(item => {
                        copyData.push(item)
                    })
                }
                setData(copyData)
            })
            .catch(err => console.log(err))
    }, [url])

    return [data]


}

export default useFetch