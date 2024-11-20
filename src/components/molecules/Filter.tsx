import React from "react";
import FilterItem from "../atoms/FilterItem";

function Filter() {
  return (
    <>
      <FilterItem type="Şehir" isActive={true} title="Eskişehir" values={["Eskişehir","İzmit","Isparta"]} />
      <FilterItem type="Mekan" isActive={true} title="Mekan" values={["Eskişehir","İzmit","Isparta"]} />
      <FilterItem type="Tür seçiniz" isActive={true} title="Tür " values={["Eskişehir","İzmit","Isparta"]}/>
      <FilterItem type="Şehir" isActive={true} title="Etkinlik tarihi" values={["Eskişehir","İzmit","Isparta"]}/>
     
    </>
  );
}

export default Filter;
