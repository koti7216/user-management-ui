import { useParams,useNavigate } from "react-router-dom";
export const withRouter = WrappedComponent => props => {
    const params = useParams();
    const UseNav=useNavigate();
    // etc... other react-router-dom v6 hooks
    return (
      <WrappedComponent
        {...props}
        params={params}
        UseNav={UseNav}
        // etc...
      />
    );
  };