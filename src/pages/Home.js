import Footer from "../components/Footer";
import Header from "../components/Header";
import Postlist from "../components/Postlist";
import Postlist1 from "../components/Postlist1";
import data from "../assets/data/data.json"

function Homepage() {
  return (

    <div className="antialiased ">
      <Header />
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="flex items-center justify-center mt-5" >
          <div className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl dark:text-white">
            TKM
          </div>
        </div>
        <div className="grid gap-10 mt-14 lg:gap-10 border-b-2">
          {data.list1.map((tutorial, key) => {
            return <Postlist key={key} title={tutorial.title} detail={tutorial.detail} />
          })}
        </div>

        <div className="grid gap-10 mt-32 lg:gap-10 md:grid-cols-2 xl:grid-cols-4 ">
          {data.list2.map((tutorial, key) => {
            return <Postlist1 key={key} title={tutorial.title} detail={tutorial.detail} />
          })}
        </div>
      </div>


      {/* <div className="max-md:mx-auto">
        
        <div className="grid md:grid-cols-2 max-md:grid-cols-1">
          {data.country.map((country, key) => {
            // console.log(country, key);
            return <Postlist key={key} id={country.id} name={country.name} />
          })}
        </div>

      </div> */}

      <Footer />
    </div>
  );
}

export default Homepage;
