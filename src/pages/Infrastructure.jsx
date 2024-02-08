import Banner from "../components/Banner"

const infraData=[
  {imgsrc:"./images/activityRoom.webp",title:"PRE PRIMARY ACTIVITY ROOM",desc:"BPPS is developing a unique activity room for the pre primary and primary kids. This room will be adequately equipped with modern toys, cycles and different types of slides and play houses. Kids can even watch movies, educational videos and power point presentation in this room. Preschool provides kids with a lifetime of knowledge."},
  {imgsrc:"./images/infra2.webp",title:"COMPOSITE SCIENCE LAB",desc:"BPPS will also have composite science lab which will cater to the students Of middle school where they can unravel and explore the world Of science. At the initial level students are familiarized with the apparatus, equipments and specimens along with demonstrations of various experiments by teachers to develop skills and scientific temperament."},
  {imgsrc:"./images/infra3.webp",title:"LIBRARY",desc:"The serene ambience inspires love for reading. Acknowledging the fact that a library is a storehouse of knowledge, the school has provided students with a library architecture that is inspirational and conduciv to learning, improved communication and interaction. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills."},
  {imgsrc:"./images/infra4.webp",title:"LIBRARY",desc:"The serene ambience inspires love for reading. Acknowledging the fact that a library is a storehouse of knowledge, the school has provided students with a library architecture that is inspirational and conduciv to learning, improved communication and interaction. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills."},
  {imgsrc:"./images/infra5.webp",title:"LIBRARY",desc:"The serene ambience inspires love for reading. Acknowledging the fact that a library is a storehouse of knowledge, the school has provided students with a library architecture that is inspirational and conduciv to learning, improved communication and interaction. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills."},
  {imgsrc:"./images/infra6.webp",title:"LIBRARY",desc:"The serene ambience inspires love for reading. Acknowledging the fact that a library is a storehouse of knowledge, the school has provided students with a library architecture that is inspirational and conduciv to learning, improved communication and interaction. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills."},

]

const Infrastructure = () => {
  return (
    <div>
    <div className="bg-gray-100">
     <Banner title="Infrastructure"/>
     <div className=" w-full sm:w-11/12 mx-auto px-3 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-5">
        {infraData.map((item,i)=>
        <div key={i} className="bg-white">
          <img src={item.imgsrc} />
          <div className="px-2">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
        )}
        </div>
     </div>
   </div>

 </div>
  )
}

export default Infrastructure