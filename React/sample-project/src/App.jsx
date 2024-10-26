import Navbar from "./components/Navbar"

const App = () => {
    const data ={
        appname : "Hello"
    }
    const logodata = "mylogo"
    const test = " My name is Dinesh Ananth"
    return (
        <>
        <p className=" text-red-700 text bg-green-300 text-center font-extralight"> {test}</p>
        <p className="text-blue-600 text bg-yellow-400 text-center"> {logodata}</p>
        <Navbar appdata={data} logo={logodata} />
        </>
    )
}

export default App