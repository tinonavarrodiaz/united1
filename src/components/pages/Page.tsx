import Header from "../organism/Header"
import Services from "../organism/Services"
// import Slider2 from "../organism/Slider2"
import Sliders from "../organism/Sliders"
import Whatwedo from "../organism/Whatwedo"




function Page() {
  return (
    <>
      <Header/>
      <main>
        <Sliders/>
        <Whatwedo/>
        <Services/>
      </main>
    </>
  )
}

export default Page
