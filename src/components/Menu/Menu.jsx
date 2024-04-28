import {useState} from "react"
const Menu = () => {

  const Menus = [
    {nema: "Home", icon: "home-outline", dis: "translate-x-0"},
    {nema: "Profile", icon: "person-outline", dis: "translate-x-16"},
    {nema: "Message", icon: "chatbubble-outline", dis: "translate-x-32"},
    {nema: "Photos", icon: "camera-outline", dis: "translate-x-48"},
    {nema: "Settings", icon: "settings-outline", dis: "translate-x-64"},
  ]
  const [active, setActive] = useState(0)
  return (
    <div className="bg-white border border-gray-900 max-h-24 px-6 rounded-t-xl ">
      <ul className="flex relative">
        <span className=
        {`bg-yellow-500 duration-500 
        ${Menus[active].dis} 
        border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}>
        </span>
        {
          Menus.map((menu,i)=>(
            <li key={i} className="w-16">
              <a className="flex flex-col text-center pt-6" 
              onClick={() => setActive(i)}>
                <span className={`text-xl cursor-pointer duration-500 ${i === active && '-mt-6 text-white'}`}>
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span className={`
                ${active === i 
                ? 'translate-y-4 duration-700 opacity-100' 
                : 'opacity-0 translate-y-10 '
                } `}
                >{menu.nema}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Menu