import { Footer } from './HomeConfig';
import LoadingScreen from 'react-loading-screen';
import {
    getFirestore,
    useState,
    query ,
    collection,
    getDocs,
    app,useEffect,
    Header,
    Link
} from './TokenConfig'
import "./styles/index.css"
import { Input  } from 'antd';
import { useSelector } from 'react-redux';

function Tokenuser() {
  
    const db = getFirestore(app)

    const [data,setData] = useState([]);
    const [searchTerm,setSearchTerm] = useState("")
    const [loading,setLoading] = useState(true)
    const results = async() =>{
        const q = query(collection(db, "Company"));
        const data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        data.push({id:doc.id,... doc.data()})
        setData(data)
        });
    }


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)

        results()
    },[])

        const Theme = useSelector(state => state.ThemeReducer.user)
  return (
    <div>
       

     
  
  {
    loading === true ?


<LoadingScreen
loading={true}
bgColor='#f1f1f1'
spinnerColor='#9ee5f8'
textColor='#676767'
text='Please wait us '
> 

</LoadingScreen>
:
<>
    <Header/>
        <div className="container-fluid h-[auto]   flex flex-col justify-around items-center">


            <div className="Search">
                    <Input placeholder="Basic usage" onChange={(e)=> setSearchTerm(e.target.value)}/>
                
            </div>

                <div className="tableUser">
                                            <table class="table">
                            <thead>
                                <tr>
                       
                                <th scope="col" style={{color:"black"}} className={`${Theme === "#fff" ? "text-[#000]":"text-white"}`}>Company Name</th>
                                <th scope="col" style={{color:"black"}} className={`${Theme === "#fff" ? "text-[#000]":"text-white"}`}>Country</th>
                                <th scope="col" style={{color:"black"}} className={`${Theme === "#fff" ? "text-[#000]":"text-white"}`}>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                  {   data.filter(val=>{
                                    if (searchTerm === ''){
                                        return val
                                    }
                                    else if (val.Company_Name.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return val
                                    }
                                  }).map((item)=>{
                return (
                    <tr key={item.id}>
                           <td> <p className={`text-2xl font-black `} >{'NADRA'}</p></td>
                            <td><p className={`text-2xl font-black `} >{item.Country}</p></td>
                            <td><Link to={`/userToken/${item.id}`} className="btn btn-secondary">View</Link></td>
                    </tr>
    
                )
            })
                
            }
                            </tbody>
                            </table>

                </div>

        </div>


                <Footer/>
                </>
}
    </div>
  )
}

export default Tokenuser