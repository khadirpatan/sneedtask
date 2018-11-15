
const getUrl=()=>{
    const env=process.env.NODE_ENV;
    if(env==="development")
        return "http://localhost:9090/";
    else if(env==="production")
        return "https://stormy-ridge-96304.herokuapp.com/"

}
export default getUrl;