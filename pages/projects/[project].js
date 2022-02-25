import {useRouter} from 'next/router'

function Project() {
    const router = useRouter()
    const projectId = router.query.project
    return (
    <div>
        <h1>Project</h1>
        <p>{projectId}</p>
      
    </div>
    )
  }
  
  export default Project;
  