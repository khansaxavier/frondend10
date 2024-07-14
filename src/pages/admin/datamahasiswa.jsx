import GetMahasiswa from "@/components/admin/GetMahasiswa";
import axios from "axios";

const DataMahasiswa = ({data}) => {
    return ( 
        <>
            
                <GetMahasiswa mahasiswa ={data}/>
            
        </>
     );
}

export const getServerSideProps = async ({ query }) => {
    const nim = query.nim
    console.log(nim);
    let url = 'http://localhost:3000/mahasiswa'
    if(nim){
        url = `http://localhost:3000/mahasiswa/${nim}`
    }
    const res = await axios.get(url)
    const data = res.data
   

    return {
        props: {
            data
        }
    }
}
 
export default DataMahasiswa;