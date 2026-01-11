const Header = ({isAuthenticated, onLogout}) =>{
    const fullName = JSON.parse(
        localStorage.getItem('dataUSer')
    )
    console.log(fullName[0])


    return(
        <div>
           {fullName[0]} 
            <button onClick={onLogout}>Đăng xuất</button>
        </div>
    )
}
export default Header