import { Footer } from "./HomeConfig";
import { FileUploader } from "react-drag-drop-files";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {
  Modal ,
  doc ,
  updateDoc,
  useEffect ,
  useState ,
  getDoc ,
  getFirestore ,
  collection ,
  addDoc ,
  setDoc ,
  Input ,
  app ,
  useParams ,
  Link ,
  Header ,
  Button 
} from "./TokenConfig"
import { useSelector } from "react-redux";


function Tokens() {
  const time = useSelector(state => state.TimeReducer.time)
  useEffect(()=>{
    
  },[])
 
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storage = getStorage(app)


  const fileTypes = ["JPG", "PNG", "GIF"];


  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);

  } 
  //console.log(file);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  




    const db = getFirestore(app)
    const [single,setSingle] = useState([]);

    const {id} = useParams();


    useEffect(()=>{
        getDsata()
    },[])

 async    function getDsata(){
        const docRef = doc(db, "Company", id);
        const docSnap = await getDoc(docRef);
        const d = []
        if (docSnap.exists()) {
        d.push(docSnap.data())
        setSingle(d)
        } else {
        // doc.data() will be undefined in this case
        }
    }



    const [Total,setTotal] = useState();
    const [Start,setStart] = useState()




    //  ======================= Add Token Info ==============================
    async function uploadImage(file) {
      const storageRef = ref(storage, `images/${file.name}`)
      const snapshot = await uploadBytes(storageRef, file)
      const url = await getDownloadURL(snapshot.ref)
      return url
    }
   async function AddToken(){
   
      const docRef = await setDoc(doc(db, `/Company/${id}/Tokens`, `Tokens${id}`), {
        TotalTokens: Number(Start),
        start_token: Total
        
      });
    }


    useEffect(()=> {
        token()
    })


    const [tokess,setToken] = useState([])

    const token = async() =>{
      const docRef = doc(db, `/Company/${id}/Tokens/Tokens${id}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setToken(docSnap.data())
      } else {
        
      }


    }


    const Reset = async()=>{
      const washingtonRef = doc(db,  `/Company/${id}/Tokens/Tokens${id}`);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        TotalTokens:0
      });

    }
    const theme = useSelector(state=>state.ThemeReducer.theme)
    document.body.style.backgroundColor = theme
   
    const [open,setOpen] = useState(false)
    const showModals = () => {
      setOpen(true);
    };
  
    const handleOks = () => {
      setOpen(false);
    };
  
    const handleCancels = () => {
      setOpen(false);
    };
     




  return (
    <div>
      <Header/>

      <div
        style={{width:"100%",height:100,border:"2px solid black",
      display:'flex',
      justifyContent:"space-around",
    alignItems:"center"}}
      className="createCompanyTokes">
          <p className="text-3xl font-black">Create Company Token</p>

          <Button onClick={showModals}>Add Token</Button>
          <Button onClick={Reset}>Reset</Button>
      </div>



      <div className="cards relative w-full h-[500px]  grid grid-rows-1 grid-cols-2 place-items-center">


      <div class="card" style={{width:"18rem"}}>
    <ul class="list-group list-group-flush">
        {single.map((item)=>{
            return (
                <>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Company Name: </span>  {item.Company_Name}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Opening Time: </span>  {item.Start_timing}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Ending Time:  </span> {item.End_Time}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Starting Year </span> {item.StartingYear}</li>
                </>
            )
        })}
       
    </ul>

  



    </div>
    



    
    <div class="w-[250px]  h-[150px] ">
    {/* <Button className="w-full bt btn btn-primary ">Update Token</Button> */}
         <p className='text-4xl font-black text-center'>{tokess.TotalTokens !== tokess.start_token ? tokess.TotalTokens :"Token is full"}</p>
    </div>


      </div>






      {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <div className='w-[100%] h-[300px]  flex flex-col justify-around items-center'>
            <Input type="file" onChange={(e)=> setImagePatient(e.target.files[0].name)} placeholder="Upload Image"/>

            <div className="image" style={{width:'100%',height:"100%",border:"2px solid black"}}>
              <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            </div>

            <Button onClick={update}>Add Token</Button>
      </div>

      </Modal> */}








      <Modal title="Basic Modal" open={open} onOk={handleOks} onCancel={handleCancels}>
        <div className="inoput w-full h-[300px]  flex flex-col justify-around items-center">
        <Input type="text" onChange={(e)=> setTotal(e.target.value)} placeholder="Enter Item"/>
        <Input type="text" onChange={(e)=> setStart(e.target.value)} placeholder="Enter Item"/>
           
          <Button onClick={AddToken}>Add Token</Button>
        </div>
      </Modal>

      <Footer/>
    </div>
  )
}

export default Tokens
