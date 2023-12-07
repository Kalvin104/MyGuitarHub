export async function guitarsApi (){
    console.log('guitarsapi ran')
    try{
        const res = await fetch("/api/guitars", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        if (!res.ok) {
            throw new Error(`GUITARS API - Error! status: ${res.status}`)
        }

        const results = await res.json()
        return results.price;
    } catch (err) {
        console.log(err)
    }
}