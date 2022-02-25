import { setLayout } from "layouts";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home(props) {
  const router = useRouter();
  useEffect(()=>{
    router.push('/vboms')
  }, [])
  
  const styles = props.styles.vboms.pages.Home;
  return (
          <div>
            <p>Redirecting to VBOMS</p>
          </div>
  )
}

const metaData = {
  title: "VBOMS",
  description: "Virtual Business Operations Management Systems"
}

Home.getLayout = (Home, data=metaData)=> setLayout({page:Home, data, appName: "vboms"})
