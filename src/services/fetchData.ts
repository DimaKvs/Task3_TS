
const fetchData = async <T>( api:string ): Promise<Array<T>> => {
    
        const response = await fetch(api)
        if (!response.ok) {
            throw new Error('Network error');
        }
        return await response.json()
}
    

export {fetchData};