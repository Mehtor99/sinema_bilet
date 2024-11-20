import React from "react";
import Navbar from "../components/molecules/Navbar";
import Filter from "../components/molecules/Filter";
import Card from "../components/molecules/Card";
function HomePage() {

  

  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row mt-3">
          <h4 style={{ fontWeight: "bold" }}>Eskişehir Vizyondaki Filmler</h4>
        </div>
        {/* Filtre */}
        <div className="row border p-2 rounded mt-3">
          <Filter />
        </div>

        {/* Film Listesi */}
        <div className="row">
      
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>


        </div>
      </div>
    </>
  );
}

export default HomePage;
