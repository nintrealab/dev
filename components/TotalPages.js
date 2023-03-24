const fetchingData = async () => {
    return axios.get('https://api.npoint.io/fd95ed8784305496350b')
    .then(({data})=>{
      return data.result
    })
    .catch(err => {
      console.log(err);
    })
}
  
  
const TotalPages = () => {
    
    const [data, setDatas] = useState('')
    useEffect(()=>{
      fetchingData().then((data)=>{
        setDatas(data || '');
      });
    },[])

    return data
}
