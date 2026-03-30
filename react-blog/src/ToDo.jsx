export default function ToDo() {
    function ClickMe(){
        alert("Clicked");
    }
  return (
    <div>
      <h1>My Blog Page</h1>
      <img src="/Bloging.jpg" alt="" />
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Expedita hic excepturi velit ducimus voluptas perferendis inventore veritatis
        sapiente minus. Assumenda quam aspernatur ratione esse recusandae
        fugiat a atque amet reiciendis!</p>
        <ul>
            <li>Name</li>
            <li>Class</li>
            <li>Year</li>
            <button onClick={ClickMe} >Click Me</button> <br />
            <button onClick={()=>alert("Inline Clicked")} >Inline Clicked</button>
        </ul>
    </div>
  )
}
