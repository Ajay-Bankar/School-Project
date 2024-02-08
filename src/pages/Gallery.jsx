import Banner from "../components/Banner"

const Gallery = () => {
  return (
    <div>
      <div>
        <Banner title="Gallery" />
        <div>
          <div className=" grid grid-cols-3 gap-10 p-12 rounded-3xl">
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g1.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g2.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g3.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g4.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g5.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g6.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g7.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g8.webp" alt="" />
            <img className=" w-[350px] h-[200px] rounded-2xl" src="./images/g9.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery