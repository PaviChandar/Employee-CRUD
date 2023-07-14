import { useParams } from "react-router"
import { JSX } from "react/jsx-runtime"

const withRouter = (WrappedComponent: any) => (props: JSX.IntrinsicAttributes) => {
    const params = useParams()

    return(
        <WrappedComponent {...props} params={params} />
    )
}

export default withRouter