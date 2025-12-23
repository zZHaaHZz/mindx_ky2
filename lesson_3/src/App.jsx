import Card from "./components/Card";
import './App.css'
function App() {
  let data = [
    { name: "Nguyễn Văn Tài", lernClass: "Code Intensive", desc: "Trở thành master codeding là ước mơ của tôi" },
    { name: "Nguyễn Minh Triết", lernClass: "Fullstack Web", desc: "Xây dựng ứng dụng triệu người dùng." },
    { name: "Vũ Hoàng Long", lernClass: "AI & Machine Learning", desc: "Huấn luyện các mô hình trí tuệ nhân tạo thông minh." }
  ]
  return (
    <div className="app">
      {data.map((item) => (
        <Card  name={item.name} lernClass={item.lernClass} desc={item.desc} />
      ))}
    </div>
  )
}

export default App;