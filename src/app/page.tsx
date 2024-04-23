// Component = function -> return HTML ชั้นนอกสุดต้องมีdiv แค่ตัวเดียว
// <div> <span> ส่วนมากใช้กัน block<div> การเต็มบรรทัด inline<span> กินแค่จำนวนของข้อความ
import Navbar from "@/components/Navber";
import Banner from "@/components/banner";
import Title from "@/components/title";

const App  = () => {

  return (
    <div >
      <Banner imageUrl="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" />
      <Title title="Title 5555555555 yli laa"/>
    </div>
  );
};

export default App;

//input มี text number file 