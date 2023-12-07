export async function getPrice (){
    console.log('priceapi ran')
    try{
        const res = await fetch("/api/prices", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`)
        }

        const results = await res.json()
        return results.price;
    } catch (err) {
        console.log(err)
    }
}